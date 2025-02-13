
import UserController from './user.controller.js';

import express from 'express';

const userRouter = express.Router();
const userController = new UserController();

userRouter.post('/signup', userController.postSignup);

userRouter.post('/login', userController.postLogin);

export default userRouter;

