
const FuelMixin = (Base) => class extends Base{
    constructor(name,fuel){
        super(name);
        this.fuel = fuel;
    }

    refuel(amount){
        if(this.fuel  <= 0){
            throw new Error("vareliq avelacreq");
        }
        this.fuel += amount;
        console.log(`vareliq avelacvec ${this.fuel} litr`);
    }
    consume(amount){
        if(amount <= 0){
            throw new Error("vareliqy verjacav");
        }
        this.fuel -= amount;
        console.log(`${amount} litr vareliqy sparvec`);
    }
}

class Transport{
    constructor(name,maxSpeed){
        if(new.target == Transport){
            throw new Error("jarnagum chi karox linel")
        }
        this.name = name;
        this.maxSpeed = maxSpeed;
    }

    move(){
        throw new Error("abstarct metod e");
    }
   getMaxSpeed(){
        throw new Error("abstract metod e");
    }
    info(){
        console.log(`Tesak : ${this.name}, Aragutyuny : ${this.maxSpeed} km/h`);
    }
}

class Car extends FuelMixin(Transport){
    constructor(name,maxSpeed){
        super(name,maxSpeed);
    }
    move(){
        this.consume(10);
        console.log(`${this.name} sharjman jamanak caxsec : ${this.consume()}`);
    }
    getMaxSpeed(){
        return maxSpeed;
    }

}