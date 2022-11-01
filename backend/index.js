
//importting all modules and files
const express=require("express");  
const app=express();
const dotenv=require("dotenv");
// configure .env file
dotenv.config({ path: './.env' });
const db=require("./Db/Db");
const register=require("./models/register");


//middleware
app.use(express.json());

app.use(express.urlencoded({inflate:true,extended:false}));





app.get("/",(req,res)=>{
res.send("Hello world");
});


app.post("/register",async (req,res)=>{
    
       try{
           //object destructring
           console.log(req.body);
      const {fullname,email,password,phone_no}=req.body;
      console.log(fullname);
        //matches password with confirm password
             const data= await new register({
                 fullname:fullname,
                 email:email,
                 password:password,
                 phone_no:phone_no

             })
             await data.save();
               await console.log(data);
               res.send(data);
   }    catch(err){
          console.log(err);   
   }
})

const port=process.env.PORT||8080;
app.listen(port,()=>{
    console.log("App is listening on port "+"" +port);
})
