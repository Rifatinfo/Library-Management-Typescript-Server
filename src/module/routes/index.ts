import { Router } from "express";
import userRoute from "../user/user.route";
import bookRoute from "../book/book.route";

const routes = Router();
routes.use("/", userRoute);
routes.use("/api", bookRoute);

export default routes;