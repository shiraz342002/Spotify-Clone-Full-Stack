import express, { json } from "express"
import cors from "cors"
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>res.send("Working"))

app.listen(port,()=>console.log(`Server started on ${port}`));
