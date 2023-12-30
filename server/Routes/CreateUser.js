const express=require("express")
const router=express.Router();
const User=require('../models/User');


router.post('/createuser',async(req,res)=>{
    try {
       await User.create({
            name:"Sam",
            password:"123",
            email:"sameerdastagir5@gmail.com",
            location:"TN"
        })
        res.json({success:true});
        
    } catch (error) {
        console.log(error);
        res.json({success:false});
        
    }
})


module.exports=router;