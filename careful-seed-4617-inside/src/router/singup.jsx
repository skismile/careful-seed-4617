import { Input, Stack,Button, Heading } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Appcontext } from "../context/appcontext";

export default function Singup(){
    const{dispatch,state}=useContext(Appcontext)
    console.log(dispatch,state)
const[singUpData,setSingUpData]=useState({
    name:'',
    email:'',
    password:''
})



function handleSingup(){
console.log(singUpData)
dispatch({type:"singupSuccess",payload:singUpData})
setSingUpData({  name:'',
email:'',
password:''})
}

return <Stack w={'30%'} m="auto" >
<Heading>Sing Up</Heading>
<Input name="name" onChange={(e)=>setSingUpData({...singUpData,name:e.target.value})} value={singUpData.name}  placeholder="Name" />
<Input name="email" value={singUpData.email} onChange={(e)=>setSingUpData({...singUpData,email:e.target.value})} placeholder="Enter Email" />
<Input name="password" value={singUpData.password} onChange={(e)=>setSingUpData({...singUpData,password:e.target.value})} placeholder="Enter Password" />
<Button onClick={handleSingup}  colorScheme={'blue'} >Sing Up</Button>

</Stack>



}