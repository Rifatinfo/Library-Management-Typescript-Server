import { Request, Response } from "express";
// import Borrow from "./borrow.model";
import Book from "../book/book.model";
import { Borrow } from "./borrow.model";

const createBorrow = async (req: Request, res: Response) =>  {
    try {
        const borrow = await Borrow.create(req.body);
        const {book, quantity} = req.body;
        const foundBook  = await Book.findById(book);
        if(!foundBook ){
            return res.status(404).json({success : false , message : "Book not found"});
        }
        await foundBook.checkCopies(quantity);

        res.json({
            success: true,
            message: "Book borrowed successfully",
            data: borrow,
        });
    } catch (error: any) {
        if (error.name === "ValidationError") {
            res.status(400).json({
                success: false,
                message: "Validation failed",
                error: {
                    name: error.name,
                    errors: error.errors
                }
            });
        } else {
            res.status(500).json({
                success: false,
                message: "An unexpected error occurred",
                error: error.message
            });
        }
    }
};

export default createBorrow;
