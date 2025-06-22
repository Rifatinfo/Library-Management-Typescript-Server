import { model, Schema } from "mongoose";
import { IBook, IBookModel } from "./book.interface";

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

bookSchema.method("checkCopies", async  function(quantity : number) {
   if(this.copies < quantity){
      throw new Error("Not enough copies available");
   }
   this.copies -= quantity;
   if(this.copies === 0){
     this.available = false;
   }
   await this.save();
})

const Book = model<IBook, IBookModel>("Book", bookSchema);
export default Book;