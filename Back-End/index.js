import express, { json } from "express"
import cors from "cors"
import 'dotenv/config'
import songRouter from "./src/routes/song.route.js";
import connectDb from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";

const app = express()
const port = process.env.PORT || 3000;
connectDb();
connectCloudinary();

app.use(express.json())
app.use(cors())

app.use("/api/song",songRouter)

app.get("/",(req,res)=>res.send("Working"))

app.listen(port,()=>console.log(`Server started on ${port}`));
