const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
        // reject('Something went wrong!');
    }, 1500);
});
console.log('before');

// only called when resolved!
promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
            // reject('Something went wrong!');
        }, 1500);
    });
}).then((str) => {
    console.log('does this run', str);
}).catch((error) => {
    console.log(error);
});
console.log('after');
