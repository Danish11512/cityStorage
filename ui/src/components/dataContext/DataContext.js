import { createContext, useReducer } from "react"
import { orderReducer } from "utils/functions"

export const DataContext = createContext(null)

const initialData = {
    orderBuffer: new Array(20000),
    priceMap: new Map(),
    currentIndex: 0,
    size: 1000
}

const DataContextProvider = ({children}) => {
    const [orders, updateOrders] = useReducer(orderReducer, initialData)


    return (
        <DataContext.Provider value={{orderData: orders.orderBuffer, priceData: orders.priceMap, currentIndex: orders.currentIndex, updateOrders}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider