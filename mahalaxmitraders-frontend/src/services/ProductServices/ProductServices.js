import axios from 'axios';

const BASE_URL = process.env.BASE_URL;
// Get all products with pagination
export const getAllProducts = async (page, limit) => {
    try {
        const res = await axios.get(`${BASE_URL}/v1/products?page=${page}&limit=${limit}`);
        return res.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

//Get products by search and filter
export const getProductsBySearchAndFilters = async (page, limit=18, search = "", filters = "") => {
    try {
        const res = await axios.get(`http://localhost:5000/api/v1/products?page=${page}&limit=${limit}&search=${search}&filters=${filters}`);
        return res.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Get a product by id
export const getProductById = async (id) => {
    try {
        const res = await axios.get(`${BASE_URL}/v1/products/${id}`);
        return res.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Create a product
export const createProduct = async (product) => {
    try {
        const res = await axios.post(`${BASE_URL}/v1/products`, product);
        return res.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Create multiple products
export const createMultipleProducts = async (products) => {
    try {
        const res = await axios.post(`${BASE_URL}/v1/products/create-multiple`, products);
        return res.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Update a product
export const updateProduct = async (id, product) => {
    try {
        const res = await axios.patch(`${BASE_URL}/v1/products/${id}`, product);
        return res.data;
    } catch (error) {
        throw new Error(error.message);
    }
}