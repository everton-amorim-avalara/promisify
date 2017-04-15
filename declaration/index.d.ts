type SrcFn04<R1,R2,R3,R4> = (cb : (err:Error, r1:R1, r2:R2, r3:R3, r4:R4) => any ) => any
type SrcFn14<R1,R2,R3,R4,I1> = (i1:I1, cb : (err:Error, r1:R1, r2:R2, r3:R3, r4:R4) => any ) => any
type SrcFn24<R1,R2,R3,R4,I1,I2> = (i1:I1, i2:I2, cb : (err:Error, r1:R1, r2:R2, r3:R3, r4:R4) => any ) => any
type SrcFn34<R1,R2,R3,R4,I1,I2,I3> = (i1:I1, i2:I2, i3:I3, cb : (err:Error, r1:R1, r2:R2, r3:R3, r4:R4) => any ) => any
type SrcFn44<R1,R2,R3,R4,I1,I2,I3, I4> = (i1:I1, i2:I2, i3:I3, i4:I4, cb : (err:Error, r1:R1, r2:R2, r3:R3, r4:R4) => any ) => any


interface PromisifyT {
    <R1,R2,R3,R4>(fn:SrcFn04<R1,R2,R3,R4>) : Promise<[R1,R2,R3,R4]>
    <R1,R2,R3,R4,I1>(fn:SrcFn14<R1,R2,R3,R4,I1>, i1:I1) : Promise<[R1,R2,R3,R4]>
    <R1,R2,R3,R4,I1,I2>(fn:SrcFn24<R1,R2,R3,R4,I1,I2>, i1:I1, i2:I2) : Promise<[R1,R2,R3,R4]>
    <R1,R2,R3,R4,I1,I2,I3>(fn:SrcFn34<R1,R2,R3,R4,I1,I2,I3>, i1:I1, i2:I2, i3:I3) : Promise<[R1,R2,R3,R4]>
    <R1,R2,R3,R4,I1,I2,I3,I4>(fn:SrcFn44<R1,R2,R3,R4,I1,I2,I3,I4>, i1:I1, i2:I2, i3:I3, i4:I4) : Promise<[R1,R2,R3,R4]>
}

/**
 * Promisify me!
 * ```javascript
 * promisify( fs.readFile, 'file.txt' ).then( ([contents]) => {
 *   console.log(contents)
 * })
 * ```
 */
export declare const promisify: PromisifyT;
/**
 * When the method is part of an object created with `new X()`.
 */
export declare function promisifyOop(instance: any, fnString: any, ...args: any[]): Promise<any>;
