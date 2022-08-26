import { Route, Routes } from "react-router-dom";
import Cart from "./cart";
import Home from "./home";
import Login from "./login";
import Product from "./product";
import SingleProduct from "./singleproduct";
import Singup from "./singup";

export default function Allroutes(){


return <Routes>
<Route path="/" element={<Home/>}  />
<Route path="/product" element={<Product/>}  />
<Route path="/product/:id" element={<SingleProduct/>}  />
<Route path="/cart" element={<Cart/>}  />


{/* <Route path="/" element={<Home/>}  /> */}

</Routes>

}