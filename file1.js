
let arr = [1, 2, 3, 4, 5];

function myForEach(arr,callback)
{
    for(let i = 0; i < arr.length;i++)
    {
        callback(arr[i],i,arr);
    }
    return undefined;
}

myForEach(arr,function(element,index,arr){

       console.log(element, index, arr);
});
