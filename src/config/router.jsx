import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../pages/Home";
import OrderDetails from "../pages/OrderDetails";
import OrderConfirm from "../pages/OrderConfirm";
import LayoutOrder from "../layout/LayoutOrder";

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
                element:<LayoutOrder/>,
                children:[
                {
                    index:true,
                    element:<OrderDetails/>,
                },
                {
                    path:"/order/confirm",
                    element:<OrderConfirm/>,
                },

                ]
            },
            
        ]
    }
])