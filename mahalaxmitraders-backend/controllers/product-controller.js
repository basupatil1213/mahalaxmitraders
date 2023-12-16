import {createProductService,
        deleteProductService,
        getAllProductsService,
        updateProductService,
        createMultipleProductsService,
        getProductByIdService} from '../services/product-service.js';

// get all products from the database

const getAllProductsController = async(req,res) => {
    try{
        return await getAllProductsService(req, res);
    } catch (error){
        res.status(404)
            .json({message: error.message});
    }
}

// get product by id

const getProductByIdController = async(req,res) => {
    try{
        return await getProductByIdService(req,res);
    }
    catch(error){
        res.status(409)
            .json({message: error.message});
        console.log(`${error.message} from controller}`)
    }
}

// create a product

const createProductController = async(req,res) => {
    try{
        return await createProductService(req,res);
    }
    catch(error){
        res.status(409)
            .json({message: error.message});
    }
}

// create multiple products
const createMultipleProductsController = async(req,res) => {
    try{
        return await createMultipleProductsService(req,res);
    }
    catch(error){
        res.status(409)
            .json({message: error.message});
    }
}

// update a product

const updateProductController = async(req,res) => {
    try{
        return await updateProductService(req,res);
    }
    catch(error){
        res.status(409)
            .json({message: error.message});
    }
}

// delete a product

const deleteProductController = async(req,res) => {
    try{
        return await deleteProductService(req,res);
    }
    catch(error){
        res.status(409)
            .json({message: error.message});
    }
}

export {createProductController,
        deleteProductController,
        getAllProductsController,
        updateProductController,
        createMultipleProductsController,
        getProductByIdController};