// 10. Implementation of stack (using linked list)

class Node{
    constructor(value,next){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    addFirst(val){
        let first = new Node(val);
        first.next = this.head;
        this.head = first;
        if(this.head.next == null){
            this.tail = this.head;
        }
        this.length++;
    }
    addLast(val){
        if(this.head == null){
            this.head = new Node(val);
            this.tail = this.head;
        }
        else {
            let temp = new Node(val);
            this.tail.next = temp;
            this.tail = this.tail.next;
        }
        this.length++;
    }
    getFirst(){
        return this.head.value;
    }
    getLast(){
        return this.tail.value;
    }
    getLength(){
        return this.length;
    }
}



class Stack extends LinkedList{
    constructor(){
        super();
    }
    push(val){
        this.addLast(val);
    }
    pop(){
        let temp = this.head;
        while(temp.next != this.tail){
            temp = temp.next;
        }
        let lastVal = this.tail.value;
        temp.next = null;
        this.tail = temp;
        this.length--;
        return lastVal;
    }
    top(){
        return this.getLast();
    }
    getSize(){
        return this.length;
    }
}

let s1 = new Stack();
s1.push(1);
s1.push(2);
console.log("The value popped is: "+ s1.pop());
s1.push(3);
s1.push(4);
console.log(s1.top());
console.log(s1.getSize());
