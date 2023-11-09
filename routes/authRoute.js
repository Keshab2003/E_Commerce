// //creating routes
// import express from 'express'
// import { registerController } from '../controller/authController.js'

// //router object
// const router = express.Router()

// //ROUTING
// //REGISTER || METHOD POST
// router.post('/Register', registerController)

// export default router



import express from "express";
import {
    registerController,
    loginController,
    testController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/Register", registerController);

//LOGIN || POST
router.post("/Login", loginController);

//test routes
router.get("/Test", requireSignIn, isAdmin, testController);

export default router;