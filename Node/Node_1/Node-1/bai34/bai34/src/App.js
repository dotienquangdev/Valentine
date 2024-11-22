import logo from './logo.svg';
import './App.css';
import Box from './Compoment';
import Counter from './Compoment/Counter/inndex';
import Counter2 from './Compoment/Counter2/counter2';
import Todos from './Compoment/Todo';

function App() {

  return (
    <>
      {/* cài đăt npm install redux react-redux */}

      <Todos />
      <hr></hr>
      <Counter />
      <Counter2 />
      <Box />
    </>
  );
}

export default App;
