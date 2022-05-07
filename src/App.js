import './App.css';
import Nabvar from './Components/Navbar/Nabvar';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer/Footer';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import AddProducts from './Components/AddProducts/AddProducts';
import ManageInventory from './Components/ManageInventory/ManageInventory';

function App() {
  return (
    <>
      <Nabvar></Nabvar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/productdetails/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/addproducts' element={<AddProducts></AddProducts>}></Route>
        <Route path='/manageproducts' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
