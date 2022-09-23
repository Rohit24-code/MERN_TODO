
import { useContext } from 'react';
import './App.css';
import { AppContext } from './components/AppContext';
import Login from './components/Login';
// import signup from './components/signup';
import {Routes,Route} from 'react-router-dom'
import Signup from './components/signup';
import Home from '@mui/icons-material/Home';
function App() {
 const { isAuth} = useContext(AppContext);

  return (
    <div className="app">
      {
        <>
            <Routes>
             <Route path="/" element={<Login/>}/> 
             <Route path="/signup" element={<Signup/>}/> 
             <Route path="/home" element={<Home/>}/> 
            </Routes>
        </>
      }
    </div>
  );
}

export default App;
