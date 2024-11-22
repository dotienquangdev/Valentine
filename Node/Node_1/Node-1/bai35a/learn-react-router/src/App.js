import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Eroor';
import LayoutDefault from './layout/LayoutDefaul';
import Blog from './pages/Blog';
import Cart1 from './pages/Home/Carts/Cart1';
import Cart2 from './pages/Home/Carts/Cart2';
import Cart3 from './pages/Home/Carts/Cart3';
import Cart4 from './pages/Home/Carts/Cart4';
import CartAll from './pages/Home/CartAll';
import BlogDetail from './pages/Home/Carts/BlogDetail';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="blog" element={<Blog />} >
            <Route index element={<CartAll />}></Route>
            <Route path="cart1" element={<Cart1 />} />
            <Route path="cart2" element={<Cart2 />} />
            <Route path="cart3" element={<Cart3 />} />
            <Route path="cart4" element={<Cart4 />} />
            <Route path=":id" element={<BlogDetail />}></Route>
          </Route>

          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
