import express from 'express';
import {loginController, registerController} from '../controllers/auth-controller.js';

const authRouter = express.Router();

authRouter.route('/login')
    .post(loginController)

authRouter.route('/register')
    .post(registerController)

export default authRouter;