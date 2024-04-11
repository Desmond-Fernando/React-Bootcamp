const pureFunc = (a, b) => {
  return a + b;
};

// Pure Functions should return exact same values exact same paramters or values provided like idompotence

pureFunc(2, 5); // 7
pureFunc(2, 5); // 7
pureFunc(2, 5); // 7

// Impure

let c = 3;
const funcA = (a, b) => {
  return a + b + c;
};

// Returning value is depended on external c value
// Pure function should only be dependent on props be passed on to it

// Side effects;
