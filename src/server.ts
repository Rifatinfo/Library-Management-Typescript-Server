import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import routes from "./module/routes";
const app = express()
app.use(cors())
app.use(express.json());
app.use(routes);


app.get("/", (req, res) => {
    res.send("Server is Running");
})

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