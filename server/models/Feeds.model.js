const mongoose = require("mongoose");

const FeedSchema = mongoose.Schema({
"userId":String,
"title":String,
"image":String,
"description":String,
"tag":[String]
});

const FeedModel = mongoose.model("Feed", FeedSchema);

module.exports = FeedModel;
