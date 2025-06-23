import { Router } from "express";
import { createBorrow, getBorrow } from "./borrow.controller";

const borrowRoute = Router();

borrowRoute.post('/borrow', createBorrow);
borrowRoute.get('/borrow', getBorrow);

export default borrowRoute;



