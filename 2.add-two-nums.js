// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input:
// const l1 = [2,4,3]
// const l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Input:
const l1 = [9,9,9,9,9,9,9]
const l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
// Explaination: 999999 + 9999 = 10009998

// var addTwoNumbers = function(l1, l2) {
//     const reversedL1 = l1.reverse();
//     const reversedL2 = l2.reverse();

//     let numL1 = 0;
//     for (let i=0; i<l1.length; i++) {
//         numL1 = numL1 + l1[i] * (10 ** ((l1.length-1) - i))
//     }

//     let numL2 = 0;
//     for (let i=0; i<l2.length; i++) {
//         numL2 = numL2 + l2[i] * (10 ** ((l2.length-1) - i))
//     }

//     let outputStr = (numL1 + numL2).toString();
//     // console.log(outputStr);
//     const output = [];
//     for (let i = outputStr.length-1; i >= 0; i--) {
//         output.push(Number(outputStr[i]))
//     }

//     return output;
// };

let addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    console.log(head)
}

console.log(addTwoNumbers(l1, l2));
