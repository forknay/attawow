const express = require('express');
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());


const server = http.createServer(app); //creating the server


const io = new Server(server, {
    cors: {
        origin:"http://localhost:3000",
        methods:["GET", "POST"],
    },
}); //important for backend manipulations

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data); //data here is the room
    })
}); //triggers when someone connects


io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`)

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("received_message", data);
    
    socket.on("button_index", (data) => {
        console.log("received", data)
    })
    })
})

server.listen(3001, () => {
    console.log("SERVER IS RUNNING")
})