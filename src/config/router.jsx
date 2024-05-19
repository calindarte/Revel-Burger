import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../pages/Home";
import OrderDetails from "../pages/OrderDetails";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <LayoutPublic/>,
        children: [
            {
                index:true,
                element: <Home/>,
            },
            {
                path:"/order",
                element:<OrderDetails/>,
            },
        ]
    }
])