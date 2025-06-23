"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borrow = void 0;
const mongoose_1 = require("mongoose");
const borrowSchema = new mongoose_1.Schema({
    book: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "Book" },
    quantity: { type: Number, min: 1, required: true },
    dueDate: {
        type: Date,
        required: [true, "Due date is required"],
        default: () => {
            const now = new Date();
            now.setDate(now.getDate() + 7);
            return now;
        },
        validate: {
            validator: function (value) {
                return value > new Date();
            },
            message: "Due date must be a future date"
        }
    }
}, {
    timestamps: true,
    versionKey: false,
});
exports.Borrow = (0, mongoose_1.model)("Borrow", borrowSchema);
