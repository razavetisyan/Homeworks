
let interval = setInterval(() => {
     console.log("Ping");
},1000);

setTimeout(() => {
    clearInterval(interval);
},5000);
