// 9. Implement Map and Set using Es6

let arr = [1,2,3,{name:"Praveen"},[4,5,6],2,3,[4,5,6]];

let mp = new Map();
for(let i = 0;i < arr.length;i++){
    let val =  mp.get(arr[i]);
    if(val === undefined){
        mp.set(arr[i],1);
    }
    else mp.set(arr[i],val+1);
}
console.log(mp);

let st = new Set();
for(let i = 0;i < arr.length;i++){
    st.add(arr[i]);
}
console.log(st);