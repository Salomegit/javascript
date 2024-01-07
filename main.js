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
      // Simulating a delay of 2 seconds
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
  


    // use effect whenever a value in the array changes within the use effect function the use effect word runs appropriately
    const data = [
      {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
          "fantasy",
          "high-fantasy",
          "adventure",
          "fiction",
          "novels",
          "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
          spanish: "El señor de los anillos",
          chinese: "魔戒",
          french: "Le Seigneur des anneaux",
        },
        reviews: {
          goodreads: {
            rating: 4.52,
            ratingsCount: 630994,
            reviewsCount: 13417,
          },
          librarything: {
            rating: 4.53,
            ratingsCount: 47166,
            reviewsCount: 452,
          },
        },
      },
      {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
          "science fiction",
          "humor",
          "speculative fiction",
          "short stories",
          "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
          goodreads: {
            rating: 4.16,
            ratingsCount: 11663,
            reviewsCount: 812,
          },
          librarything: {
            rating: 4.13,
            ratingsCount: 2434,
            reviewsCount: 0,
          },
        },
      },
      {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
          spanish: "",
        },
        reviews: {
          goodreads: {
            rating: 4.25,
            ratingsCount: 1142893,
            reviewsCount: 49701,
          },
        },
      },
      {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
          spanish: "Harry Potter y la piedra filosofal",
          korean: "해리 포터와 마법사의 돌",
          bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
          portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
          goodreads: {
            rating: 4.47,
            ratingsCount: 8910059,
            reviewsCount: 140625,
          },
          librarything: {
            rating: 4.29,
            ratingsCount: 120941,
            reviewsCount: 1960,
          },
        },
      },
      {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
          korean: "왕좌의 게임",
          polish: "Gra o tron",
          portuguese: "A Guerra dos Tronos",
          spanish: "Juego de tronos",
        },
        reviews: {
          goodreads: {
            rating: 4.44,
            ratingsCount: 2295233,
            reviewsCount: 59058,
          },
          librarything: {
            rating: 4.36,
            ratingsCount: 38358,
            reviewsCount: 1095,
          },
        },
      },
    ];
    
    function getBooks() {
      return data;
    }
    console.log(getBooks())
    
    function getBook(id) {
      return data.find((d) => d.id === id);
    }


    console.log(getBook(4))