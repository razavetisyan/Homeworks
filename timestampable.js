
const Timestampable = (Base) => class extends Base{
    constructor(){
        super();
    }

    time(){
        this.createdAt = Date.now();
        this.uptadetAt = Date.now();
    }

    touch(){
        this.uptadetAt = Date.now();
    }
}

class User{
    constructor(name){
        super();
        this.name = name;
        this.time();
    }

    rename(newName){
        this.name = newName;
        this.touch();
    }
   
}

Object.assign(User.prototype = Timestampable);  
