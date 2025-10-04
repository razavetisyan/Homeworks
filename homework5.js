let arr1 = [1,2];
let arr2 = [3,4];

for(let i = 0; i < arr2.length; i++)
{
    arr1[arr1.length] = arr2[i];

}
console.log(arr1);