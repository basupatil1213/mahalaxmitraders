import {User} from '../models/index.js';



// mongoose queries to database for CRUD operations

// get all users
const getAllUsersService = async (req,res) =>{
    try{
        const users = await User.find();
        console.log(`${users} from service}`)
        res.status(200)
            .json(users);
    } catch (error){
        res.status(404)
            .json({message: error.message});
    }
}

// create a user

const createUserService = async(req,res) =>{
    const user = req.body; // get the user details from the request body
    const newUser = new User(user); // create a new user instance
    try{
        await newUser.save(); // save the user to the database
        res.status(201)
            .json(newUser); // send the saved user as response
    } catch (error){
        res.status(409)
            .json({message: error.message}); // if there is an error, send the error message
    }
}

// update a user

const updateUserService = async(req,res) =>{
    const user = req.body; // get the user details from the request body
    const {id} = req.params; // get the id of the user to be updated
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No user with that id"); // check if the id is valid

    const initialUser = User.findById(id); // find the user with the id

    if(!initialUser) return res.status(404).send("No user with that id"); // if no user is found, send an error message

    try {
        const updatedUser = User.findByIdAndUpdate(id, user, {new: true}); // update the user
        res.status(200)
            .json(updatedUser); // send the updated user as response
    } catch (error) {
        res.status(409)
            .json({message: error.message}); // if there is an error, send the error message
    }

}

const deleteUserService = async(req,res) =>{
    const {id} = req.params; // get the id of the user to be deleted
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("Invalid Id"); // check if the id is valid

    const initialUser = User.findById(id); // find the user with the id

    if(!initialUser) return res.status(404).send("No user with that id"); // if no user is found, send an error message

    try {
        await User.findByIdAndDelete(id); // delete the user
        res.status(200)
            .json({message: "User deleted successfully"}); // send a success message
    } catch (error) {
        res.status(409)
            .json({message: error.message}); // if there is an error, send the error message
    }

}


export {getAllUsersService, createUserService, updateUserService, deleteUserService};