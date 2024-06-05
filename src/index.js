import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './pages/navbar';
import Header from './pages/header';
import Footer from './pages/footer';
import TrendingFood from './pages/trendingFood';
import PopularItems from './pages/popularItems';
import ContactUs from './pages/contactUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Header/>
    <TrendingFood/>
    <PopularItems/>
    <ContactUs/>
    <Footer/>
  </React.StrictMode>
);

