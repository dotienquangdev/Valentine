import LayoutDefault from "../Layout/LayoutDefault";
import Cart from "../page/Cart";
import Home from "../page/Home";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        Children: [

            {
                path: "/",
                element: <Home />
            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    }
];