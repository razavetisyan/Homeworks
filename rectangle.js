
class Rectangle {
    constructor(width,height)
    {
        this.width = width;
        this.height = height;
    }
    area(width,height)
    {
        return width * height;
    }
    perimeter(width,height)
    {
        return (width + height) * 2;
    }
}

let obj = new Rectangle();
console.log(obj);
console.log(obj.area(2,5));
console.log(obj.perimeter(2,5));