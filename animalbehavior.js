
const Flyable = (Base) => class extends Base{
    fly(){
        console.log("flying...");
    }
}

const Swimmable = (Base) => class extends Base{
    swim(){
        console.log("swimming...");
    }
}

class Animal{};

class Duck extends Flyable(Swimmable(Animal)){

}

const d = new Duck();
// d.fly();
// d.swim();

class Penguin extends Swimmable(Animal){

}

const p = new Penguin();
// p.swim();

class Eagle extends Flyable(Animal){

}

const e = new Eagle();
// e.fly();