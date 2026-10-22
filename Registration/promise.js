let promise = new promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("Data received successfully!");
    },2000);

});
promise.then((message)=>{
    console.log(message);
});