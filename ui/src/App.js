import { useContext, useEffect } from 'react'
import './App.css'
import { SocketContext } from 'components/socketContext/SocketContext'
import { DataContext } from 'components/dataContext/DataContext'
import OrderList from 'orderList/OrderList'

function App() {
  const socket = useContext(SocketContext)
  const {orders, updateOrders} = useContext(DataContext)

  useEffect(() => {
    socket.on('order_event', (data) => {updateOrders(data)})
    console.log('ran')

    return () => {
      socket.off('order_event', (data) => {updateOrders(data)})
    }
  }, [socket, updateOrders])



{/* {orders.orderBuffer.map((order, index) => order && (
                <div key={index}>
                    <Order orderObj={order}/>
                </div>
            ))} */}

  return (
    <div className='container'>
      <div className='title__container'>
        <div className='title'>
          Order 'em Up!
        </div>
      </div>
      <div className='orders__container'>
        <OrderList orders={orders.orderBuffer} priceMap={orders.priceMap}/>
      </div>
    </div>
  )
}

export default App;
