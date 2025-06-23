"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const userRoute = (0, express_1.Router)();
userRoute.post("/user", user_controller_1.registerUser);
userRoute.get("/user", user_controller_1.getUser);
exports.default = userRoute;
