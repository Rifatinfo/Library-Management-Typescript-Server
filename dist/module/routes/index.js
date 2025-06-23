"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = __importDefault(require("../user/user.route"));
const book_route_1 = __importDefault(require("../book/book.route"));
const borrow_route_1 = __importDefault(require("../borrow/borrow.route"));
const routes = (0, express_1.Router)();
routes.use("/", user_route_1.default);
routes.use("/api", book_route_1.default);
routes.use("/api", borrow_route_1.default);
exports.default = routes;
