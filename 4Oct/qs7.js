// 7.Write a program to flatten a nested array to single level using arrow functions.


let arr = [1,2,3,[4,5,6,7],8,9,[10,11,[12,13,14,[15,16],17],18],19,{Name:"Praveen",Gender:"Male"}];

function flattenArr(arr){
    let res = [];
    for(let i = 0;i < arr.length;i++){
        if(Array.isArray(arr[i])){
            let inp = flattenArr(arr[i]);
            res = res.concat(inp);
        }
        else{
            res.push(arr[i]);
        }
    }
    return res;
}

let ans = flattenArr(arr);
console.log(ans);