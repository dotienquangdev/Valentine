import logo from './logo.svg';
import './App.css';
import Counter from './Compoments';
import CounterState from './Compoments/CounterState';
import ProductReducer from './Compoments/ProductsReducer';
import Productstates from './Compoments/Producstates';
import Todos from './Compoments/Todos';
import ProductState from './Compoments/ProducState';

function App() {
  return (
    <>
      <ProductState />

      <Todos />
      <ProductReducer />
      <Productstates />
      <CounterState />
      <Counter />
    </>
  );
}

export default App;
