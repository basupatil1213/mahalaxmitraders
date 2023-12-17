import userRouter from "./user-routes.js";
import productRouter from "./product-route.js";
import authRouter from "./auth-route.js";

export default (app) =>{
    app.use('/api/v1/users', userRouter);
    app.use('/api/v1/products', productRouter);
    app.use('/api/v1/auth', authRouter);
}