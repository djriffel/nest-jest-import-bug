## Description

Bug demo repo for when Jest encounters an import of any file that isn't present in a barrel file.

This comes from the order of the root/parent, and the child/wildcard path being opposite of what they should be in the `moduleNameMapper` field. (e.g. the parent is configured first, so no import will get matched to the more specific child path).

I have reproduced this by commenting out the generated export of `some-lib.service` from its associated `index.ts` barrel file, and importing it into a .spec file. When running `yarn test` it will then error that the imported value is undefined (but won't have any error about unknown module paths).

## Problem

The problem occurs from the following snippet (in `package.json` from the `jest` block):

```js
"moduleNameMapper": {
  "@app/some-lib": "<rootDir>/libs/some-lib/src",
  "@app/some-lib/(.*)": "<rootDir>/libs/some-lib/src/$1"
}
```

This results in the 'yarn test' command throwing `TypeError: Cannot read property 'someMethod' of undefined`

## Fix

Reverse the order of the previous snippet, so that the more specific path comes first. This way the non-barreled imports will resolve properly under jest and won't result in 'undefined' import values:

```js
"moduleNameMapper": {
  "@app/some-lib/(.*)": "<rootDir>/libs/some-lib/src/$1",
  "@app/some-lib": "<rootDir>/libs/some-lib/src"
}
```

## Reference

See official [Jest docs](https://jestjs.io/docs/en/configuration#modulenamemapper-object) for details:

> "The order in which the mappings are defined matters. Patterns are checked one by one until one fits. The most specific rule should be listed first."
