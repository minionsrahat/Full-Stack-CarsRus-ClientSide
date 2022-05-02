import './App.css';
import Nabvar from './Components/Navbar/Nabvar';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <>
      <Nabvar></Nabvar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </>
  );
}

export default App;
