import { addSong,listSong,removeSong } from "../controllers/song.controller.js";
import express from "express"
import upload from "../middleware/multer.js";
const songRouter =express.Router()
songRouter.post("/add",upload.fields([{name:'image',maxCount:1},{name:'audio',maxCount:1}]),addSong)
songRouter.get("/list",listSong) 
songRouter.delete("/delete/:id",removeSong) 

export default songRouter