/**
 * Promisify me!
 * ```javascript
 * promisify( fs.readFile, 'file.txt' ).then( ([contents]) => {
 *   console.log(contents)
 * })
 * ```
 */
export function promisify( fn, ...args ) {
    return new Promise( (resolve, reject) => {
        fn( ...args , (err, ...result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}


/**
 * When the method is part of an object created with `new X()`.
 */
export function promisifyOop( instance, fnString, ...args ) {
    return new Promise( (resolve, reject) => {
        instance[fnString]( ...args , (err, ...result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}