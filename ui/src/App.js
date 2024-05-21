import { useContext, useEffect } from 'react'
import './App.css'
import { SocketContext } from 'components/socketContext/SocketContext'
import { DataContext } from 'components/dataContext/DataContext'

function App() {
  const socket = useContext(SocketContext)
  const {orders, updateOrders} = useContext(DataContext)
  // console.log(orders.priceMap)

  useEffect(() => {
    socket.on('order_event', (data) => {updateOrders(data)})

    return () => {
      socket.off('order_event', (data) => {updateOrders(data)})
    }
  }, [socket, updateOrders])


  return (
    <div>
            {orders.orderBuffer.map((item, index) => item && (
                <div key={index}>
                    <p>ID: {item.id} EVENT: {item.event_name}</p>
                </div>
            ))}
        </div>
  )
}

export default App;
