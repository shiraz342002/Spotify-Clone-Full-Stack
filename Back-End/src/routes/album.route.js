import express from "express"
import { addAlbum,deleteAlbum,listAlbum } from "../controllers/album.controller.js";
import upload from "../middleware/multer.js";

const albumRouter=express.Router();
albumRouter.post('/add',upload.single('image'),addAlbum);
albumRouter.get('/list',listAlbum);
albumRouter.delete('/delete/:id',deleteAlbum);

export default albumRouter