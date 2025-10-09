

let arr = [1,2,3,4,5];

function mySome(arr,callback)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(callback(arr[i],i,arr))
        {
            return true;
        }
    }
    return false;
}

let res = mySome(arr,function(element,index,arr)
{
    return element % 2 === 0;
});

console.log(res);