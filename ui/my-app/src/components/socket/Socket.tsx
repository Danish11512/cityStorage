import io from 'socket.io-client'
import { SOCKET_URL } from 'utils/Config'

export const socket = io(SOCKET_URL)
