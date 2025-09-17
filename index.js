const express =require("express")
const connectDB=require("./config/db");
const useroute = require("./routes/userRoutes");
require("dotenv").config();

const cors = require("cors");

const app = express();

// ✅ Allow all origins (development only)
app.use(cors());

// ✅ Or allow specific origin (recommended)
app.use(cors({
  origin: "http://localhost:3001",  // or your React port
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
connectDB(); 
app.use(express.json());
app.use("/api",useroute);
PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log('server connected to http://localhost:${PORT}')
});