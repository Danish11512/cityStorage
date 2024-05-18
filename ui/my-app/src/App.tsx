import { ErrorBoundary } from 'react-error-boundary';
import './App.css'
import GlobalError from './components/globalError/GlobalError';
import MainPage from './pages/mainPage/MainPage';
import { SocketContext } from 'components/socket/SocketContext';
import { socket } from 'components/socket/Socket';



function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={GlobalError}>
        <SocketContext.Provider value={socket}>
          <MainPage/>
        </SocketContext.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
