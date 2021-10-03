function counter(){
    let count = 0;
    function increment(){
        count++;
        return count;
    }
    return increment;
}
let inc = counter();
inc();
inc();
inc();
inc();
console.log(inc());