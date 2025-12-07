
class Character{
    constructor(name,hp){
        if(new.target == Character){
            throw new Error("cheq karox jarangel Characteric");
        }
        this.name = name;
        this.hp = hp
    }
    attack(target){
        throw new Error("abstract metod e");
    }
    defend(damage){
        throw new Error("abstract metod e");
    }
    
    isAlive(){
        if(this.hp > 0){
            return this.hp;
        }else{
            return 0;
        }
    }
}

class Warrior extends Character{
    constructor(name,hp,attackPower){
        super(name,hp);
        this.attackPower = attackPower;
    }

    atack(target){
      
        target.defend(attackPower);

    }
    defend(damage){
        
        this.hp -= damage;

    }
}