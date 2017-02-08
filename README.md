# promisify
Another callback to promise converter.


## Requires

A `Promise` object in the global scope.


## Usage

## function promisify( fn, ...args )

 ```javascript
 promisify( fs.readFile, 'file.txt' ).then( ([contents]) => {
   console.log(contents)
 })
 ```

Care, responses always come wrapped in arrays.

## promisifyOop( instance, fnString, ...args )

Mostly the same as calling `promisify( obj.fn.bind(obj), ... )`.

```javascript
promisifyOop( pg, 'execute', 'SELECT * FROM table WHERE id = $1', [23] )
  .then( ([rows]) => {
    console.log(rows)
  })
``
