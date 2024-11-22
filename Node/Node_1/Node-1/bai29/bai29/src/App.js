import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Menu from './components/menu';
import ProductList from './components/Productlist';
import ProductItem0 from './components/Productlist/producItem0';
import Countruy from './components/Countruy';
import Viducode from './components/Productlist/viduCode';
import Lamp from './components/Lamp';
import Cart from './components/Banhang/inbdex';
import Modal from './components/Modal';
// import CodeQr from './components/codeQr';

function App() {
  return (
    <>
      <Modal />
      <Cart />
      {/* <CodeQr /> */}
      <Lamp />
      {/* <Viducode /> */}
      <Login />
      <Menu />
      <ProductList />
      <ProductItem0 />
      <Countruy />
    </>
  );
}

export default App;
