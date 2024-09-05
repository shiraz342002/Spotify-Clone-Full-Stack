import mongoose, { Schema } from "mongoose";

const songSchema=new mongoose.Schema({
name:{type:String,required:true},
desc:{type:String,required:true},
bgColor:{type:String,required:true},
image:{type:String,required:true}
})

const albumModel=mongoose.model("album",songSchema)
export default albumModel