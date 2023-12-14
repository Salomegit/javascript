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
 

    let o = new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        let x = Math.random()
        const shouldSucceed = x >= 0.5; 
        console.log(x)
        // Simulating success/failure randomly
        if (shouldSucceed) {
          const data = [1, 2, 3, 4, 5];
          // Simulating a successful response
          resolve(data);
        } else {
          // Simulating an error
          reject(new Error('Failed to fetch data'));
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  
  
  // Using the created Promise

    o.then(data => {
      console.log('Fetched data:', data);
      // Perform operations with the fetched data
    })
    o.catch(error => {
      console.error('Error fetching data:', error);
      // Handle errors if the Promise is rejected
    });
  