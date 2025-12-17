
class Collection{
     [Symbol.toStringTag] = "masnaget";
}

let obj = new Collection();
console.log(Object.prototype.toString.call(obj));