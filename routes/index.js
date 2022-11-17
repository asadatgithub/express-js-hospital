import express from "express";

// routes
import userRoute from "./patient/index.js";
import doctorRoute from './doctor/index.js'
const protectedRouter = express.Router();
const unProtectedRouter = express.Router();
// Un-Protected Routes
unProtectedRouter.use("/patient", userRoute);
unProtectedRouter.use("/employee", doctorRoute);

export { protectedRouter, unProtectedRouter };
