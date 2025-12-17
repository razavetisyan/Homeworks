
let arr = [1,2,3,4];

let item = arr[Symbol.iterator]();

for(const res of item){
    console.log(res);
}