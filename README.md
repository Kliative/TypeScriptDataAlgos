# TypeScriptDataAlgos

Data structures and Alogrithms in Typescript

## Dependacies

```bash
jest
typescript
ts-jest
@types/jest
```

1. install dependancies run `sh install.sh`from root

or

2. npm i -D jest ts-jest typescript

```bash
npm install --save-dev jest typescript ts-jest @types/jest
npx ts-jest config:init
```

### Jest Setup

#### Jest.conf

```js
module.exports = {
  transform: { "^.+\\.ts?$": "ts-jest" },
  testEnvironment: "node",
  testRegex: "/src/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
```

##### Refs

https://dev.to/terabaud/testing-with-jest-and-typescript-the-tricky-parts-1gnc[`https://dev.to/terabaud/testing-with-jest-and-typescript-the-tricky-parts-1gnc`]

https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40[`https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40`] - Jest github[`https://github.com/chiragrupani/TSUnitTestsSetup/tree/master/HelloJest`]