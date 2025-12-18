
class Collection{
     [Symbol.toStringTag] = "Collection";
}

let obj = new Collection();
console.log(Object.prototype.toString.call(obj));
