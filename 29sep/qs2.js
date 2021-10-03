// let arr = [1,2,3,4,5];

// for(let i = 0;i < arr.length;i++){
//     setTimeout(()=>{
//         console.log(arr[i]);
//     },3000*(i+1));
// }

function f() {
    // your browser must support for..of loop
    // and let-scoped variables in for loops
    for (let letter of arguments) {
      console.log(letter);
    }
  }
  f('w', 'y', 'k', 'o', 'p');
  