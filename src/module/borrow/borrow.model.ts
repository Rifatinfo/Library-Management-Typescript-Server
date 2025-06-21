import { model, Schema } from "mongoose";
import { IBorrow } from "./borrow.interface";

const borrowModel = new Schema<IBorrow>({
    book : {type : Schema.Types.ObjectId, required : true},
    quantity : {type : Number, min : 0, required : true},
    dueDate : {type : Date, required : [true, "On date the book must be returned"]}
},{
    timestamps : true,
    versionKey : false
})

const Borrow = model<IBorrow>("Borrow", borrowModel);
export default Borrow;
