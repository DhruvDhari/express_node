const http=require('http');

const server=http.createServer((req,res)=>{
    // console.log(req);
    // res.write("Welcome balkou");
    // res.end();

    if(req.url === '/'){
        return res.end("ye HOME Page hai bhiduu!!!");
    }
    if(req.url === '/about'){
        return res.end("ye About Page hai jantaa!!!");
    }
    // if(req.url !== 'hi'){
    //     res.end(`There is no page such as ${req.url}`)
    // }
    return res.end(`
    <h1>OOPS!!!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back Home</a>
    `)
})

server.listen(5000,()=>{
    console.log("listening on port 5000")
})