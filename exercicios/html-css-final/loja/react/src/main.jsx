import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './HomePage'
import ProductPage from './ProductPage'
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/header/Header"
import Footer from "./components/Footer"
import SelectedProductPage from './components/SelectedProductPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product" element={<SelectedProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);