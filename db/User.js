const { default: mongoose } = require("mongoose");
const mogoose =require("mongoose");


const userSchema=new mongoose.Schema({
    name:String,
    email:{type :String,
        unique:true
    },
    password: String,

    
})

module.exports= mogoose.model("usersdata" ,userSchema)