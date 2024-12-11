/* Unsorted array  */
/* BIG O -> O(n) */

function linearSearch(arr, searchItem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchItem) {
      return i;
    }
  }
  return -1;
}

const result = linearSearch([10, 2, 12, 15, 1, 9], 91);
console.log(result);
