import express from "express";

// routes
import userRoute from "./patient/index.js";
// import patientRoute from './patient/index.js'
const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes

// Un-Protected Routes
unProtectedRouter.use("/patient", userRoute);
// unProtectedRouter.use("/patient", patientRoute);

export { protectedRouter, unProtectedRouter };
