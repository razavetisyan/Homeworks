
let str = "hello world";
let size = str.length;
let res = "";

for(let i = 0; i < size; i++)
{
    let code = str.charCodeAt(i);
    if(code >= 97 && code <= 122)
    {
        res+= String.fromCharCode(code - 32)
       }else{
        res+= String.fromCharCode(code);
    }
}
console.log(res);
