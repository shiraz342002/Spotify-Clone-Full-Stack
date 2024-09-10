import {v2 as cloudinary} from "cloudinary"
import songModel from "../models/song.model.js"
const addSong=async(req,res)=>{
try{
    const name = req.body.name
    const desc = req.body.desc
    const album = req.body.album
    const audioFile = req.files.audio[0]
    const imageFile=req.files.image[0]
    const audioUpload=await cloudinary.uploader.upload(audioFile.path,{resource_type:"video"})
    const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
    const duration = `${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`;
    const songData={
    name,
    desc,
    album,
    image:imageUpload.secure_url,
    file:audioUpload.secure_url,
    duration
   }
    const song = songModel(songData)
    await song.save()
    res.json({success:true,message:"Song Added"})
}catch(err){
res.json({success:false})

}
}
const listSong=async(req,res)=>{
try{
    const allsongs = await songModel.find()
    res.json({
        success:true,
        songs:allsongs
    })
}catch(err){
    res.json({success:false})
}
}
const removeSong=async(req,res)=>{
    console.log("Working ");
    
    try{
         await songModel.findByIdAndDelete(req.params.id)
         res.json({
            success:true,
            message:"Song Deleted"
        })
    }catch(err){
        res.json({success:false})        
    }
}
export {addSong,listSong,removeSong}
