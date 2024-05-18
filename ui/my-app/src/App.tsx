import './App.css'
import MainPage from './pages/mainPage/MainPage';

import GlobalContextProvider from 'components/globalContext/GlobalContext'
import SocketProvider from 'components/socketProvider/SocketProvider';

function App() {
  // const [data, setData] = useState<any[]>([])

  // useEffect(() => {
  //   socket.on('order_event', (res) => setData(res))

  //   return () => {
  //     socket.off('order_event', (res) => setData(res));
  //   };
  // }, [socket])

  return (
    <div className="App">
      <GlobalContextProvider>
        <SocketProvider>
          <MainPage />
        </SocketProvider>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
