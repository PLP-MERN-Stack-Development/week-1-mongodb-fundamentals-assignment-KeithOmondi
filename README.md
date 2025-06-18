# Week 1 MongoDB Assignment: plp_bookstore

## Setup Instructions

### MongoDB Setup
- Install MongoDB Community Edition from https://www.mongodb.com/try/download/community
- Alternatively, create a free MongoDB Atlas cluster at https://www.mongodb.com/cloud/atlas
- Connect using `mongosh` or MongoDB Compass

### Database & Collection
- Database: `plp_bookstore`
- Collection: `books`

---

## Running the Scripts

### Insert Books
To insert the sample books, open your `mongosh` shell and run:

```bash
mongosh

// Inside mongosh shell
load("insert_books.js")
