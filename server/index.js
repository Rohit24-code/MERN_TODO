const express= require("express");
const connection = require("./config/db");
const authenication = require("./middleware/authencation");
const authRouter = require("./routes/auth");
const app=express()
const cors= require("cors");
const FeedRouter = require("./routes/Feed");
const PORT= process.env.PORT|| 8080



//helps in parsing req.body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors())
app.use("/auth",authRouter)
app.use(authenication)
app.use("/feed",FeedRouter)


app.listen(PORT,async()=>{
    await connection
    console.log("connected to db");
    console.log(`listening to port http://localhost:8080`);
})