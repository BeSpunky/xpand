import { Observable, zip } from 'rxjs';

import { observeMapAsArray           } from '../_utils/observe-map-as-array';
import { EmittedMapOf, ObservableMap } from '../types/maps';

export function zipMap<T extends ObservableMap>(map: T): Observable<EmittedMapOf<T>>
{
    return observeMapAsArray(map, observables => zip(...observables))
}