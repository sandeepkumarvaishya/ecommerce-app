import express from "express";
import { registerController, loginController, testController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
// router object
const router = express.Router();

//routing
//register || method POST

router.post('/register', registerController);

// LOGIN || POST
router.post('/login', loginController);

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

export default router;