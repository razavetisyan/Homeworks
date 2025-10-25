
class Animal{
    constructor(name)
    {
        this.name = name;
    }

    speak()
    {
        console.log(`${this.name} hnchyun e ardzakum`);
    }
}

class Dog extends Animal{

    speak()
    {
        console.log(`${this.name} bark bark!!!`);
    }
}

let obj = new Dog("shuny");
obj.speak();