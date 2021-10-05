//8. Implement a singly linked list in es6 and implement addFirst() addLast(), length(), getFirst(), getLast(). (without using array)


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

let l1 = new LinkedList();
l1.addFirst(4);
l1.addFirst(7);
l1.addLast(9);
l1.addLast(18);
l1.addLast(20);
console.log(l1.getFirst());
console.log(l1.getLast());
console.log(l1.getLength());

export {LinkedList};