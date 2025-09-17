const  mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const User=mongoose.model("track",userSchema);
module.exports=User;