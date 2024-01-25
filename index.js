import http from "http";
import app from './src/app.js';
import connectDB from "./src/db/connectDB.js";
import 'dotenv/config'

const server = http.createServer(app);
const port = process.env.PORT || 8080;

async function main () {
    await connectDB();
    server.listen(port, () => {
        console.log(`Server Listing on ${port}`);
      });      
}

main()