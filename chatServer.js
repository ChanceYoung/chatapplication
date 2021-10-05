import { Server } from 'socket.io'

const io = new Server(3000, () => console.log('server made'))


io.on("connection", (socket) => {
    console.log(socket.id)
})