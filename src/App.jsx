import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ReviewProvider } from './context/ReviewContext';
import { useScrollToTop } from './hooks/useScrollToTop';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import ProductPage from './pages/Product/ProductPage';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Shop from './pages/shop/Shop';
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function AppContent() {
  useScrollToTop();
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} /> 
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ReviewProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </ReviewProvider>
    </BrowserRouter>
  );
}

export default App;