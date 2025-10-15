
let digits = [1,2,3];

function foo(digits)
{
    let size = digits.length - 1;
    
    for(let i = size; i >= 0; i--)
    {
        if(digits[i] < 9)
        {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}

console.log(foo(digits));