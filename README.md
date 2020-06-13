# TypeScriptDataAlgos

Data structures and Alogrithms in Typescript

## Dependacies

1. install dependancies run `sh install.sh`

2. npm i -D jest ts-jest typescript

#### Set up workspace

3. npm i -D @types/jest

# Jest.conf

```js
module.exports = {
  transform: { "^.+\\.ts?$": "ts-jest" },
  testEnvironment: "node",
  testRegex: "/src/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
```
