import userRouter from '#routes/user_routes.js';
import express from 'express';

const expressApp = express();

//middlewares

expressAPP.use(express.json());

//routes

expressApp.use('/user', userRouter);

export default expressApp;