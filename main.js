let p = new Promise((resolve, reject) => {
    let x = 1 - 2
    x == -1? resolve("Success") : reject("failure")
})


p.then(message => {
    console.log(
        "This is in the then" + message
    );
})
p.catch(message => {
    console.log("This is in the catch" + message)
})
 
