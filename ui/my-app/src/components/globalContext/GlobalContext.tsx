import { GlobalContextInterface, GlobalContextProviderChildrenInterface } from "interfaces/Interfaces";
import { createContext, useState } from "react";

export const GlobalContext = createContext<GlobalContextInterface | undefined>(undefined)

const GlobalContextProvider = ({children}: GlobalContextProviderChildrenInterface): JSX.Element => {

    const [orders, setOrders] = useState<Map<string, {}> | undefined>(undefined)
    const [prices, setPrices] = useState<Map<number, string[]> | undefined>(undefined)
    return (
        <GlobalContext.Provider
            value={{
                orders, 
                setOrders,
                prices, 
                setPrices
            }}>
                {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider