import { useContext, useEffect } from 'react'
import './App.css'
import { SocketContext } from 'components/socketContext/SocketContext'
import { DataContext } from 'components/dataContext/DataContext'

function App() {
  const socket = useContext(SocketContext)
  const {orderData, priceData, currentIndex, updateOrders} = useContext(DataContext)

  useEffect(() => {
    socket.on('order_event', (data) => {updateOrders(data)})

    return () => {
      socket.off('order_event', (data) => {updateOrders(data)})
    }
  }, [socket, updateOrders])


  return (
    <div>
      {currentIndex}
    </div>
  )
}

export default App;
