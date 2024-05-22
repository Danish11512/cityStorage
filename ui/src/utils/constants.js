import io from 'socket.io-client'

const SOCKETURL = 'http://localhost:4000'

export const socket = io(SOCKETURL, {
    autoConnect: false
})
