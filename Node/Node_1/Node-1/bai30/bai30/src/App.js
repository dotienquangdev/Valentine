import logo from './logo.svg';
import './App.css';
import UseEffect from './Components/UseEffect';
import UseEffect2 from './Components/UseEffect2';
import UseEffect3 from './Components/UseEffect3';
import Tabs from './Components/Tabs';
import User from './Components/Users';
import Todos from './Components/Todos';
import Comments1 from './Components/Comments';
import Carts from './Components/Carts';

function App() {
  return (
    <>
      <Carts />
      <Comments1 />
      <Todos />
      <User />
      <Tabs />
      <UseEffect3 />
      <UseEffect2 />
      <UseEffect />
    </>
  );
}
export default App;