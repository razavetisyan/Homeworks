
class Money{
    constructor(amount){
        this.amount = amount;
    }

    [Symbol.toPrimitive](hint){
        if(hint === "number"){
            return this.amount;
        }
        if(hint === "string"){
            return `${this.amount}$`
        }
        return this.amount;
    }
}


const money = new Money(100);

console.log(+money);       
console.log(money + 10);  
console.log(`${money}`);   
console.log(String(money));