import { useEffect, useState } from 'react';
import './App.css'
import MainPage from './pages/mainPage/MainPage';
import {socket} from './socket'
import { Order } from 'interfaces/Interfaces';

function App() {
  const [rawOrders, setRawOrders] = useState<Order[]>([])

  useEffect(() => {
    socket.on('order_event', (res) => setRawOrders(res))

    return () => {
      socket.off('order_event', (res) => setRawOrders(res));
    };
  }, [socket])

  return (
    <div className="App">
          <MainPage {...rawOrders}/>
    </div>
  );
}

export default App;
