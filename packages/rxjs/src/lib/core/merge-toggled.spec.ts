import { interval, map, Observable, of, take, timer } from 'rxjs';
import { fakeTime, subscribeSpyTo                   } from '@hirez_io/observer-spy';

import { mergeToggled } from './merge-toggled';

describe(`mergeToggled`, () =>
{
    it('should return an observable', () => expect(mergeToggled(of(1), { on: of(1), off: of(2) })).toBeInstanceOf(Observable));

    it('should return only values emitted between `on` and `off` emissions', fakeTime((flush) =>
    {
        // Emit values from 1 to 50, one each millisecond
        const stream = interval(1).pipe(take(50), map(i => i + 1));
        // Open 3 windows, every 10 milliseconds
        const on     = interval(10).pipe(take(3));
        // Close each window after 2 milliseconds (will allow 3 values to pass before closing)
        const off    = () => timer(2);
        
        const toggled = mergeToggled(stream, { on, off });

        const observer = subscribeSpyTo(toggled);

        flush();

        expect(observer.getValues()).toEqual([
            10, 11, 12,
            20, 21, 22,
            30, 31, 32
        ]);
    }));
});