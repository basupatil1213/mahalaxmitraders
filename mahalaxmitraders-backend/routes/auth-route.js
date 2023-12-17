import express from 'express';
import {loginController, registerController} from '../controllers/auth-controller.js';

const authRouter = express.Router();

authRouter.route('/login')
    .post(loginController) // anyone can login

authRouter.route('/register')
    .post(registerController) // anyone can register

export default authRouter;