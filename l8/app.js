const http =require("http");
const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.writeHead(200,{'Content-Type':'text/plain'})
//         res.end("Home"); 
//     }else if(req.url==="/api/user"){
//         const user={
//             name:"aaqib",
//             email:"aaqib@gmail.com"
//         }
//         const data=JSON.stringify(user);
//         console.log(JSON.parse(data));
//         res.writeHead(200,{'Content-Type':'application/json'})
//         res.end(data);
//     }
    // console.log(req.url);
    
// })
// server.listen(8000,()=>{
// console.log("server listend at port 8000");
// })

// handling from data/post method
// get,post,delete,put,patch
if(req.method==="POST"&& req.url==="/submit"
){
let body="";
req.on('data',(chunck)=>{
    body+=chunck.toString();


})
// end event triggered when all data recieved
req.on('end',()=>{
    console.log(JSON.parse(body));
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify({succesa:true,message:"account created successfully"}))
})
}else{
    res.writeHead(404,{'content-type':'application/json'});
    res.end(JSON.stringify({success:false,message:"not found"}))
}
});
server.listen(8000,()=>{
console.log("server listend at port 8000");
}) //postman api