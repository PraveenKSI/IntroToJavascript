//1.Filter unique array members using Set.

let st1 = new Set();
let arr = [1,2,4,5,1,2,31,4];

for(let i = 0;i < arr.length;i++){
    st1.add(arr[i]);
}

let res = [];

st1.forEach((ele)=>{
    res.push(ele);
})

console.log(st1);

console.log("After Filtering");
console.log(res);