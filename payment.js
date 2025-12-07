
class Payment{
    constructor(){
        if(new.target == Payment){
            throw new Error("jarangum chi karox linel");
        }
    }
    pay(amount){
        throw new Error("interface class e");
    }
    refund(id){
        throw new Error("interface class e");
    }
    getStatus(id){
        throw new Error("interface class e");
    }
}

class StripePayment extends Payment{
    constructor(balance){
        super();
        this.balance = balance;
    }
    pay(amount){
        return this.balance -= amount;
    }
    refund(id){
        return id;
    }
    getStatus(id){
        return `${this.id} : ${this.balance}`;
    }
}

class PayPalPayment extends Payment{
    constructor(balance){
        super();
        this.balance = balance;
    }
    pay(amount){
        return balance -= amount;
    }
    refund(id){
        return id;
    }
    getStatus(id){
        return `${this.balance} : ${this.id}`;
    }
}