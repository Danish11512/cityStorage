import { createContext, useEffect } from "react"
import { socket } from 'utils/constants' 


export const SocketContext = createContext(null)

const SocketContextProvider = ({children}) => {

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