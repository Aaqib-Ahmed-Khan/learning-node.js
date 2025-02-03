const express=require("express");
//1 step to create web server using express

const app=express();
// app.post
// app.get
// app.patch
// app.put 
// app.delete

app.get("/home",(req,res)=>{
    res.send("<h1>home page</h1>");
    res.send(user);
})
app.get("/api/v1/user/profile",(req,res)=>{
    res.status(200).json({
        success:true,
        user:{
            username:"aaqib",
            email:"aaqib@hgmail.com"
        }
    })
})
app.listen(8000,()=>{
    console.log("server listen at port 8000");
});


