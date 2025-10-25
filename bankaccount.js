
class BankAccount{

    constructor(owner,balance = 0)
    {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount)
    {
        return this.balance += amount;
    }

    withdraw(amount)
    {
        if(this.balance >= amount)
        {
            console.log(this.balance -= amount);
        }else{
            console.log("anbavarar mijocner");
        }
    }
}

let obj = new BankAccount("armen",5000);

console.log(obj.deposit(2000));
obj.withdraw(7000);
