const express =require("express")
const connectDB=require("./config/db");
const useroute = require("./routes/userRoutes");
require("dotenv").config();

const cors = require("cors");

const app = express();

// ✅ Allow all origins (development only)
app.use(cors());

connectDB(); 
app.use(express.json());
app.use("/api",useroute);
PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log('server connected to http://localhost:${PORT}')
});