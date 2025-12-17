
const _password = Symbol("secret");

class User{
    constructor(name, password){
        this.name = name;
        this[_password] = password;
    }
    checkPassword(input){
        return input === this[_password];
    }
    changePassword(newPassword){
        this[_password] = newPassword;
    }
}





const user = new User('John', 'secret');

console.log(user.checkPassword('secret'));
console.log(user.checkPassword('123'));    

console.log(Object.keys(user)); 
