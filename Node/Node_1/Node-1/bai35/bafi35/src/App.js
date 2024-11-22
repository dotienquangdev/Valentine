import './App.css';
import ALlRoute from './pages/AllRouter';


// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Error404 from './pages/Error404';
// import LayoutDefault from './Layout/LayoutDefault';
// import Blog from './pages/Blog';
// import BlogNew from './pages/Blog/BlogNew';
// import BlogRelated from './pages/Blog/BlogRelated';
// import BlogAll from './pages/Blog/BlogAll';
// import BlogDetail from './pages/Blog/BlogDetail';
// import Login from './pages/Login';
// import InforUser from './pages/InforUse';
// import PriveRouter from './pages/PriveRouter';

function App() {
  return (
    <>
      {/* <LayoutDefault /> */}

      <ALlRoute />



      {/* <Routes>
        <Route path='/' element={<LayoutDefault />} >
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />

          <Route path='blog' element={<Blog />} >
            <Route index element={<BlogAll />} />
            <Route path='news' element={<BlogNew />} />
            <Route path='related' element={<BlogRelated />} />
            <Route path=':id' element={<BlogDetail />} />
          </Route>

          <Route path='login' element={<Login />} />
          <Route path='*' element={<Error404 />} />

          <Route element={<PriveRouter />} >
            <Route path='info-user' element={<InforUser />} />
          </Route>

        </Route>
      </Routes> */}
    </>
  );
}

export default App;
