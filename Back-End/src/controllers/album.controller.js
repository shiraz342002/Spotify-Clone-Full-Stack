import {v2 as cloudinary} from "cloudinary"
import albumModel from "../models/album.model.js"
const addAlbum= async(req,res)=>{
   
try{

    const name =req.body.name 
    const desc =req.body.desc 
    const bgColor =req.body.bgColor 
    const imageFile=req.file
    const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
    const albumData={
        name,
        desc,
        bgColor,
        image:imageUpload.secure_url
    }
    console.log(albumData);
    
    const album= albumModel(albumData)
    album.save()
    res.json({success:true,message:"Album Added"})
}catch(err){
    res.json({success:false,message:err})
}
}
const deleteAlbum= async (req,res)=>{
    try{
        await albumModel.findByIdAndDelete(req.params.id)
        res.json({
           success:true,
           message:"Album Deleted"
       })
   }catch(err){
       res.json({success:false})        
   }
}
const listAlbum=async (req,res)=>{
    try{
        const allAlbums = await albumModel.find({})
        res.json({
            success:true,
            albums:allAlbums
        })
    }catch(err){
        res.json({success:false})
    }
}
export {addAlbum,deleteAlbum,listAlbum}