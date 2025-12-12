const express = require('express')
const app = express()

app.use(express.json()) 

const Books = require('./model/book.model.js')
const { intializeDatabase } = require('./db/db.connect.js')
const fs = require('fs')

intializeDatabase()

const cors = require("cors");
const { error } = require('console')
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

async function createNewBook(newBook) {
    try {
        const movie = new Books(newBook)
        const savedMovie = await movie.save()
        return savedMovie
    } catch (error) {
        throw error
    }
}

app.post('/', async (req,res) => {
    try {
        const movie = await createNewBook(req.body)
        res.json(movie)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({eror: "Failed to fetch book detail"})
    }
})

async function getAllBooksData (){
    try {
        const book = await Books.find()
        return book 
    } catch (error) {
        throw error
    }
}

app.get('/books', async (req,res) => {
    try {
        const allBook = await getAllBooksData()
        res.status(201).json({message: 'All book data is this', book: allBook})
    } catch (error) {
        console.error(error.message)
        res.status(500).json({error: 'Failed to fetch book detail'})
    }
})

async function getBooksDetailByTitle (bookTitle){
    try {
        const books = await Books.findOne({bookTitle})
        return books 
    } catch (error) {
        throw error
    }
}

app.get('/books/:bookTitle', async (req,res) => {
    try {
        const book = await getBooksDetailByTitle(req.params.bookTitle)
        res.status(201).json({message: 'Book Data is this'})
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch book'})
    }
})

async function getBookDetailByGenre(bookGenre) {
    try {
        const book = await Books.findOne({genre: bookGenre})
        return book
    } catch (error) {
        throw error
    }
}

app.get('/books/genre/:bookGenre', async (req,res) => {
    try {
        const book = await getBookDetailByGenre(req.params.bookGenre)
        res.json(book)
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch book data'})
    }
})

async function updateBookData(bookId, dataToUpdate){
    try {
        const book = await Books.findOneAndUpdate(bookId, dataToUpdate, {new: true})
        return book
    } catch (error) {
        throw error
    }
}

app.post('/books/:bookId', async (req,res) => {
    try {
        const updateBook = await updateBookData(req.params.bookTitle, req.body)
        if(updateBook.length != 0){
            res.status(201).json({message: 'Book Data updated successfully', book:updateBook})
        }else{
            res.status(404).json({error: 'Book data not found'})
        }
    } catch (error) {
        console.error(error.message)
        res.status(500).json({error: 'Failed to fetch book data'})
    }
})

async function updateBookRatingByTitle(bookTitle, dataToUpdate){
    try {
        const book = await Books.findOneAndUpdate({title: bookTitle}, dataToUpdate, {new: true})
        return book
    } catch (error) {
        throw error
    }
}

app.post('/books/title/:bookTitle', async (req,res) => {
    try {
        const updateBook = await updateBookRatingByTitle(req.params.bookTitle, req.body)
        if(updateBook.length != 0){
            res.status(201).json({message: 'Book update Successfully', book: updateBook})
        }else{
            res.status(404).json({Error: 'Book title is not found'})
        }
    } catch (error) {
        res.status(500).json({Error: 'Failed to fetch book detail'})
    }
})

async function deletedBook (bookId){
    try {
        const book = await Books.findOneAndDelete(bookId)
        return book
    } catch (error) {
        throw error
    }
}

app.delete('/books/delete/:bookId', async (req,res) => {
    try {
        const bookData = await deletedBook(req.params.bookId)
        if(bookData){
            res.status(201).json({message: "Book deleted successfully", book: bookData})
        }else{
            res.status(404).json({error: 'Failed to bookId  detail'})
            console.error(error.message)
        }
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch book Detail'})
    }
})

const PORT = 3000
app.listen(PORT, () => {
    console.log('Server is running on this ',PORT)
})



