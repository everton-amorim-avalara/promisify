/**
 * Promisify me!
 * ```javascript
 * promisify( fs.readFile, 'file.txt' ).then( ([contents]) => {
 *   console.log(contents)
 * })
 * ```
 */
export const promisify : PromisifyT = ( fn, ...args ) => {
    return new Promise( (resolve, reject) => {
        fn( ...args , (err, ...result) => {
            if (err) return reject(err)
            resolve(result)
        })
    }) as any
}


function request( url:string, opts:{a:string}, cb:(err:Error, resp:{b:string}, body:string) => any ) {  }

var a = promisify( request, 'www', {a:'2'} )
a.then( ([a,b]) => {
    
} )


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