const http=require("http");//making server
const server=http.createServer((req,res)=>{
 res.writeHead(200,{'Content-Type':'text/plain'});
 res.end("Hello,i am coming from web server")
});
server.listen(8000,()=>{
    console.log('server listen at port 8000');
})