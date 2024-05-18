import { ErrorBoundary } from 'react-error-boundary';
import './App.css'
import GlobalError from './components/globalError/GlobalError';
import MainPage from './pages/mainPage/MainPage';
import { io } from 'socket.io-client';
import { SOCKET_URL } from 'utils/Config';
import { useEffect, useState } from 'react';

const socket = io(SOCKET_URL)

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    socket.on('order_event', (res) => setData(res))

    return () => {
      socket.off('order_event', (res) => setData(res));
    };
  }, [socket])

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={GlobalError}>
        <div>{data.length}</div>

      </ErrorBoundary>
    </div>
  );
}

export default App;
