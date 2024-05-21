import { createContext, useReducer } from "react"
import { orderReducer } from "utils/functions"

export const DataContext = createContext(null)

const initialData = {
    orderBuffer: new Array(20000).fill(null), // Pre-fill the buffer array
    priceMap: new Map(),  // Price to indices map
    idMap: new Map(),  // ID to index map
    currentIndex: 0,
    size: 1000
}

const DataContextProvider = ({children}) => {
    const [orders, updateOrders] = useReducer(orderReducer, initialData)


    return (
        <DataContext.Provider value={{orders, updateOrders}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider