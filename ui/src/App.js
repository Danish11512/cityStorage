import { useContext, useEffect } from 'react'
import './App.css'
import { SocketContext } from 'components/socketContext/SocketContext'
import { DataContext } from 'components/dataContext/DataContext'
import OrderList from 'orderList/OrderList'
import Title from 'components/title/Title'

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
    <div className='container'>
      <div className='title__container'>
        <Title />
      </div>
      <div className='orders__section'>
        <OrderList orders={orders.orderBuffer} priceMap={orders.priceMap}/>
      </div>
    </div>
  )
}

export default App;
