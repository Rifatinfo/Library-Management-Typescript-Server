import { Request, Response } from "express";
import Book from "./book.model";

const createBook = async (req: Request, res: Response) => {
    try {
        const data = await Book.create(req.body);

        res.json({
            success: true,
            message: "Book created successfully",
            data
        })
    } catch (error: any) {

        if (error.name === "ValidationError") {
            res.json({
                success: false,
                message: "Book created successfully",
                error : {
                    name : error.name,
                    errors : error.errors
                }
            })
        }
    }
}
const getBook = async (req: Request, res: Response) => {
    try {        
        const query : any = {};
        if(req.query.filter){
            query.genre = req.query.filter;
        }
        
        const sortedField = req.query.sortBy as string || "createdAt" ; 
        const sortOrder =( req.query.sort === "asc") ||  (req.query.sort === "des" ) ? 1 : -1;
        const limit = Number(req.query.limit) || 5;
        
        const data = await Book.find(query)
        .sort({[sortedField] : sortOrder})
        .limit(limit)
        res.json({
            success: true,
            message: "Books retrieved successfully",
            data
        })
    } catch (error: any) {

        if (error.name === "ValidationError") {
            res.json({
                success: false,
                message: "Book get successfully",
                error : {
                    name : error.name,
                    errors : error.errors
                }
            })
        }
    }
}
const getBookById = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId ;
        const data = await Book.findById(bookId);

        res.json({
            success: true,
            message: "Books retrieved  successfully",
            data
        })
    } catch (error: any) {

        if (error.name === "ValidationError") {
            res.json({
                success: false,
                message: "Book retrieved successfully",
                error : {
                    name : error.name,
                    errors : error.errors
                }
            })
        }
    }
}
const bookByIdUpdate = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId ;
        const data = await Book.findByIdAndUpdate(bookId, req.body, {new : true , runValidators : true});

        res.json({
            success: true,
            message: "Book updated successfully",
            data
        })
    } catch (error: any) {

        if (error.name === "ValidationError") {
            res.json({
                success: false,
                message: "Book updated successfully",
                error : {
                    name : error.name,
                    errors : error.errors
                }
            })
        }
    }
}
const bookDelete = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId ;
        const data = await Book.findByIdAndDelete(bookId);

        res.json({
            success: true,
            message: "Book Delete successfully",
            data
        })
    } catch (error: any) {

        if (error.name === "ValidationError") {
            res.json({
                success: false,
                message: "Book delete successfully",
                error : {
                    name : error.name,
                    errors : error.errors
                }
            })
        }
    }
}

export { createBook , getBook, getBookById, bookByIdUpdate, bookDelete}; 