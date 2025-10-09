
let arr = [1, 2, 3, 4, 5];

function myMap(arr,callback)
{   
    let result = [];
    for(let i = 0; i < arr.length; i++)
    {
        result.push(callback(arr[i],i,arr));
    }
    return result;
}

let res = myMap(arr,function(element,index,arr){
    return element * 2;
});

console.log(res);