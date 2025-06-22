import { Router } from "express";
import createBorrow from "./borrow.controller";

const borrowRoute = Router();

borrowRoute.post('/borrow', createBorrow);

export default borrowRoute;



