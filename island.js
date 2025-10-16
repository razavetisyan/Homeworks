
function foo(arr)
{
    let size1 = arr.length;
    let size2 = arr[0].length;
    let count = 0;
    let res = 0;
    for(let i = 0;i < size1;i++)
    {
        for(let j = 0;j < size2;j++)
        {
            if(arr[i][j] == 1)
            {
                count = 4;

                if( i != size1 - 1 && arr[i + 1][j] == 1)
                {
                    --count;
                }
                if(i != 0 && arr[i - 1][j] == 1)
                {
                    --count;
                }
                if(j != 0 && arr[i][j - 1] == 1)
                {
                    --count;
                }
                if(j != size2 - 1 && arr[i][j + 1] == 1)
                {
                    --count;
                }
                res += count;
            }
        }
    }
    return res;
}

let arr = [
    [0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0],
]
console.log(foo(arr));