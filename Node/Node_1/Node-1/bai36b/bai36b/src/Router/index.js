import { Children } from "react";
import Home from "../Home";
import Homes from "../Home/Header/Homes";

export const routers = [
    {
        path: "/",
        element: <Home />,
        Children: [
            {
                path: "/",
                element: <Homes />
            }
        ]
    }
]