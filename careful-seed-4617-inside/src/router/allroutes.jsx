import { Route, Routes } from "react-router-dom";
import Cart from "./cart";
import Checkout from "./checkout";
import Home from "./home";
import Login from "./login";
import PrivateRoute from "./privateroute";
import Product from "./product";
import SingleProduct from "./singleproduct";
import Singup from "./singup";

export default function Allroutes(){


return <Routes>
<Route path="/" element={<Home/>}  />
<Route path="/products/:cat" element={<Product/>}  />
<Route path="/product/:id" element={<SingleProduct/>}  />
<Route path="/cart" element={<Cart/>}  />
<Route path="/checkout" element={<PrivateRoute><Checkout/></PrivateRoute>}  />
<Route path="/login" element={<Login/>}  />



</Routes>

}