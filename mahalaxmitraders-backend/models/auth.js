import mongoose from "mongoose";
import { User } from "./index.js";

const authSchema = new mongoose.Schema({
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref: User,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password :{
        type:String,
        required:true,
        trim:true,
    },
    token:{
        type: String,
    },
});

const AuthModel = mongoose.model("Auth", authSchema);

export default AuthModel;