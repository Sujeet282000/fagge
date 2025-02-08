import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from '../Home/Layout';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import ProductSupply from '../ProductSupply/ProductSupply';

function Main() {
  return (

    <div>
    <Header />
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/product" element={<ProductSupply />} />
    </Routes>
    <Footer />
  </div>
  )
}

export default Main