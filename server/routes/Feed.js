
const {Router}= require("express");
const FeedModel = require("../models/Feeds.model");
const FeedRouter = Router();

FeedRouter.get("/:userId",async(req,res)=>{
    const {userId}= req.params.userId
    const feed= await FeedModel.findById(userId)
    if(feed){
        res.send(feed)
    }else{
      res.send("invalid");
    }
})

FeedRouter.post("/:userId/create",async(req,res)=>{
  try {
    const userId = req.params.userId;
    const { title, image, description, tag } = req.body;
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

FeedRouter.delete("/:userId/delete/:feedId",(req,res)=>{
  
})



module.exports= FeedRouter