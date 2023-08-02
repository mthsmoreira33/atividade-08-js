const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const union = (array1, array2) => {
  const newArray = array1.concat(array2);
  return newArray;
};

console.log(union(array1, array2));
