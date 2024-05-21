import { createContext, useEffect } from "react"
import { SOCKETURL } from 'utils/constants' 
import io from 'socket.io-client'

export const SocketContext = createContext(null)

const SocketContextProvider = ({children}) => {
    const socket = io(SOCKETURL);

    useEffect(() => {
        socket.connect()

        return () => {
          socket.disconnect();
        }
    }, [])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContextProvider