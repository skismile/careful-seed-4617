import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Singup from "./singup";

export default function Allroutes(){


return <Routes>
<Route path="/" element={<Home/>}  />
<Route path="/login" element={<Login/>}  />
<Route path="/singup" element={<Singup/>}  />
{/* <Route path="/" element={<Home/>}  /> */}

</Routes>

}