const http=require('http')

const server=http.createServer((req,res)=>{
    console.log('request event');
    res.end("hello world");
})

server.listen(5000,()=>{
    console.log('sunn rha ha hoon on 5000..');
})