import { Children } from "react";
import LayoutDefault from "../Layout/LayoutDefault";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import PriveRouter from "../pages/PriveRouter";
import Error404 from "../pages/Error404";
import Login from "../pages/Login";
import About from "../pages/About";
import InforUser from "../pages/InforUse";
import BlogDetail from "../pages/Blog/BlogDetail";
import BlogRelated from "../pages/Blog/BlogRelated";
import BlogNew from "../pages/Blog/BlogNew";
import BlogAll from "../pages/Blog/BlogAll";

export const router = [
    {
        path: '/',
        element: <LayoutDefault />,
        Children: [

            {
                path: "/",
                element: <Home />
            },

            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "blog",
                element: <Blog />,
                Children: [
                    {
                        index: true,
                        element: <BlogAll />
                    },
                    {
                        path: "news",
                        element: <BlogNew />
                    },
                    {
                        path: "related",
                        element: <BlogRelated />
                    },
                    {
                        path: ":id",
                        element: <BlogDetail />
                    },
                ]
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "*",
                element: <Error404 />
            },
            {
                element: <PriveRouter />,
                Children: [
                    {
                        path: "info-user",
                        element: <InforUser />

                    }
                ]
            },
        ]
    }
];


// <Routes>
// <Route path='/' element={<LayoutDefault />} >
//   <Route path='/' element={<Home />} />
//   <Route path='about' element={<About />} />
//   <Route path='contact' element={<Contact />} />

//   <Route path='blog' element={<Blog />} >
//     <Route index element={<BlogAll />} />
//     <Route path='news' element={<BlogNew />} />
//     <Route path='related' element={<BlogRelated />} />
//     <Route path=':id' element={<BlogDetail />} />
//   </Route>

//   <Route path='login' element={<Login />} />
//   <Route path='*' element={<Error404 />} />

//   <Route element={<PriveRouter />} >
//     <Route path='info-user' element={<InforUser />} />
//   </Route>

// </Route>
// </Routes>