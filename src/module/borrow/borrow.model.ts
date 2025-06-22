// import { model, Schema } from "mongoose";
// import { IBorrow } from "./borrow.interface";
// import { IBookMethods, IBookModel } from "../book/book.interface";

// const borrowModel = new Schema<IBorrow, IBookModel, IBookMethods>({
//     book : {type : Schema.Types.ObjectId, required : true, ref: "Book"},
//     quantity : {type : Number, min : 0, required : true},
//     dueDate : {type : Date, required : [true, "On date the book must be returned"]}
// },{
//     timestamps : true,
//     versionKey : false
// })



// const Borrow = model<IBorrow>("Borrow", borrowModel);
// export default Borrow;


import { Schema, model } from "mongoose";
import { IBorrow } from "./borrow.interface";

const borrowSchema = new Schema<IBorrow>(
  {
    book: { type: Schema.Types.ObjectId, required: true, ref: "Book" },
    quantity: { type: Number, min: 1, required: true },
    dueDate: { type: Date, required: [true, "On date the book must be returned"] },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Borrow = model<IBorrow>("Borrow", borrowSchema);
