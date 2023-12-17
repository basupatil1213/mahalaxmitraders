import mongoose from "mongoose";
// Tiles Schema
const productSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
        trim:true,
    },
    description :{
        type:String,
        required:true,
        trim:true,
    },
    category :{
        type:String,
        required:true,
        trim:true,
    },
    imageUrl:{
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Available",
        enum: ["Available", "Unavailable"],
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    modifiedAt:{
        type: Date,
        default: Date.now,
    },
});

productSchema.pre("save", function (next) {
    this.modifiedAt = new Date();
    next();
  });

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;