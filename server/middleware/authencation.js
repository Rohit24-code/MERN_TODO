const jwt= require("jsonwebtoken")

const authenication=(req,res,next)=>{

    if(!req.headers.authorization){
       return res.send("invalid user")
    }else{
            const token = req.headers.authorization.split(" ")[1];
            jwt.verify(token, "secret", function (err, decoded) {
              if (!err) {
                // res.send(decoded.username); // bar
                req.body.userId= decoded.userId
                next();
              } else {
                res.send("invalid user");
              }
            });
    }

}

module.exports = authenication;