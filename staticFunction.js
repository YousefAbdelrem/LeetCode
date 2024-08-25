
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