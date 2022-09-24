
const {Router}= require("express");
const FeedModel = require("../models/Feeds.model");
const UserModel = require("../models/User.model");
const FeedRouter = Router();
const cloudinary= require("cloudinary")
const fileUploader= require("express-fileupload")


FeedRouter.get("/profile",async(req,res)=>{
  const {userId}= req.body
  console.log(req.body)
  try {
    const user = await UserModel.findOne({ _id: userId });
    if (user) {
      res.send(user);
    } else {
      res.send("No such user");
    }
  } catch (error) {
    res.send(error)
  }
})

FeedRouter.get("/",async(req,res)=>{
    const {userId}=req.body;
    try {
          const feed = await FeedModel.find({ userId });
          if (feed) {
            res.send(feed);
          } else {
            res.send("invalid");
          }
    } catch (error) {
       console.log(error);
    }
})

FeedRouter.post("/create",async(req,res)=>{
  try {
    const { title, image, description, tag,userId } = req.body;
    const new_feed = new FeedModel({
      title,
      image,
      description,
      tag,
      userId,
    });
    await new_feed.save();
    res.send({ msg: "feed created", new_feed }); 
  } catch (error) {
    res.send(error)
  }
})


//just update a particular part
FeedRouter.patch("/edit/:feedId",async(req,res)=>{
  const {feedId} = req.params
  const {userId}= req.body
  try {
  const updateFeed=await FeedModel.findOneAndUpdate({ _id: feedId, userId} ,{...req.body});
  if(updateFeed){
 res.send("Update");  
  }else{
    res.send("Can't update")
  }
  } catch (error) {
    res.send(error)
  }
})

FeedRouter.delete("/delete/:feedId",async(req,res)=>{
  const {feedId} = req.params
  const {userId}= req.body
  try {
  const deleteFeed=await FeedModel.findOneAndDelete({ _id: feedId, userId });
  if(deleteFeed){
 res.send("Deleted");  
  }else{
    res.send("Can't delete")
  }
  } catch (error) {
    res.send(error)
  }
})



module.exports= FeedRouter