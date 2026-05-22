import http from "http";
import normalizePort from "./port.js";
import { WebSocketServer } from "ws";
export default function startServer(app) {
    const port = normalizePort(process.env.PORT || 3000);
    const server = http.createServer(app);
    const wss = new WebSocketServer({ server });
    wss.on("connection", (ws) => {

        console.log("Client Connected");

 
        ws.send("Welcome From Server");

        ws.on("message", (message) => {

            console.log("Received:", message.toString());

       
            ws.send(`Server Received: ${message}`);
        });

   
        ws.on("close", () => {
            console.log("Client Disconnected");
        });
    });
    server.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });

    return { port }; // 👈 add this
};