import mongoose from "mongoose";

// user Schema

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:"String",
        default: "customer",
        enum: ["customer", "admin"],
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    modifiedAt:{
        type: Date,
        default: Date.now,
    }
})

const UserModel = mongoose.model("User", userSchema);

export default UserModel;