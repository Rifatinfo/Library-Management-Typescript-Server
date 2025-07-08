import { Request, Response } from "express";
// import Borrow from "./borrow.model";
import Book from "../book/book.model";
import { Borrow } from "./borrow.model";

const createBorrow = async (req: Request, res: Response) => {
  try {
    const borrow = await Borrow.create(req.body);
    const { book, quantity } = req.body;
    const foundBook = await Book.findById(book);
    if (!foundBook) {
      throw  ("Book not found") 
    }
    if (foundBook.copies < quantity) {
       throw  ( "Not enough copies available") 
    }
    foundBook.copies -= quantity;
    if (foundBook.copies <= 0) {
      foundBook.available = false;
    }
    await foundBook.save();
    res.json({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });

  } catch (error: any) {
    console.error("Error in createBorrow:", error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred",
      error: error.message,
    });
  }
};

const getBorrow = async (req: Request, res: Response) => {
    try {
        const borrow = await Borrow.aggregate([
            {
                $group: {
                    _id: "$book",
                    totalQuantity: { $sum: "$quantity" }
                }
            },
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "_id",
                    as: "bookDetails"
                }
            },
            {
                $unwind: "$bookDetails"
            },
            {
                $project: {
                    _id: 0,
                    totalQuantity: 1,
                    book: {
                        title: "$bookDetails.title",
                        isbn: "$bookDetails.isbn"
                    }
                }
            }
        ]);

        console.log(borrow);

        res.json({
            success: true,
            message: "Borrowed books summary retrieved successfully",
            data: borrow
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "An unexpected error occurred",
            error: error.message
        });
    }
};


export { createBorrow, getBorrow };
