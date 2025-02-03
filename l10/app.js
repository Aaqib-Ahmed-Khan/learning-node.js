const express=require("express");
//1 step to create web server using express

const app=express();
// app.post
// app.get
// app.patch
// app.put 
// app.delete

app.get("/api/v1/user/home",(req,res)=>{
    res.send("<h1>home page</h1>");
    res.send(user);
})
app.get("/api/v1/user/about",(req,res)=>{
    res.send("<h1>about page</h1>");
    res.send(user);
})
app.get("/api/v1/user/contactus",(req,res)=>{
    res.send("<h1>contact us page</h1>");
    res.send(user);
})
app.get("/api/v1/user/profile",(req,res)=>{
    res.status(200).json({
        success:true,
        user:{
            username:"aaqib",
            email:"aaqib@hgmail.com"
        }
    });
});
app.get("/api/v1/product/:productId", (req, res) => {
    const id = req.params.productId;
    console.log("Product ID:", id);

    const product = {
        id: id, 
        name: "MacBook",
    };

    res.status(200).json({
        success: true,
        product,
    });
});
app.listen(8000,()=>{
    console.log("server listen at port 8000");
});


