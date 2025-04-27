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

const books = getBooks();
books;

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(3);
book;

// const { title, author, genres } = book;
// console.log(title, author, genres);

// const [primaryGenre, secondaryGenre, ...other] = genres; //rest operator
// console.log(primaryGenre, secondaryGenre, other);

// const newGenre = [...genres, "epic fantasy"]; //spread operator
// console.log(newGenre);

// const updatedBook = {
//   pages: 1210,
//   ...book,
//   moviePublicationDate: "2001-12-19",
// };
// console.log(updatedBook);

// function getTotalReviewCount(book) {
//   const goodThing = book.reviews?.goodreads?.reviewsCount;
//   const libraryThing = book.reviews?.librarything?.reviewsCount ?? 0;
//   libraryThing;
//   return goodThing + libraryThing;
// }

// console.log(getTotalReviewCount(books));

// const titles = books?.map((x) => x?.title);
// titles;
// console.log(titles);

// function getTotalReviewCount(book) {
//   const goodThing = book.reviews?.goodreads?.reviewsCount;
//   const libraryThing = book.reviews?.librarything?.reviewsCount ?? 0;
//   libraryThing;
//   return goodThing + libraryThing;
// }

// const essentialData = books.map((data) => {
//   return {
//     title: data?.title,
//     author: data?.author,
//     reviewCount: getTotalReviewCount(data),
//   };
// });

// essentialData;
// console.log(essentialData);

// const filterBooks = books
//   ?.filter((item) => item?.pages < 500)
//   ?.filter((movieAdaptation) => movieAdaptation?.hasMovieAdaptation);
// filterBooks;

// const adventureBooks = books
//   ?.filter((item) => item?.genres?.includes("adventure"))
//   ?.map((book) => book?.title);
// adventureBooks;
// console.log(adventureBooks);

// const totalPages = books?.reduce((acc, curr) => acc + curr?.pages, 0);
// totalPages;

// const sortedArray = books
//   ?.slice()
//   ?.sort((book, page) => page?.pages - book?.pages);
// sortedArray;
// console.log(sortedArray);

// const newObj = {
//   id: 6,
//   title: "Gulliver's Travel",
//   publicationDate: "1996-08-01",
//   author: "George R. R. Martin",
//   genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
//   hasMovieAdaptation: true,
//   pages: 835,
//   translations: {
//     korean: "왕좌의 게임",
//     polish: "Gra o tron",
//     portuguese: "A Guerra dos Tronos",
//     spanish: "Juego de tronos",
//   },
//   reviews: {
//     goodreads: {
//       rating: 4.44,
//       ratingsCount: 2295233,
//       reviewsCount: 59058,
//     },
//     librarything: {
//       rating: 4.36,
//       ratingsCount: 38358,
//       reviewsCount: 1095,
//     },
//   },
// };

// // To add in the array
// const booksAfterAdd = [...books, newObj];
// booksAfterAdd;
// console.log(booksAfterAdd);

// // To delete in the array
// const booksAfterDelete = booksAfterAdd?.filter((book) => book?.id !== 6);
// booksAfterDelete;
// console.log(booksAfterDelete);

// // To update the array
// const updatedArray = booksAfterDelete?.map((book) =>
//   book?.id === 4 ? { ...book, pages: 1 } : book
// );
// updatedArray;
// console.log(updatedArray);

// const mockData = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res?.json())
//   .then((data) => console.log(data));

async function fetchingData() {
  const mockData = await fetch("https://jsonplaceholder.typicode.com/users");
  const obj = await mockData?.json();
  console.log(obj);
}

fetchingData();
