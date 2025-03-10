const http=require('http')

const PORT=3022;

const HOSTNAME ='localhost';

const server=http.createServer((req, res)=>{
   // res.statusCode=200;
    //res.setHeader('Content-type','text/plain')
    //res.end("Node server created by Ayushi Chouhan")
    res.statusCode=500;
    res.setHeader('Content-type','application/json');
    res.end(JSON.stringify({error: "Server Error"}))
}
);
server.listen(PORT ,()=>{
    console.log("Server running at ${HOSTNAME}:{PORT}");
}    
)
