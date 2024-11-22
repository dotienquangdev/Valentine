import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
function App() {
  return (
    <>
      <Header />
      <Menu />
      <div class="box_content">
        <Content text="Content 1" class="hi" number={9} active={true} />
        <Login />
        <Content text="Content 2" class="hi" number={5} active={false} />
      </div>
      <Footer />
    </>
  );
}

export default App;
