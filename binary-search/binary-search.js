"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  //step 1: find middle of array, compare target to middle element
  //step 2: split original array in half (if odd length, lower half has one more than upper half)
  //step 3: focus on half that contains the target based on whether target is greater or lesser than middle element
  //step 4: iterate through half until the target is found, return true (or not found, return false)
  const middleElement = Math.ceil(array.length / 2);
  // console.log("middleElement", middleElement);
  const firstHalf = array.slice(0, middleElement);
  const secondHalf = array.slice(middleElement);
  // console.log("firstHalf", firstHalf);
  // console.log("secondHalf", secondHalf);
  // console.log("array[middleElement]", array[middleElement]);
  if (array[middleElement] === target) {
    return true;
  }
  if (target < array[middleElement]) {
    debugger;
    for (let i = 0; i < firstHalf.length; i++) {
      // console.log("in for loop", firstHalf[i]);
      if (target === firstHalf[i]) {
        return true;
      }
    }
    // return false;
  } else {
    for (let i = 0; i < secondHalf.length; i++) {
      if (target === secondHalf[i]) {
        return true;
      }
    }
    // return false;
  }
  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
