
const {Router}= require("express");
const FeedModel = require("../models/Feeds.model");
const UserModel = require("../models/User.model");
const FeedRouter = Router();


FeedRouter.get("/profile",async(req,res)=>{
  const {userId}= req.body
  // console.log(req.body)
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
    const { todo,iscompleted,userId } = req.body;
    // console.log(req.body);
    const data = new FeedModel({
      todo,
      iscompleted,
      userId
    });
    await data.save();
    res.json({ msg: "Todo Created",data}); 
  } catch (error) {
    res.send(error)
  }
})


//just update a particular part
FeedRouter.patch("/edit/:todoId",async(req,res)=>{
  const {todoId} = req.params
  const {userId}= req.body
  try {
  const updateFeed=await FeedModel.findOneAndUpdate({ _id: todoId, userId} ,{...req.body});
  if(updateFeed){
 res.send("Update");  
  }else{
    res.send("Can't update")
  }
  } catch (error) {
    res.send(error)
  }
})

FeedRouter.delete("/delete/:todoId",async(req,res)=>{
  const {todoId} = req.params
  const {userId}= req.body
  try {
  const deleteFeed=await FeedModel.findOneAndDelete({ _id: todoId, userId });
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