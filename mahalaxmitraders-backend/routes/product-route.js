import express from 'express';
import {createProductController,
        deleteProductController,
        getAllProductsController,
        updateProductController,
        createMultipleProductsController,
        getProductByIdController} from '../controllers/product-controller.js';

import {adminAuthorizationMiddleware, authenticationMiddleware} from "../middlewares/authenticaiton.js";

const productRouter = express.Router();

productRouter.route('/')
    .get(getAllProductsController) // anyone can get all products
    .post(authenticationMiddleware, adminAuthorizationMiddleware, createProductController)  // only admin can create a product

productRouter.route('/create-multiple')
    .post(authenticationMiddleware, adminAuthorizationMiddleware, createMultipleProductsController) // only admin can create multiple products

productRouter.route('/:id')
    .get(getProductByIdController)
    .delete(authenticationMiddleware, adminAuthorizationMiddleware, deleteProductController) // only admin can delete a product
    .patch(authenticationMiddleware, adminAuthorizationMiddleware, updateProductController) // only admin can update a product

export default productRouter;