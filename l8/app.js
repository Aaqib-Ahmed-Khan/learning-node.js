const http =require("http");
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end("Home"); 
    }else if(req.url==="/api/user"){
        const user={
            name:"aaqib",
            email:"aaqib@gmail.com"
        }
        const data=JSON.stringify(user);
        console.log(JSON.parse(data));
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(data);
    }
    // console.log(req.url);
    
})
server.listen(8000,()=>{
console.log("server listend at port 8000");
})