import { GlobalContextInterface, ChildrenInterface, Order } from "interfaces/Interfaces";
import { createContext, useState } from "react";

export const GlobalContext = createContext<GlobalContextInterface>({
    orders: new Map([]), 
    setOrders: () => undefined, 
    prices: new Map([]),
    setPrices: () => undefined
})

const GlobalContextProvider = ({children}: ChildrenInterface): JSX.Element => {

    const [orders, setOrders] = useState<Map<String, Order> | undefined>(undefined)
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