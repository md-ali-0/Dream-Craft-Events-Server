import http from "http";
import app from './src/app.js';

const server = http.createServer(app);
const port = process.env.PORT || 8080;


async function main (){
    server.listen(port, () => {
        console.log(`Server Listing on ${port}`);
      });      
}

main()