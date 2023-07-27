/* eslint-disable */
export default {
  displayName: "rxjs",
  preset: "../../jest.preset.js",
  globals: {},
  setupFilesAfterEnv: [
    "../../node_modules/@hirez_io/observer-spy/dist/setup-auto-unsubscribe.js",
  ],
  transform: {
    "^.+\\.[tj]s$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.spec.json",
      },
    ],
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory: "../../coverage/packages/rxjs",
};
