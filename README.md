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

### Structure

Algos/...
AlgoName.ts

```js
export default class Fibonnaci {
 ...
 static FuncName = (arg:any): number => {
   ...
    return fibNum;
 }
};
```

tests/...
AlgoName.test.ts

```js
import AlgoName from '../[AlgoName]';
describe('AlgoName', function () {
    it('AlgoName is ...', () => {
    .......
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

Jest 

https://dev.to/terabaud/testing-with-jest-and-typescript-the-tricky-parts-1gnc

https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40

https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40- 
https://github.com/chiragrupani/TSUnitTestsSetup/tree/master/HelloJest

Algos

https://www.udemy.com/course/learning-algorithms-in-javascript-from-scratch/ 

# Alogorithm List

1. Fibonnaci (Recursive, Iterative, Memoization) -> Memoize Test Need Fix
2. Palindrome
3. TwoSum
4. FizzBuzz
5. Anagram
