import { Request, Response } from "express";
import Borrow from "./borrow.model";
// import Book from "../book/book.model";

const createBorrow = async (req: Request, res: Response) =>  {
    try {
        const borrow = await Borrow.create(req.body);
        res.json({
            success: true,
            message: "Book borrowed successfully",
            data: borrow
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
