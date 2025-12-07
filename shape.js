
class Shape{
    constructor(color){
        if(new.target ==  Shape){
            throw new Error("cheq karox jarangel Shape ic");
        }
        this.color = color;
    }

    area(){
        throw new Error("abstract metod e");
    }
    perimeter(){
        throw new Error("abstract metod e");
    }
    describe(){
        console.log("Shape type",this.constructor.name);
        console.log("color",this.color);
        console.log("area",this.area());
        console.log("perimeter",this.perimeter());
    }
}

class Circle extends Shape{
    constructor(color,radius){
        super(color);
        this.radius = radius;
    }
    area(){
        return Math.PI * (this.radius ** 2); 
    }
    perimeter(){
        return 2 * Math.PI * this.radius;
    }

}

class Rectangle extends Shape{
    constructor(color,width,height){
        super(color);
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height;
    }
    
    perimeter(){
        return 2 * this.width + 2 * this.height;
    }
}

class Triangle extends Shape{
    constructor(color,a,b,c){
        super(color);
        this.a = a;
        this.b = b;
        this.c = c;
    }

    perimeter(){
        return this.a + this.b + this.c;
    }

    area(){
        const p = this.perimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
}

let circ = new Circle("red",5);
let rect = new Rectangle("green",3,4);
let trian = new Triangle("black",2,3,4);

circ.describe();
rect.describe();
trian.describe();
