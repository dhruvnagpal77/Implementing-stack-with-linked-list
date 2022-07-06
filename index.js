class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(){
    // If empty stack
    if (this.top == null){
      return undefined;
    }
    return this.top.value;
  }

  push(value){
    var newNode = new Node(value);
    // If empty stack
    if (this.top == null){
      this.top = newNode;
      this.bottom = newNode;
    }
    else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop(){
    // If empty stack
    if (this.top == null){
      return undefined;
    }
    //If only one node in stack
    if (this.length == 1){
      this.top = null;
      this.bottom = null;
      this.length = 0;
      return;
    }
    this.top = this.top.next;
    this.length--;
  }

  isEmpty(){
    if (this.top == null){
      return true;
    }
    else{
      return false;
    }
  }
}

var myStack = new Stack();
myStack.push(5);
// myStack.push(10);
// myStack.push(15);
myStack.pop();
console.log(myStack);
console.log(myStack.peek());

