import { useContext, useEffect } from 'react'
import './App.css'
import { SocketContext } from 'components/socketContext/SocketContext'
import { DataContext } from 'components/dataContext/DataContext'

function App() {
  const socket = useContext(SocketContext)
  const {orders, updateOrders} = useContext(DataContext)

  useEffect(() => {
    socket.on('order_event', (data) => {updateOrders(data)})

    return () => {
      socket.off('order_event', (data) => {updateOrders(data)})
    }
  }, [socket, updateOrders])


  return (
    <div>
            {/* Render your buffer data */}
            {orders.buffer.map((item, index) => item && (
                <div key={index}>
                    {/* Render your item details */}
                    <p>Price: {item.price}, ID: {item.id}</p>
                </div>
            ))}
        </div>
  )
}

export default App;
