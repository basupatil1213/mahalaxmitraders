import express from 'express';
import {createUser, deleteUser, getAllUsers, updateUser} from '../controllers/user-controller.js';


const userRouter = express.Router();

userRouter.route('/')
    .get(getAllUsers)
    .post(createUser)
    .patch(updateUser)
    .delete(deleteUser)

export default userRouter;