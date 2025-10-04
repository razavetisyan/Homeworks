let str = "Hello world";

let count = 0;

for(let i = 0; str[i] !== undefined;i++)
{
    if(str[i] !== " "){

    count++;
    }
}

console.log(count);