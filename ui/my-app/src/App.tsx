import './App.css'
import MainPage from './pages/mainPage/MainPage';
import { io } from 'socket.io-client'
import { SOCKET_URL } from 'utils/Config'
import { useEffect, useState } from 'react'
import GlobalContextProvider from 'components/globalContext/GlobalContext'

const socket = io(SOCKET_URL)

function App() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    socket.on('order_event', (res) => setData(res))

    return () => {
      socket.off('order_event', (res) => setData(res));
    };
  }, [socket])

  return (
    <div className="App">
      <GlobalContextProvider>
        <></>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
