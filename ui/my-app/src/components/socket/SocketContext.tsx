import { SocketProviderInterface } from "interfaces/ComponentInterfaces"
import { FunctionComponent, createContext, useEffect } from "react"
import { io, Socket } from "socket.io-client"
import { SOCKET_URL } from "utils/Config"

export const SocketContext = createContext<Socket | null>(null)


const SocketProvider: FunctionComponent<SocketProviderInterface> = ( {children} ) => {
    const socket = io(SOCKET_URL)

    useEffect(() => {
        return () => {
            socket.disconnect()
        }
    }, [socket])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider

