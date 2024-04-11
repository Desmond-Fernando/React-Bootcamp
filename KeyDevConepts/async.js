const myPromise = new Promise((resolve, reject) => {
  if (false) {
    resolve('I am resolved');
  } else {
    reject(' I am rejected');
  }
});

// Promise will be in three states : 1. pending, 2. fulfiled, 3. rejected but 2 and three in settled state

// resolved state can only be acceced with '.then'
// reject stat can only be accessed with '.catch'
myPromise
  .then((result) => result + 'modifed !!!') // Can chain multiple then as it return another promose once modied
  .then((result) => console.log(result))
  .catch((error) => console.log('Something went wrong'));
