const mongoose=require("mongoose");
const RegisterSchema=new  mongoose.Schema({
    fullname:{
        require:true,
        type:String

    },email:{
        require:true,
        type:String
    },phone_no:{
        require:true,
        type:Number
    },password:{
        require:true,
        type:String

    }});
    
    
    module.exports = mongoose.model('Register',RegisterSchema);