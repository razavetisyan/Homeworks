
let arr = [1,2,3,4,5];

function myIndexOf(arr,index)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == index)
        {
            return i;
        }
    }
    return -1;
}

let res = myIndexOf(arr,function(element,index,arr)
{
    return element;
});

console.log(myIndexOf(arr,4));