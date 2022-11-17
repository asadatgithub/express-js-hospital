import express from "express";
import authValidation from "../../validations/patient.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/get-all", controllers.getAll);
router.post("/", validate(authValidation.add), controllers.add);
router.get("/get-by-id/:id?", controllers.getById);
router.get("/by-age/:age?", controllers.getByAge);
router.delete("/:id?", validate(authValidation.id), controllers.delete);
router.patch("/:id?", validate(authValidation.id), validate(authValidation.update), controllers.updateByID);

export default router;
