"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBorrow = exports.createBorrow = void 0;
// import Borrow from "./borrow.model";
const book_model_1 = __importDefault(require("../book/book.model"));
const borrow_model_1 = require("./borrow.model");
const createBorrow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const borrow = yield borrow_model_1.Borrow.create(req.body);
        const { book, quantity } = req.body;
        const foundBook = yield book_model_1.default.findById(book);
        if (!foundBook) {
            throw new Error("Book not found");
        }
        yield foundBook.checkCopies(quantity);
        res.json({
            success: true,
            message: "Book borrowed successfully",
            data: borrow,
        });
    }
    catch (error) {
        if (error.name === "ValidationError") {
            res.status(400).json({
                success: false,
                message: "Validation failed",
                error: {
                    name: error.name,
                    errors: error.errors
                }
            });
        }
        else {
            res.status(500).json({
                success: false,
                message: "An unexpected error occurred",
                error: error.message
            });
        }
    }
});
exports.createBorrow = createBorrow;
const getBorrow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const borrow = yield borrow_model_1.Borrow.aggregate([
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "An unexpected error occurred",
            error: error.message
        });
    }
});
exports.getBorrow = getBorrow;
