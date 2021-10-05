function filterArr(arr){
    let st1 = new Set();
    for(let i = 0;i < arr.length;i++){
        st1.add(arr[i]);
    }
    let res = [];
    st1.forEach((ele) =>{
        res.push(ele);
    })
    return res;
}

export {filterArr};