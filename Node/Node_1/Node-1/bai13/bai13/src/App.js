import logo from './logo.svg';
import './App.css';
// import Counter from './Compament/Counter';
// import CounterState from './Compament/CounterState';
import CounterReducer from './Compament/CounterState1';
import ProducState from './Compament/ProducState';
// import ProducReducer from './Compament/ProducReducer';
import Todos from './Compament/Todos';

function App() {
  return (
    <>
      <Todos />
      {/* <ProducReducer /> */}
      <ProducState />
      <CounterReducer />
      {/* <CounterState /> */}
      {/* < Counter /> */}
    </>
  );
}

export default App;
