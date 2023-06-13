const http =require('http');
const server =http.createServer((req,res)=>{
     res.write("Welcome to GFG !")
     res.end()


}).listen(9000);