const array = [];

for (let i = 2; array.length < 4; i++) {
  let sum = 1;

  const sqrtNumber = Math.sqrt(i);

  for (let j = 2; j <= sqrtNumber; j++) {
    if (i % j === 0) {
      sum += j;
      const divisorPair = i / j;

      if (divisorPair !== j) {
        sum += divisorPair;
      }
    }
  }

  if (sum === i) {
    array.push(i);
  }
}

console.log(array);
