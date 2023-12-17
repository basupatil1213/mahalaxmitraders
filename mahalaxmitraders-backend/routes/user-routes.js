import express from 'express';
import {createUser, deleteUser, getAllUsers, updateUser} from '../controllers/user-controller.js';
import {adminAuthorizationMiddleware, authenticationMiddleware} from "../middlewares/authenticaiton.js";


const userRouter = express.Router();

userRouter.route('/')
    .get(authenticationMiddleware, adminAuthorizationMiddleware, getAllUsers) // only admin can get all users
    .patch(authenticationMiddleware, updateUser) // only user can update his/her profile
    .delete(authenticationMiddleware, deleteUser) // only user can delete his/her profile

export default userRouter;