const mongoose= require("mongoose")

const UserSchema=mongoose.Schema({
name:{type:String,min:3},
username:String,
email:String,
password:String,
mobile:Number,
country:String,
gender:{type:String,enum:["male","female","unspecified"]}

})

const UserModel= mongoose.model("User",UserSchema)

module.exports=UserModel;