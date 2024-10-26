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

const usersocketMap = {}

const getAllClients = (roomId) => {
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId) => {
        return {
            socketId,
            username: usersocketMap[socketId]
        }
    })
}

io.on('connection', (socket) => {

    console.log('User Connected With id', socket.id)

    socket.on("join", ({ roomId, username }) => {
        usersocketMap[socket.id] = username;
        socket.join(roomId);

        const clients = getAllClients(roomId);

        console.log(clients)
    })


    socket.on("disconnect", () => {

    });
})



server.listen(PORT, (req, res) => console.log(`Server is running at a ${PORT}`));