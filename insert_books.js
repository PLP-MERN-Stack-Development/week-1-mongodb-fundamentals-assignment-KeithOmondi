// insert_books.js
// Run this script in mongosh or Node.js environment connected to your MongoDB

const books = [
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    published_year: 2019,
    price: 14.99,
    in_stock: true,
    pages: 336,
    publisher: "Celadon Books"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    published_year: 2018,
    price: 13.50,
    in_stock: true,
    pages: 334,
    publisher: "Random House"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 17.99,
    in_stock: false,
    pages: 448,
    publisher: "Crown Publishing"
  },
  {
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "Fiction",
    published_year: 2018,
    price: 16.00,
    in_stock: true,
    pages: 368,
    publisher: "G.P. Putnam's Sons"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "Non-fiction",
    published_year: 2015,
    price: 18.99,
    in_stock: true,
    pages: 498,
    publisher: "Harper"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 11.98,
    in_stock: false,
    pages: 320,
    publisher: "Penguin"
  },
  {
    title: "The Testaments",
    author: "Margaret Atwood",
    genre: "Dystopian",
    published_year: 2019,
    price: 15.99,
    in_stock: true,
    pages: 432,
    publisher: "Nan A. Talese"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    published_year: 1925,
    price: 10.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 9.99,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Classic",
    published_year: 1951,
    price: 12.99,
    in_stock: true,
    pages: 214,
    publisher: "Little, Brown and Company"
  }
];

// If running inside mongosh, you can do:
db = db.getSiblingDB("plp_bookstore"); // Switch/create database
const result = db.books.insertMany(books);
print(`Inserted ${result.insertedCount} books.`);
