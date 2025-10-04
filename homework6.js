
let str = "Learning JavaScript";
let ch = "Java";
const size1 = str.length;
const size2 = ch.length;
function foo(str,ch){
for(let i = 0; i <= size1; i++)
{
    let match = true;
    
    for(let j = 0; j < size2; j++)
    {
        if(str[i + j] !== ch[j])
        {
            match = false;
            break;   
        }
    }


if(match)
{
    return true;
}
}
}

let a =foo(str,ch);
console.log(a);