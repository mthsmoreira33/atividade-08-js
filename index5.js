function findNumberInArray(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return true;
    }
  }
  return false;
}

console.log(findNumberInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
