import { Router } from "express";
import { bookByIdUpdate, bookDelete, createBook, getBook, getBookById } from "./book.controller";

const bookRoute = Router();

bookRoute.post("/books", createBook);
bookRoute.get("/books", getBook);
bookRoute.get("/books/:bookId", getBookById);
bookRoute.patch("/books/:bookId", bookByIdUpdate);
bookRoute.delete("/books/:bookId", bookDelete);

export default bookRoute;