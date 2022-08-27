import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Appcontext } from "../context/appcontext"

export default function PrivateRoute({children}){

const {state}=useContext(Appcontext)
console.log(state)
const navigate=useNavigate()
if(!state.isAuth)
{
  return  <Navigate to='/login' />

}


return children



}