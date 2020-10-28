'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  // console.log(linkedlist)
  // console.log("this is linked list head", linkedlist.head)

  //Our Steps
  //1. create pointers
  //2. setting speeding for each pointer
  //3. traverse the linked list at same time
  //4. check to see if they match up/equal each other aka on same node.
  //5. return true if they match, return false if they do not.

  const slowPointer = linkedlist.head
  const fastPointer = linkedlist.head

  while (fastPointer !== null && slowPointer !== null && fastPointer.next !== null){
    //up to here
  }


};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
