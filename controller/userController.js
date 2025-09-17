const userModel = require("../models/User");

// GET all users
exports.getUser = async (req, res) => {
  try {
    const users = await userModel.find();  // fetch all users
    res.json(users);                       // return them as JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.postUser = async (req, res) => {
  const {title,amount}=req.body;
  try{
       const newUser=new userModel({title,amount})
       await newUser.save()
       res.status(201).json(newUser);
  }catch(error){
        console.error(error);
        res.status(500).json({ message: error.message });
  }
}

exports.deleteUSer=async(req,res)=>{
  const id=req.params.id;

  const deleted=await userModel.findByIdAndDelete(id)
  if(!deleted){
    return res.status(404).json({message:"user not found"})
  }
  res.status(204).json({message:"user deleted successfully"})
}

exports.updateUser=async(req,res)=>{
  const id=req.params.id;
  try{
    const updatedUser=await userModel.findByIdAndUpdate(id,req.body,{new:true})
    if(!updatedUser){
      return res.status(404).json({message:"user not found"})
    }
    res.json(updatedUser)
  }catch(error){
    console.error(error);chat
  }
}
