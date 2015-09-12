# keymirror-symbol

[![Build Status](https://travis-ci.org/bloodyowl/keymirror-symbol.svg)](https://travis-ci.org/bloodyowl/keymirror-symbol)

## install

```sh
$ npm install keymirror-symbol
```

## require

```javascript
var keyMirrorSymbol = require("keymirror-symbol")
```

## api

### object: keyMirrorSymbol(object)

takes an object, and creates a new one having,
for each `object`'s `key` a `key` property set to
`Symbol(key)`.

## example

```javascript
var constants = keyMirror({
  GET_DATA : null,
  RECEIVED_DATA : null
})

constants.GET_DATA // Symbol("GET_DATA")
```
