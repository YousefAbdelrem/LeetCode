
class Circle {
    constructor(radius){
        this.radius = radius;
    }
    // static method 
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }

    // setter
    get radius() {
        return _radius.get(this);
    } 
    set radius (value){
        if (value <= 0) throw new Error('invalid radius');
        _radius.set(this, value);
    }
}

const circle = Circle.parse('{"radius" : 1}');
console.log(circle);

function format-funtion(s){
    let format = "+2";
    format += s;

}

const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
const index = array.findIndex();