
class GenRange{
    constructor(start, end){
        this.start = start;
        this.end = end;
    }

    *[Symbol.iterator](){
        let first = this.start;
        let last = this.end;

        for(let i = first; i <= last; ++i){
            yield i;
        }
    }
}


const range = new GenRange(1, 4);
console.log([...range]); 