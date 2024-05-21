import { useContext, useEffect, useState } from 'react'
import './App.css'
import { SocketContext } from 'components/socketContext/SocketContext'

function App() {
  const socket = useContext(SocketContext)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    socket.on('order_event', (data) => {setOrders(data)})

    return () => {
      socket.off('order_event', (data) => {setOrders(data)})
    }
  }, [socket])


  return (
    <div>
      {orders.map(i => 
        <p>{i.customer}</p>)}
    </div>
  )
}

export default App;
