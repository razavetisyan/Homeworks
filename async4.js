
function asyncDouble(n){
    return new Promise(resolve => {
        
        setTimeout(() => {
            resolve(n * 2);
        },300);
    });
}
asyncDouble(4).then(res => {
    console.log(res);
});