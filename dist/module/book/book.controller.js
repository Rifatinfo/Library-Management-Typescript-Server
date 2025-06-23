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
exports.bookDelete = exports.bookByIdUpdate = exports.getBookById = exports.getBook = exports.createBook = void 0;
const book_model_1 = __importDefault(require("./book.model"));
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield book_model_1.default.create(req.body);
        res.json({
            success: true,
            message: "Book created successfully",
            data
        });
    }
    catch (error) {
        if (error.name === "ValidationError") {
            res.json({
                success: false,
                message: "Book created successfully",
                error: {
                    name: error.name,
                    errors: error.errors
                }
            });
        }
    }
});
exports.createBook = createBook;
const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = {};
        if (req.query.filter) {
            query.genre = req.query.filter;
        }
        const sortedField = req.query.sortBy || "createdAt";
        const sortOrder = (req.query.sort === "asc") || (req.query.sort === "des") ? 1 : -1;
        const limit = Number(req.query.limit) || 5;
        const data = yield book_model_1.default.find(query)
            .sort({ [sortedField]: sortOrder })
            .limit(limit);
        res.json({
            success: true,
            message: "Books retrieved successfully",
            data
        });
    }
    catch (error) {
        if (error.name === "ValidationError") {
            res.json({
                success: false,
                message: "Book get successfully",
                error: {
                    name: error.name,
                    errors: error.errors
                }
            });
        }
    }
});
exports.getBook = getBook;
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const data = yield book_model_1.default.findById(bookId);
        res.json({
            success: true,
            message: "Books retrieved  successfully",
            data
        });
    }
    catch (error) {
        if (error.name === "ValidationError") {
            res.json({
                success: false,
                message: "Book retrieved successfully",
                error: {
                    name: error.name,
                    errors: error.errors
                }
            });
        }
    }
});
exports.getBookById = getBookById;
const bookByIdUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const data = yield book_model_1.default.findByIdAndUpdate(bookId, req.body, { new: true, runValidators: true });
        res.json({
            success: true,
            message: "Book updated successfully",
            data
        });
    }
    catch (error) {
        if (error.name === "ValidationError") {
            res.json({
                success: false,
                message: "Book updated successfully",
                error: {
                    name: error.name,
                    errors: error.errors
                }
            });
        }
    }
});
exports.bookByIdUpdate = bookByIdUpdate;
const bookDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const data = yield book_model_1.default.findByIdAndDelete(bookId);
        res.json({
            success: true,
            message: "Book Delete successfully",
            data
        });
    }
    catch (error) {
        if (error.name === "ValidationError") {
            res.json({
                success: false,
                message: "Book delete successfully",
                error: {
                    name: error.name,
                    errors: error.errors
                }
            });
        }
    }
});
exports.bookDelete = bookDelete;
