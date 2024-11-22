import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './home/about';
import Error from './home/Error404';
import LayOutDefault from './LayOut';
import Cart from './home/Cart';
import Home from './home/Home';
import JavaScript from './home/javaScrip';
import NodeJS from './Question/NodeJS';
import Java from './home/java';
import C from './home/c';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOutDefault />}>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/javaScript' element={<JavaScript />} />
          <Route path='/nodeJS' element={<NodeJS />} />
          <Route path='/java' element={<Java />} />
          <Route path='/c' element={<C />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
