const mongoose = require("mongoose");

const FeedSchema = mongoose.Schema({
"userId":String,
"todo":String,
"iscompleted":{type:Boolean,default:false}
},{
    timestamps:true
});

const FeedModel = mongoose.model("Todo", FeedSchema);

module.exports = FeedModel;
