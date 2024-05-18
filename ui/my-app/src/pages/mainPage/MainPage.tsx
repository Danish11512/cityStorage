import { Order } from 'interfaces/Interfaces'
import './MainPage.css'
import { useEffect, useState } from 'react'

const MainPage = (rawOrders: Order[]): JSX.Element => {
    const [parsedOrders, setParsedOrders] = useState<Map<String, Order>>(new Map([]))

    console.log(parsedOrders)

    const addOrders = (data: Order[]) => {

        data = JSON.parse(data)

        const newOrders = new Map<String, Order>([]

        )
        data.forEach(i => {
            newOrders.set(i.id, i)
        })
        
        parsedOrders.forEach(i => {
            newOrders.set(i.id, i)
        })
        setParsedOrders(new Map(newOrders))
    }
    

    useEffect(() => {
        addOrders(rawOrders)
        
    }, [rawOrders])

//   useEffect(() => {

//     const addOrders = (data: Order[]) => {
        
//       const newOrders = new Map (data.map(i => [i.id, i]))
//       orders.forEach(i => {
//           newOrders.set(i.id, i)
//       })
//       setOrders(new Map(newOrders))
//   }

//     socket.on('order_event', (res) => addOrders(res))

//     return () => {
//       socket.off('order_event', (res) => addOrders(res));
//     };
//   }, [socket])

    return (
    <div>
        <p>Currently we got</p>
        <div>
        </div>
    </div>
    )
}

export default MainPage