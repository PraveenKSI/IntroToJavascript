//2.Find the possible combinations of a string and store them in a MAP

let possibleCombinations = (str) =>{
    let combinations = [];
      for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));
        }
    }
   return combinations;
}

let combinations = possibleCombinations("aadseasfe");


let map1 = new Map();
for(ch of combinations){
    let val = map1.get(ch);
    if(val === undefined){
        map1.set(ch,1);
    }
    else{
        map1.set(ch,val+1);
    }
}

console.log(map1);