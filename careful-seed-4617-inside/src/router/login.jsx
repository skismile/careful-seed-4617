import { Input, Stack,Button, Heading } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Appcontext } from "../context/appcontext";

export default function Login(){
    const{dispatch,state}=useContext(Appcontext)
    console.log(state)
    const singup=state.singupData
const[loginData,setLoginData]=useState({
    email:'',
    password:''
})



function handleLogin(){
// console.log(singup,loginData)
// dispatch({type:"singupSuccess",payload:singUpData})
let count=0
for(let i=0;i<singup.length;i++)
{
    if(singup[i].email==loginData.email && singup[i].password==loginData.password)
    {count++
       
    }
}
if(count>0)
{
    alert('Login Successful')
    dispatch({type:'loginSuccess',payload:loginData})
}
else{
    alert('invelid id or password')
}

}





return <Stack w={'30%'} m="auto" >
<Heading>Login</Heading>
<Input name="email" value={loginData.email} onChange={(e)=>setLoginData({...loginData,email:e.target.value})} placeholder="Enter Email" />
<Input name="password" value={loginData.password} onChange={(e)=>setLoginData({...loginData,password:e.target.value})} placeholder="Enter Password" />
<Button onClick={handleLogin}  colorScheme={'blue'} >Sing Up</Button>

</Stack>



}