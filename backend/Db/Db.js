const mongoose=require('mongoose');
//.env file
const url=process.env.url;
//console.log(process.env);
mongoose.connect(url).then(()=>{
console.log("connected");
//console.log(process.env);
}).catch((err)=>{
console.log(err);
});