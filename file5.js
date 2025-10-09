
let arr = [1,2,3,4,5];

function myEvery(arr,callback)
{
    let flag = true;

    for(let i = 0; i < arr.length; i++)
    {
        if(flag)
        {
            return callback(arr[i]);
        }
    }
}

let res = myEvery(arr,function(element,index,arr)
{
    return element % 2 === 0;
});

console.log(res);