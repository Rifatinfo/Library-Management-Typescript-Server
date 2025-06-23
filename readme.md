
# 📚 Library Management API

A RESTful API built with **Express.js**, **TypeScript**, and **MongoDB** for managing books in a library system.

---

## 🚀 Features

- 📖 Create, Read, Update, Delete (CRUD) books
- 🔎 Filter by genre
- 📊 Sort by any field
- 📏 Limit results
- 🧾 Borrow book and track quantity

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB & Mongoose
- dotenv

---

## ⚙️ Setup Instructions


<pre>
live Link  https://library-management-typescript-serve.vercel.app/
</pre>

---

### 1. Clone the Repository

<pre>
git clone https://github.com/Rifatinfo/Library-Management-Typescript-Server.git
cd library-api 
</pre>

---
##  Environment Variables

 
<pre>PORT=5000
MONGODB_URI=mongodb://localhost:27017/LibraryDB</pre>

##  Run the Server


---



## Folder structure 

<pre>
src/
├── controllers/
├── models/
├── routes/
├── utils/
├── config/
├── index.ts
</pre>

## API Details

###  Book JSON
<pre>
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5,
  "available": true
}
</pre>

###  Borrow JSON
<pre>
 {
  "bookId": "6856b6b4d3c59ecf5fc1c04d",
  "quantity": 1,
  "dueDate": "2025-07-01"
}
</pre>



## Get All Books (with filter, sort, limit)

```bash 
GET /api/books?filter=FANTASY&sortBy=title&sort=asc&limit=5
