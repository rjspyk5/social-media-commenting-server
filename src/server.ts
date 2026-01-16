import http, { Server } from "http";
import { app } from "./app.js";
import { config } from "./config/config.js";
import { connectDB } from "./config/connectDb.js";
const appbootstrap = async () => {
    let server: Server;
    // shutdown fucntion for stop server
    const shutdown = (signal: string) => {
        console.log(`server is closing because of ${signal}`)

        server.close(() => {
            process.exit(0);
        })

        setTimeout(() => {
            process.exit(1)
        }, 10000);
    }
    try {
        await connectDB();
        server = http.createServer(app);
        // start server
        server.listen(config.port, () => console.log(`Server is running at ${config.port}`));
        // Stop server if error
        server.on("error", () => {
            console.log("er")
            process.exit(1)
        })
        // stop server if infinite loop or others unexpected problem
        process.on("SIGTERM", () => shutdown('SIGTERM'));
        process.on("SIGINT", () => shutdown('SIGINT'));
    } catch (error) {

        console.log(error)
    }
}
appbootstrap();