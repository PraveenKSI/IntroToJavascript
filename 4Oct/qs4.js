// 4. Write a program to implement a class having static functions
class Dummy{
    static addVal(a,b){
        console.log(a+b);
    }
    static mulVal(a,b){
        console.log(a*b);
    }
}
Dummy.addVal(4,6);
Dummy.mulVal(4,0.5);