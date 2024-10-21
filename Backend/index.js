const express = require('express')
const app = express();
const PORT = 3000
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

// Middlewares
app.use(express.json());
app.use(cors())

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
});


io.on('connection', (socket) => {
    console.log('User Connected With id', socket.id)

    socket.on('message', (message) => socket.broadcast.emit("message", message))

    socket.on("disconnect", () => {
        console.log("Disconnected");
    });
})



server.listen(PORT, (req, res) => console.log(`Server is running at a ${PORT}`));