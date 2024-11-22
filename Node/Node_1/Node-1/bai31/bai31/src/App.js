import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Layout from './Component/Layout';
import UseRef from './Component/UseRef';
import UseRef2 from './Component/UseRef2';
import RandomGit from './Component/RandomGit';
import Counter from './Component/Counter';
import Box from './Component/Box';

function App() {
  return (
    <>
      {/* <Box /> */}
      <Counter />
      <RandomGit />
      <UseRef2 />
      <UseRef />
      <Layout />
    </>
  );
}

export default App;
