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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element = {<About />}/>
          <Route path='contact' element = {<Contact />}/>
          <Route path='ourstore' element = {<OurStore/>}/>
          <Route path='blog' element = {<Blog/>}/>
          <Route path='compare-products' element = {<CompareProducts/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
