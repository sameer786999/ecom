const express=require("express");
const app=express();

const port=5000;

const mongoDB=require("./db")
mongoDB();

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(port,()=>{
    console.log(`Sunnai De raha hain,behra nahi hun main! ${port}`);

})


