import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';


const isAuthenticated = () => !!localStorage.getItem("authToken");

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:title/:id" element={<ProductDetail />} />

          <Route
            path="/home"
            element={isAuthenticated() ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/cart"
            element={isAuthenticated() ? <Cart /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
