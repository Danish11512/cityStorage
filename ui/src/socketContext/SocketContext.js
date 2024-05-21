import { createContext } from "react";

export const SocketContext = createContext(null)

export const SocketContextProvider = ({children}) => {






    return (
        <SocketContext.Provider>
            {children}
        </SocketContext.Provider>
    )
}