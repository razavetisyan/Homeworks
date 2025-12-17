
class EvenNumber{
    static [Symbol.hasInstance](value){
        return typeof value === "number" && value % 2 == 0;
    }
}
console.log(4 instanceof EvenNumber);  
console.log(7 instanceof EvenNumber);   
console.log('4' instanceof EvenNumber);