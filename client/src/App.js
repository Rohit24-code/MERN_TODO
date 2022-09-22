
import { useContext } from 'react';
import './App.css';
import { AppContext } from './components/AppContext';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';

function App() {
 const { isAuth} = useContext(AppContext);

  return (
    <div className="app">
      {!isAuth ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
