import express from 'express';
import {createProductController,
        deleteProductController,
        getAllProductsController,
        updateProductController,
        createMultipleProductsController,
        getProductByIdController} from '../controllers/product-controller.js';
const productRouter = express.Router();

productRouter.route('/')
    .get(getAllProductsController)
    .post(createProductController)

productRouter.route('/create-multiple')
    .post(createMultipleProductsController)

productRouter.route('/:id')
    .get(getProductByIdController)
    .delete(deleteProductController)
    .patch(updateProductController)

export default productRouter;