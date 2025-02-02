const fs=require("fs");
// // console.log("before reading ");

// fs.readFile("input.txt",'utf-8',(err,data)=>{       //asynchronous
//     if(err)throw err;
//     console.log(data);
    
// });
// const data=fs.readFileSync("input.txt","utf-8");//sunchronous
// console.log(data);
// console.log("after reading" );


// blocking code
// const fs=require("fs");
// console.log("before reading ");

// fs.readFile("input.txt",'utf-8',(err,data)=>{       //asynchronous
//     if(err)throw err;
//     console.log(data);
    
// });
// const data=fs.readFileSync("input.txt","utf-8");//sunchronous
// console.log(data);
// console.log("after reading" );

// !writing file
// fs.writeFile("input.txt","hello world hi", (err)=>{
// if(err)throw err;
//     });
// fs.appendFile("input.txt","hello nodejs developer",(err)=>{//append add after text
//     if(err)throw err;
// });
// fs.unlink("input.txt","im new file",(err)=>{//for delete
//     if(err)throw err;
// });
//not good aboce txt

// const ReadStream=fs.createReadStream("input.txt","utf-8");
// console.log(ReadStream);
// ReadStream.on('data',(chunk)=>{
//     console.log(chunk);
// })
// ReadStream.on('end',()=>{
//     console.log("reading completed");
    
// });
//pipe
// const ReadStream=fs.createReadStream("input.txt");
// const writeStream=fs.createWriteStream("output.txt");
// ReadStream.pipe(writeStream);

