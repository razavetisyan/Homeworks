
    
function sum(num)
{
    let sum = 0;
    let res = 0;
    while(num > 0)
    {
        res = num % 10;
        sum += res * res;
        num = Math.floor(num / 10);
    }
    
    return sum;
}    

function foo(num) {
    let a = sum(num);
 
    while(a !== 1 && a !== 37)
    {
        a = sum(a);
    }
    return a === 1;
    
     
}

console.log(foo(19));