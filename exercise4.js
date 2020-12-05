'use strict';

let promise = new Promise(function (resolve, reject) {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE!'));
});
function onReject(error) {
    console.log(error.message);
}
promise
.then((param) => console.log(param), onReject);
//.catch(error => onReject(error));