const http=require("http");
const server=http.createServer(
    function(req,res){
        
        res.setHeader('Content-type','application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.writeHead(200); //status code http 200/ok
        let dataObj={
            "id":123,
            "name":"Dhruv",
            "email":"dmaster.com"
        }
        let data=JSON.stringify(dataObj);
        res.end(data);
    }
);
server.listen(1234,function(){
    console.log("brother we are listening to you on port number 1234");
});