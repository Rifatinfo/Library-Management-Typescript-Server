import { Model } from "mongoose"

export interface IBook {
    title : string,
    author : string,
    genre : "FICTION" | "NON_FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY", 
    isbn  : string,
    description : string,
    copies : number,
    available  : boolean
}


export interface IBookMethods {
  checkCopies(quantity: number): Promise<void>;
}

export interface IBookModel extends Model<IBook, {}, IBookMethods>{

}