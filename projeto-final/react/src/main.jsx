import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './homepage/HomePage';
import ProductsPage from './products-page/ProductsPage';
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./common/header/Header";
import Footer from "./common/Footer";
import ProductPage from './product-page/ProductPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);