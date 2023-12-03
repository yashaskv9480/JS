const p = new Promise((resolve,reject) => {
    const a = 1 + 5;
    if(a === 2){
        resolve("Sucess")
    }
    else{
        reject("Failure")
    }
})

p.then((message) =>{                                         // message refers to response/ans from resolve or reject
    console.log(message)
}).catch((message) => {
    console.log(message)
})