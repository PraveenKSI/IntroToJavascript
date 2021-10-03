let arr = [1,2,3,4,5,6];

// 1.reduce converts the whole array based and conditions
console.log("After reduce()")
let val = arr.reduce((a,b)=>a+b);
console.log(val);

// 2.pop method removes the last element from the array
console.log("After pop()")
arr.pop()
console.log(arr);

//3.push method adds an element at last of the array
arr.push(10);
console.log("After Push(10)")
console.log(arr);

// 4.shift method removes element from the front of the array
arr.shift();
console.log("after shift()")
console.log(arr);

//5.unshift method adds element at the front of the array
arr.unshift(34);
console.log("after unshift(34)")
console.log(arr);

