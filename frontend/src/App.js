import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import pc_banner from './Components/Assets/banner_pc.png';
import phone_banner from './Components/Assets/banner_phone.png';
import accessorie_banner from './Components/Assets/banner_accessorie.png';

import Company  from './Pages/Company';
import AllProducts from './Pages/AllProducts';
import Offices from './Pages/Offices';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/> 
        <Route path='/pc' element={<ShopCategory banner={pc_banner} category="pc"/>}/>
        <Route path='/phone' element={<ShopCategory banner={phone_banner} category="phone"/>}/>
        <Route path='/accessorie' element={<ShopCategory  banner={accessorie_banner} category="accessorie"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/login' element={<LoginSignup/>}/> 

        <Route path='/company' element={<Company/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/offices' element={<Offices/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
