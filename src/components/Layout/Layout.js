import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <ToastContainer 
              position="top-right"
              autoClose={250}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Footer/>
        </>
    );
};

export default Layout;