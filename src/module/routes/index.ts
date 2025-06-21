import { Router } from "express";
import userRoute from "../user/user.route";
import bookRoute from "../book/book.route";
import borrowRoute from "../borrow/borrow.route";

const routes = Router();
routes.use("/", userRoute);
routes.use("/api", bookRoute);
routes.use("/api", borrowRoute);

export default routes;