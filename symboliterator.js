
class Range{
    constructor(start,end){
        this.start = start;
        this.end = end;
    }

    [Symbol.iterator](){
        let first = this.start;
        let last = this.end;
        
        return {
            next(){
                if(first <= last){
                    return{value : first++,done : false}
                }else{
                    return{done : true}
                }
            }
        }
    }
}

const res = new Range(1,5);

const iter = res[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


// for (const item of res){
//     console.log(item);
// }