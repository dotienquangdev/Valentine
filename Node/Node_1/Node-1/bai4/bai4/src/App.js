import logo from './logo.svg';
import './App.css';
import Header from './components/Header/script';
import Footer from './components/Footer/script';
import MainContent from './components/MainContent/script';

function App() {
  let name = "do tien quang";
  const css = {
    color: "red",
    backgroundColor: "blue"
  }
  return (
    <>
      <Header />

      <div className="test" style={{ color: "red", backgroundColor: "blue" }}>
        xin chao cac ban  {name}!
      </div>
      <Login />
      <div className="test" style={{ color: "red", backgroundColor: "blue" }}>
        xin chao cac ban  {name}!
      </div>
      <MainContent />
      <Footer />
      xin chao cac ban minh la Quang
    </>
  );
}

export default App;
