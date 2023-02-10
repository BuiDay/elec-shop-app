import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About';
import Contact from './pages//Contact/Contact';
import OurStore from './pages/OurStore/OurStore';
import Blog from './pages/Blog/Blog';
import CompareProducts from './pages/CompareProducts/CompareProducts';
import Wishlist from './pages/Wishlist/Wishlist';
import Login from './pages/Auth/Login';
import Forgotpassword from './pages/Auth/Forgotpassword';
import Register from './pages/Auth/Register';
import ResetPassword from './pages/Auth/ResetPassword';
import SingleBlog from './pages/Blog/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy/ShippingPolicy';
import Conditions from './pages/Conditions/Conditions';
import SingleProduct from './pages/OurStore/SingleProduct';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Profile from './pages/Profiles/Profiles';
import History from './pages/History/History';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element = {<About/>}/>
          <Route path='contact' element = {<Contact/>}/>
          <Route path='ourstore' element = {<OurStore/>}/>
          <Route path='product/:id' element = {<SingleProduct/>}/>
          <Route path='blogs' element = {<Blog/>}/>
          <Route path='blog/:id' element = {<SingleBlog/>}/>
          <Route path='compare-products' element = {<CompareProducts/>}/>
          <Route path='wishlist' element = {<Wishlist/>}/>
          <Route path='login' element = {<Login/>}/>
          <Route path='reset-password' element = {<Forgotpassword/>}/>
          <Route path='register' element = {<Register/>}/>
          <Route path='comfirm-password/:id' element = {<ResetPassword />}/>
          <Route path='privacy-policy' element = {<PrivacyPolicy/>}/>
          <Route path='refund-policy' element = {<RefundPolicy />}/>
          <Route path='shipping-policy' element = {<ShippingPolicy />}/>
          <Route path='conditions' element = {<Conditions />}/>
          <Route path='cart' element = {<Cart/>}/>
          <Route path='checkout' element = {<Checkout/>}/>
          <Route path='profile' element = {<Profile/>}/>
          <Route path='history' element = {<History/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
