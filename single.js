
function foo(num)
{
    let size = num.length;
    let res = num[0];
    for(let i = 1; i < size; i++)
    {
        res ^= num[i];
    }
    return res;
}
let num = [2,2,1];
console.log(foo(num));