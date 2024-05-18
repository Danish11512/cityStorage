import { createContext } from "react"
import { Socket } from "socket.io-client"
import { socket } from "./Socket"

export const SocketContext = createContext<Socket>(socket)