const express=require("express");
const app=express();
app.get("/",(req,res)=>{
res.send("Hello world");
})
app.listen("1000",()=>{
    console.log("App is listening on port 1000");
})
