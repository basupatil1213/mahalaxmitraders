import {createUserService, deleteUserService, getAllUsersService, updateUserService}  from '../services/user-service.js';


// get all users from the database

const getAllUsers = async(req,res) => {
    try{
        return await getAllUsersService();
    } catch (error){
        res.status(404)
            .json({message: error.message});
    }
}

// create a user

const createUser = async(req,res) => {
    try{
        return await createUserService(req,res);
    }
    catch(error){
        res.status(409)
            .json({message: error.message});
    }
}

// update a user

const updateUser = async(req,res) => {
    try{
        return await updateUserService(req,res);
    }
    catch(error){
        res.status(409)
            .json({message: error.message});
    }
}

// delete a user

const deleteUser = async(req,res) => {
    try{
        return await deleteUserService(req,res);
    }
    catch(error){
        res.status(409)
            .json({message: error.message});
    }
}

export {createUser, deleteUser, getAllUsers, updateUser};