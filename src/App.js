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
import Spinner from './Components/Spinner/Spinner';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import MyProducts from './Components/MyProducts/MyProducts';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <>
      <Nabvar></Nabvar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/productdetails/:id' element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>
        }></Route>

        <Route path='/addproducts' element={
          <RequireAuth>
            <AddProducts></AddProducts>
          </RequireAuth>
        }></Route>


        <Route path='/manageproducts' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>

        <Route path='/myproducts' element={
          <RequireAuth>
            <MyProducts></MyProducts>
          </RequireAuth>
        }></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
