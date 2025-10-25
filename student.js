
class Student{

    constructor(name){
        this.name = name;
        this.grades = [];
    }

    addGrade(grade)
    {
        this.grades.push(grade);
    }

    average()
    {
        let count = 0;
        for(let i = 0; i < this.grades.length;i++)
        {
            count += this.grades[i];
        }

        return count/this.grades.length;

    }
}

let obj = new Student("armen");
obj.addGrade(5);
obj.addGrade(6);
obj.addGrade(7);
console.log(obj.average());
