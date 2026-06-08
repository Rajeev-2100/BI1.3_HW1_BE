# 📚 Book Management API

A RESTful API built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** for managing a collection of books. This API allows users to create, retrieve, update, and delete book records stored in a MongoDB database.

---

## 🚀 Features

* Add a new book
* Get all books
* Get a book by title
* Get books by genre
* Update book details by ID
* Update book rating by title
* Delete a book by ID
* MongoDB database integration using Mongoose
* CORS enabled for frontend integration

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* CORS

---

## 📂 Project Structure

```bash
├── db
│   └── db.connect.js
├── model
│   └── book.model.js
├── index.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Rajeev-2100/BI1.3_HW1_BE.git
cd BI1.3_HW1
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URL=your_mongodb_connection_string
```

### 4. Start the Server

```bash
node index.js
```

Server will run on:

```bash
http://localhost:3000
```

---

## 📖 Book Schema

```js
{
  title: String,
  author: String,
  publishedYear: Number,
  genre: [String],
  language: String,
  country: String,
  rating: Number,
  summary: String,
  coverImgUrl: String
}
```

---

## 📌 API Endpoints

### Create a New Book

**POST /**

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "publishedYear": 2018,
  "genre": ["Self-help"],
  "language": "English",
  "rating": 9,
  "country": "India",
  "summary": "A practical guide to building good habits and breaking bad ones.",
  "coverImgUrl": "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg"
}
```

---

### Get All Books

**GET /books**

Returns all books available in the database.

---

### Get Book by Title

**GET /books/:bookTitle**

Example:

```bash
GET /books/Atomic Habits
```

---

### Get Books by Genre

**GET /books/genre/:bookGenre**

Example:

```bash
GET /books/genre/Self-help
```

---

### Update Book by ID

**POST /books/Id/:bookId**

Example:

```json
{
  "_id": "6a0336a509cce987dacf0dc2"
}
```

---

### Update Book Rating by Title

**POST /books/title/:bookTitle**

Example:

```json
{
  "title": "Lean In"
}
```

---

### Delete Book by ID

**DELETE /books/:bookId**

Example:

```bash
DELETE /books/6a26685ae7de2112f5fe1ab8
```

---

## 🧪 Example Response

```json
{
  "message": "Book deleted successfully",
  "book": {
    "_id": "6844b9c9f4f4d7b123456789",
    "title": "Atomic Habits",
    "author": "James Clear"
  }
}
```

---

## 🔮 Future Improvements

* Pagination and filtering
* Search books by author
* Authentication and authorization
* Input validation using Joi
* API documentation using Swagger
* Unit and integration testing

---

## 👨‍💻 Author

**Rajeev Rawat**

Aspiring Full Stack Developer passionate about building practical web applications and continuously improving development skills.
