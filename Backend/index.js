const express = require('express')
const app = express();
const PORT = 3000
const http = require('http')
const { Server } = require(socket.io)
const path = require('path')

// Middlewares
app.use(express.json());
app.use(cors())

const server = http.createServer(app);

const io = new Server(server);


io.on('connection', (socket) => console.log('A user connected', uuid()))


server.listen(PORT, (req, res) => console.log(`Server is running at a ${PORT}`));