import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
const app = express()
app.use(cors())
app.use(express.json());

app.listen(config.port, () => {
  console.log(config);
  
  console.log(`Library Management api listening on port `)
})

async function server() {
  try{
    await mongoose.connect(config.database_url!)
    console.log(`Library Management connected to database `);
    
  }catch(error){
    console.log(error);
  }
}
server();