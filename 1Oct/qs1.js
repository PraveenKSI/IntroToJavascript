let arr = [3,62,234,7,23,74,23,76,92]
let arr2 = arr.filter((val)=>{
    if(val > 70){
        return val;
    }
})
console.log(arr2);