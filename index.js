const express = require("express")
 const cors = require("cors")
 require("./db/Config")
 const User=require("./db/User")
 const app =express();
 app.use(express.json());
 app.use(cors());



 app.post("/registers", async(req,resp)=>{

   console.log("reqbody", req.body)
     let user= new User(req.body);

     let result= await user.save()
       resp.send(result)
 })

  
  


 app.listen(5000)


