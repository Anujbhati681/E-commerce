import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import Children from './pages/Children/Children';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={<Home searchTerm={searchTerm} />}
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/men" element={<Men searchTerm={searchTerm} />} />
        <Route path="/women" element={<Women searchTerm={searchTerm} />} />
        <Route path="/children" element={<Children searchTerm={searchTerm} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
