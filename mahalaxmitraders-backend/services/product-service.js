import { Product } from "../models/index.js";
import mongoose from 'mongoose';

// mongoose queries to database for CRUD operations

// get all products
const getAllProductsService = async(req,res) =>{
    try{
        const products = await Product.find().exec();
        if(!products) return res.status(404).json({message: "No products found"});
        console.log(`${products} from service}`)
        res.status(200)
            .json(products);
    } catch (error){
        console.log(`${error.message} from service}`)
        res.status(404)
            .json({message: `${error.message} from service`});
    }
}

// get product by id
const getProductByIdService = async(req,res) =>{
    const {id} = req.params; // get the id of the product to be deleted
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("Invalid Id"); // check if the id is valid
    
    try{
        const product = await Product.findById(id).exec();
        if(!product) return res.status(404).json({message: "No products found"});
        console.log(`${product} from service}`)
        res.status(200)
            .json(product);
    }
    catch(error){
        console.log(`${error.message} from service}`)
        res.status(404)
            .json({message: `${error.message} from service`});
    }
}

// create a product

const createProductService = async(req,res) =>{
    const product = req.body; // get the product details from the request body
    const newProduct = new Product(product); // create a new product instance
    try{
        await newProduct.save(); // save the product to the database
        res.status(201)
            .json(newProduct); // send the saved product as response
    } catch (error){
        res.status(409)
            .json({message: error.message}); // if there is an error, send the error message
    }
}

// create multiple products

const createMultipleProductsService = async(req,res) =>{
    const products = req.body; // get the product details from the request body
    try{
        const createdProducts = await Product.insertMany(products); // save the product to the database
        res.status(201)
            .json(createdProducts); // send the saved product as response
    } catch (error){
        res.status(409)
            .json({message: error.message}); // if there is an error, send the error message
    }
}

// update a product

const updateProductService = async(req,res) =>{
    const product = req.body; // get the product details from the request body
    product.modifiedAt = new Date();
    const {id} = req.params; // get the id of the product to be updated
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No product with that id"); // check if the id is valid

    const initialProduct = Product.findById(id).exec(); // find the product with the id

    if(!initialProduct) return res.status(404).send("No product with that id"); // if no product is found, send an error message

    try {
        const updatedProduct = Product.findByIdAndUpdate(id, product, {new: true}).exec(); // update the product
        res.status(200)
            .json(updatedProduct); // send the updated product as response
    } catch (error) {
        res.status(409)
            .json({message: error.message}); // if there is an error, send the error message
    }

}

// delete a product by id
const deleteProductService = async(req,res) =>{
    const {id} = req.params; // get the id of the product to be deleted
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("Invalid Id"); // check if the id is valid

    const initialProduct = await Product.findById(id).exec(); // find the product with the id

    if(!initialProduct) return res.status(404).send("No product with that id"); // if no product is found, send an error message

    try {
        await Product.findByIdAndDelete(id).exec(); // delete the product
        res.status(200)
            .json({message: "Product deleted successfully"}); // send the success message
    }
    catch (error) {
        res.status(409)
            .json({message: error.message}); // if there is an error, send the error message
    }
}

export {getAllProductsService,
        createProductService,
        updateProductService,
        deleteProductService,
        createMultipleProductsService,
        getProductByIdService};