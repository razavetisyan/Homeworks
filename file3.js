
let arr = [1, 2, 3, 4, 5];

function myFilter(arr,callback)
{
    let result = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(callback(arr[i],i,arr))
        {
            result.push(arr[i]);
        }
    }
    return  result;
}

 let res = myFilter(arr,function(element,index,arr)
{
    return element % 2 === 0;
});

console.log(res);