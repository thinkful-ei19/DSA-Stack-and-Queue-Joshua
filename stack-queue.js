'use strict';

function isStackEmpty(stack) {
  return stack.top === null;
}

class QueueStack {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }
    
  enque(data) {
    this.inbox.push(data);
  }
    
  _reverse() {
    if(isStackEmpty(this.outbox)) {
      while(!isStackEmpty(this.inbox)){
        this.outbox.push(this.inbox.pop());
      }
    }
  }

  deque() {
    this._reverse();
    return this.outbox.pop();
  }

  peek() {
    this._reverse();
    return this.outbox.peek();
  }
}