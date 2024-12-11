function binarySearch(array, searchItem) {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let middleIndex = Math.floor((startIndex + endIndex) / 2);

  while (array[middleIndex] != searchItem && startIndex != middleIndex) {
    if (array[middleIndex] > searchItem) {
      endIndex = middleIndex;
      middleIndex = Math.floor((startIndex + endIndex) / 2);
    } else {
      startIndex = middleIndex;
      middleIndex = Math.floor((startIndex + endIndex) / 2);
    }
  }
  return startIndex === middleIndex ? -1 : middleIndex;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));

/* 
  Sorted Array use binary search => BIG O -> O(log n)

  1 2 3 4 5 6 7 8 9  => 3 
  S       M       E
  S   M   E

  1 2 3 4 5 6 7 8 9  => 8 
  S       M       E
          S   M   E
              S M E
                SME

  1 2 3 4 5 6 7 8 9  => 0 
  S       M       E
  S   M   E
  S M E
  SME
   
*/
