'use strict';

let promise = new Promise((resolve, reject) => {
    reject('SECRET VALUE');
});

let promise1 = Promise.resolve('Resolved');
promise.catch(err => console.log(err));
