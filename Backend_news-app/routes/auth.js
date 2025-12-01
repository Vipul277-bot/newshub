const express =require("express");
const User=require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const router=express.Router();
const  fetchuser=require("../middleware/fetchuser");

const JWT_SECRET="Vipul&Good";

//route1

router.post("/news/signup",async(req,res)=>{
  const body = req.body;
  const name = body.name;
  const email = body.email;
  const password=body.password;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: "All field require" });
  }

  try {

    const salt= await bcrypt.genSalt(10);
    const secpass=await bcrypt.hash(password,salt);
    const result = await User.create({
      name,
      email,
      password:secpass,
      
    });
    const data={
      user:{
        id:result.id
      }
    }
    const authtoken=jwt.sign(data,JWT_SECRET);
    console.log(authtoken);

    return res.status(201).json({ success:true, authtoken });

  } catch (err) {
    return res.status(500).json({
      success:false,
      msg: "Error creating user",
      error: err.message
    });
  }
})

//route2

router.post("/news/login",async(req,res)=>{
  //const body = req.body;
 // const name = body.name;
  //const email = body.email;
  //const password=body.password;
const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "All field require" });
  }
   try{
    let user=await User.findOne({email})
    if(!user){
      return res.status(400).json({error:"sorry"});
    }
    const passwordCompare=await bcrypt.compare(password,user.password);
    if(!passwordCompare){
      
      return res.status(400).json({error:"sorry"});
    }

    const data={
      user:{
        id:user.id
      }
    }
    const authtoken=jwt.sign(data,JWT_SECRET);
    
    res.json({success:true,authtoken})
  } catch(err){
        return res.status(500).json({
          success:false,
      msg: "Internal server error",
      error: err.message
    });
   }
})

//rote3
router.post("/news/getuser",fetchuser,async(req,res)=>{
  
/*const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "All field require" });
  }*/
try {
  userId=req.user.id;
  const user=await User.findById(userId).select("-password");
res.send(user);  
} catch (err) {
  return res.status(500).json({
      msg: "Internal server error",
      error: err.message
})
}
});


module.exports=router;
