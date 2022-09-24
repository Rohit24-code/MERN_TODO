import './App.css';
import Login from './pages/Login';
import {Routes,Route} from 'react-router-dom'
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {
//  const { isAuth} = useContext(AppContext);

  return (
        <>
            <Routes>
             <Route path="/" element={<Login/>}/> 
             <Route path="/signup" element={<Signup/>}/> 
             <Route path="/home" element={<Home/>}/> 
            </Routes>
        </>
  );
}

export default App;
