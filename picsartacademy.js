
class PicsartAcademy{
    constructor(){
        this.classroom = new Classroom();
        this.kitchen = new Kitchen();
        this.library = new Library();
    }
    
    showInfo(){
        console.log("Picsart academian uni");
        console.log(this.classroom.info());
        console.log(this.library.info());
        console.log(this.kitchen.info());
    }

}
class Classroom{
    constructor(room){
        this.room = room;
        this.list = [];
    }

    addStudentName(name){
        this.list.push(name);
    }
    listStudents(){
        console.log(`${this.room} lsarani usanoxnery`);

        this.list.forEach(student => {
            console.log(`${student}`);
        })
    }
    info(){
        return "Dasaranner vortex sovorum en";
    }
}
class Library{
    constructor(name){
       this.name = name;
        this.books = [];
    }
    addBook(author,title){
        this.books.push({author,title});
    }

    listBooks(){
        console.log(`${this.name} gradarani grqery`);

        this.books.forEach(book => {
            console.log(`${book.author} hexinaki ${book.title} girqy`);
        });
    }
    info(){
        return "Gradaran vortex girq en kardum";
    }
}
class Kitchen{
    constructor(name){
        this.name = name;
        this.staff = [];
    }

    addWorker(name){
        this.staff.push(name);
    }

    listWorkers(){
        console.log(`${this.name} i ashxatakazmy`);

        this.staff.forEach(employee => {
            console.log(`${employee}`);
        });
    }
    info(){
        return "Xohanoc vortex hac en utum";
    }
}

let academy = new PicsartAcademy();
academy.showInfo();

let room = new Classroom("Claude Shanon");
room.addStudentName('armen');
room.addStudentName('anahit');
room.listStudents();

let library = new Library("Picsart academiayi");
library.addBook("agata qristi","voske dzknik");
library.addBook("shirvanzade","artisty")
library.listBooks();

let employees = new Kitchen("Picsart acamediayi xohanoc");
employees.addWorker("armen");
employees.addWorker("gayane");
employees.listWorkers(); 

