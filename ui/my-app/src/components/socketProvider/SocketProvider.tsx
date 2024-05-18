import { GlobalContext } from "components/globalContext/GlobalContext"
import { ChildrenInterface, Order } from "interfaces/Interfaces"
import { useContext, useEffect } from "react"
import { io } from 'socket.io-client'
import { SOCKET_URL } from 'utils/Config'

const SocketProvider = ({children}: ChildrenInterface): JSX.Element => {
    
    const {orders, setOrders, prices, setPrices} = useContext(GlobalContext)
    const socket = io(SOCKET_URL)
    console.log(orders)

    useEffect(() => {

        const addOrders = (data: Order[]) => {
        
            const newOrders = new Map (data.map(i => [i.id, i]))
            orders?.forEach(i => {
                newOrders.set(i.id, i)
            })
            setOrders(new Map(newOrders))
        }
        
        socket.on('order_event', addOrders)

        return () => {
            socket.off('order_event', addOrders);
        }
    }, [])

    return(
        <div>
            {children}
        </div>
    )
}

export default SocketProvider