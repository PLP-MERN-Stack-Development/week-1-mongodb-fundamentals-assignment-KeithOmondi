// queries.js
// Run each query in mongosh connected to plp_bookstore database

db = db.getSiblingDB("plp_bookstore");

// --- Task 2: Basic CRUD Operations ---

// Find all books in genre "Dystopian"
db.books.find({ genre: "Dystopian" }).pretty()

// Find books published after 2010
db.books.find({ published_year: { $gt: 2010 } }).pretty()

// Find books by author "Yuval Noah Harari"
db.books.find({ author: "Yuval Noah Harari" }).pretty()

// Update price of "The Silent Patient" to 16.99
db.books.updateOne(
  { title: "The Silent Patient" },
  { $set: { price: 16.99 } }
)

// Delete a book by title "1984"
db.books.deleteOne({ title: "1984" })

// --- Task 3: Advanced Queries ---

// Find books both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
}).pretty()

// Projection: only title, author, price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).pretty()

// Sorting by price ascending
db.books.find().sort({ price: 1 }).pretty()

// Sorting by price descending
db.books.find().sort({ price: -1 }).pretty()

// Pagination: 5 books per page, page 1
db.books.find().skip(0).limit(5).pretty()

// Pagination: page 2
db.books.find().skip(5).limit(5).pretty()

// --- Task 4: Aggregation Pipeline ---

// Average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]).pretty()

// Author with most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]).pretty()

// Group books by publication decade and count
db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: { $concat: [ { $toString: { $multiply: ["$_id", 10] } }, "s" ] },
      count: 1,
      _id: 0
    }
  }
]).pretty()

// --- Task 5: Indexing ---

// Create index on title
db.books.createIndex({ title: 1 })

// Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 })

// Explain usage of index on title for query
db.books.find({ title: "The Silent Patient" }).explain("executionStats")
