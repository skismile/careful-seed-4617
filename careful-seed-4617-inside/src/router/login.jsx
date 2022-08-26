import { Input, Stack,Button, Heading,Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { Appcontext } from "../context/appcontext";

export default function Login(){
    const{dispatch,state}=useContext(Appcontext)
    console.log(state)
    const singup=state.singupData
const[loginData,setLoginData]=useState({
    email:'',
    password:''
})


const navigate=useNavigate()
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





return <Stack  >
<Heading>Login</Heading>
<Input name="email" value={loginData.email} onChange={(e)=>setLoginData({...loginData,email:e.target.value})} placeholder="Enter Email" />
<Input name="password" value={loginData.password} onChange={(e)=>setLoginData({...loginData,password:e.target.value})} placeholder="Enter Password" />
<Button onClick={handleLogin}  colorScheme={'blue'} >Sing Up</Button>
<Button onClick={()=>navigate(-1)}  >Back</Button>
<Text>are you new User? <Link to='/' ><Text color={'blue'} >Click Here</Text></Link></Text>
</Stack>



}