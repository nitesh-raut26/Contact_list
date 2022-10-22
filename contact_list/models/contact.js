const mongoose=require('mongoose');

//created to be schema
const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        //validation
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});
//u need to be tell to collection of schema
//model signifies collection
const Contact=mongoose.model('Contact',contactSchema);

module.exports=Contact;

