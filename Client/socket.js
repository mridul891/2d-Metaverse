import { io } from "socket.io-client"

export const initSocket = () => {
    const backend_url = "http://localhost:3000"
    return io(backend_url)
}