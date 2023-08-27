function customPromise(executor) {
    // Initial state
    let state = 'pending';
    let result = undefined;
    let error = undefined;
    let onFulfilledCallbacks = [];
    let onRejectedCallbacks = [];

    // Define resolve function
    function resolve(data) {
        // Ensure the state can only change from 'pending' to 'fulfilled' once
        if (state === 'pending') {
            state = 'fulfilled';
            result = data;
            for (const callback of onFulfilledCallbacks) {
                callback(result);
            }
        }
    }

    // Define reject function
    function reject(err) {
        // Ensure the state can only change from 'pending' to 'rejected' once
        if (state === 'pending') {
            state = 'rejected';
            error = err;
            for (const callback of onRejectedCallbacks) {
                callback(error);
            }
        }
    }

    // Execute the executor function immediately
    try {
        executor(resolve, reject);
    } catch (err) {
        // If an error occurs during executor execution, reject the promise
        reject(err);
    }

    // Define the then method for chaining
    this.then = function (onFulfilled, onRejected) {
        return new customPromise((resolve, reject) => {
            if (state === 'fulfilled') {
                setTimeout(() => {
                    try {
                        const nextResult = onFulfilled ? onFulfilled(result) : result;
                        resolve(nextResult);
                    } catch (err) {
                        reject(err);
                    }
                });
            } else if (state === 'rejected') {
                setTimeout(() => {
                    try {
                        const nextError = onRejected ? onRejected(error) : error;
                        resolve(nextError);
                    } catch (err) {
                        reject(err);
                    }
                });
            } else {
                onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const nextResult = onFulfilled ? onFulfilled(result) : result;
                            resolve(nextResult);
                        } catch (err) {
                            reject(err);
                        }
                    });
                });
                onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const nextError = onRejected ? onRejected(error) : error;
                            resolve(nextError);
                        } catch (err) {
                            reject(err);
                        }
                    });
                });
            }
        });
    };
}

// Example usage:
const myPromise = new customPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
        // or
        // reject('Failure!');
    }, 1000);
});

myPromise
    .then((data) => {
        console.log('Resolved:', data);
        return 'New Data';
    })
    .then((newData) => {
        console.log('Chained Resolved:', newData);
    })
    .catch((err) => {
        console.error('Rejected:', err);
    });