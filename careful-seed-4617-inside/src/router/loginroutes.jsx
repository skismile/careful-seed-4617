import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Singup from "./singup";

export default function LoginRoutes(){


return <Routes>

<Route path="/login" element={<Login/>}  />
<Route path="/" element={<Singup/>}  />
{/* <Route path="/" element={<Home/>}  /> */}

</Routes>

}