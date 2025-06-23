
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


```bash
live Link  https://github.com/Rifatinfo/Library-Management-Typescript-Server.git

### 1. Clone the Repository

```bash
git clone https://github.com/Rifatinfo/Library-Management-Typescript-Server.git
cd library-api

##  Environment Variables

```bash 
PORT=5000
MONGODB_URI=mongodb://localhost:27017/LibraryDB

##  Run the Server

```bash
npm run dev

## Get All Books (with filter, sort, limit)

```bash 
GET /api/books?filter=FANTASY&sortBy=title&sort=asc&limit=5

```bash
src/
├── controllers/
├── models/
├── routes/
├── utils/
├── config/
├── index.ts
