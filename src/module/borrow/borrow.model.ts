
import { Schema, model } from "mongoose";
import { IBorrow } from "./borrow.interface";

const borrowSchema = new Schema<IBorrow>(
  {
    book: { type: Schema.Types.ObjectId, required: true, ref: "Book" },
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
        validator: function (value: Date) {
          return value > new Date();
        },
        message: "Due date must be a future date"
      }
    }

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Borrow = model<IBorrow>("Borrow", borrowSchema);
