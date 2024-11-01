const http = require('http');
const server = http.createServer(routes);
const { API_PORT} = process.env;
const port = process.env.PORT || API_PORT;

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

