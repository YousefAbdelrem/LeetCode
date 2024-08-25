// count
// peek return the top only 
// pop from// push
const _arr = new WeakMap();

class Stack {
    constructor(){
        this.count = 0;
       _arr.set(this, [])
    }
    push(value){
        _arr.get(this).push(value);
    }
    peek(){
       if(_arr.get(this).length === 0)
        throw new Error("Stack is empty"); 
        return _arr.get(this)[_arr.get(this).length - 1];

    }
    pop(){
        if(_arr.get(this).length === 0) 
            throw new Error("Stack is empty"); 
        return _arr.get(this).pop();

    }
    get count() {
        return _items.get(this).length;
    }
}


