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

## promisifyOop( instance, fnString, ...args )

```javascript
promisifyOop( pg, 'execute', 'SELECT * FROM table WHERE id = $1', [23] )
  .then( ([rows]) => {
    console.log(rows)
  })
```
