import { model, Schema } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>(
    {
        title: { type: String , required : true},
        author: {type : String, required : true},
        genre: {
            type : String,
            enum : ["FICTION" , "NON_FICTION" , "SCIENCE" , "HISTORY" , "BIOGRAPHY" , "FANTASY"],
            required : true, 
        },
        isbn: {type : String, required : true},
        description: {type : String},
        copies: {type : Number, min:[0, "Copies must be a positive number"], required : true},
        available: {type : Boolean, default : true}
    },{
        timestamps : true,
        versionKey: false
    }
) 

const Book = model<IBook>("Book", bookSchema);
export default Book;