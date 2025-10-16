
function foo(arr)
{
    let size1 = arr.length;
    let size2 = arr[0].length;
    let count = 0;
    for(let i = 0; i < size1; i++)
    {
        for(let j = 0; j < size2; j++)
        {
            if(arr[i][j] == 0)
            {
                count = 0;
            
                if(i != size1 - 1 && arr[i + 1][j] == "m")
                {
                ++count;
                }
                if(i != 0 && arr[i - 1][j] == "m")
                {
                ++count;
                }
                if(j != 0 && arr[i][j - 1] == "m")
                {
                ++count;
                }
                if(j != size2 - 1 && arr[i][j + 1] == "m")
                {
                ++count;
                }
                if(i != 0 && j != 0 && arr[i - 1][j - 1] == "m")
                {
                ++count;
                }
                if(i != 0 && j != size2 - 1 && arr[i - 1][j + 1] == "m")
                {
                ++count;
                }
                if(j != 0 && i != size1 - 1 && arr[i + 1][j - 1] == "m")
                {
                ++count;
                }
                if(i != size1 - 1 && j != size2 - 1 && arr[i + 1][j + 1] == "m")
                {
                ++count;
                }
                arr[i][j] = count;
            }
        }
    }
    return arr;
}

let arr = [
    [0,"m",0,"m",0],
    [0,0,"m",0,0],
    [0,0,0,0,0],
    ["m","m",0,0,0],
    [0,0,0,"m",0],
];
console.log(foo(arr));