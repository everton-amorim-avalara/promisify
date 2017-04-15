"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Promisify me!
 * ```javascript
 * promisify( fs.readFile, 'file.txt' ).then( ([contents]) => {
 *   console.log(contents)
 * })
 * ```
 */
exports.promisify = function (fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return new Promise(function (resolve, reject) {
        fn.apply(void 0, args.concat([function (err) {
                var result = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    result[_i - 1] = arguments[_i];
                }
                if (err)
                    return reject(err);
                resolve(result);
            }]));
    });
};
function request(url, opts, cb) { }
var a = exports.promisify(request, 'www', { a: '2' });
a.then(function (_a) {
    var a = _a[0], b = _a[1];
});
/**
 * When the method is part of an object created with `new X()`.
 */
function promisifyOop(instance, fnString) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return new Promise(function (resolve, reject) {
        instance[fnString].apply(instance, args.concat([function (err) {
                var result = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    result[_i - 1] = arguments[_i];
                }
                if (err)
                    return reject(err);
                resolve(result);
            }]));
    });
}
exports.promisifyOop = promisifyOop;
