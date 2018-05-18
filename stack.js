'use strict';

//Creates a node containing the data and a reference to the next item
class _Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(data){
    //if the top of the stack is empty, then the data will be the
    //top of the stack
    if(this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    //if the top already has something then create a new node
    //add data to the new node
    // have the pointer point to the top 
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop(){
    //in order to remove the top of the stack, you have to point
    //the pointer to the next item and that next item becomes the
    //top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

let starTrek = new Stack();

function peek(stack){
  const node = starTrek.top;
  //console.log(node);
  return node.data;
}

function display(stack){
  let tempNode = stack.top;
  let result = peek(stack);
  while(tempNode.next !== null){
    tempNode = tempNode.next;
    result = `${tempNode.data}, ${result}`;
  }
  return result;
}


function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let newStack = new Stack();
  for (let i = 0; i< string.length; i++){
    newStack.push(string[i]);
  }

  for (let j = 0; j < string.length; j++){
    if(newStack.pop() === string[j]){
      return true;
    } else {
      return false;
    }
  }
}

// true, true, true
//console.log(is_palindrome('dad'));
//console.log(is_palindrome('A man, a plan, a canal: Panama'));
//console.log(is_palindrome('1001'));
//console.log(is_palindrome('Tauhida'));

function match(string){
  const openStack = new Stack();
  const closedStack = new Stack();

  let openParans = 0;
  let closedParans = 0;

  for(let i = 0; i < string.length; i++){
    //let current = string[i];
    
    /*if(')' || ']' || '}'){
      if(temp[lastChild] === '(' && current === ')')
        temp.pop();
      if(temp[lastChild] === '{' && current === '}')
        temp.pop();
      if(temp[lastChild] === '[' && current === ']')
        temp.pop();
    }
    else if (temp.length > 0){
      return false;
    }
  }*/

    if(string[i] === '('){
      openStack.push(i);
      openParans++;
    }
    else if (string[i] === ')'){
      closedStack.push(i);
      closedParans++;
    }
  }
  if(openParans === closedParans){
    return true;
  }
  else if(openParans > closedParans){
    const position = openStack.pop();
    return `Error - open paren at: ${position}`;
  }
  else if(openParans < closedParans){
    const position = closedStack.pop();
    return `Error - closed paren at: ${position}`;
  }
}

console.log(match('([{}])'));
console.log(match('[2, 4]'));
console.log(match('{)'));



function main(){

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  
  starTrek.pop();
  starTrek.pop();
  starTrek.push('Scotty');
  //console.log(JSON.stringify(starTrek));
}

main();

//console.log(peek());
//console.log(display(starTrek));


//sort stack

/*function sort(stack){
  let numStack = new Stack();
  while(stack.top){
    let value = stack.pop();
    while(numStack.top && peek(numStack) > value){
      stack.push(numStack.pop());
    }

    numStack.push(value);
  }
  return display(numStack);
}*/

