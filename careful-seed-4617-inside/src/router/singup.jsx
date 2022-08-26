import { Input, Stack,Button, Heading, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, Modal,Text } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Appcontext } from "../context/appcontext";
import Allroutes from "./allroutes";

export default function Singup(){
    const{dispatch,state}=useContext(Appcontext)
    console.log(dispatch,state)
const[singUpData,setSingUpData]=useState({
    name:'',
    email:'',
    password:''
})
const navigate=useNavigate()
const { isOpen, onOpen, onClose } = useDisclosure()
const initialRef = useRef(null)
const finalRef = useRef(null)
function handleSingup(){

    if(singUpData.name!=""&& singUpData.email!=""&& singUpData.password!="")
    {
        console.log(singUpData)
        dispatch({type:"singupSuccess",payload:singUpData})
        setSingUpData({  name:'',
        email:'',
        password:''})
        
        navigate('/login')
    }

}





return <Stack >

<Heading>Sing Up</Heading>
<Input name="name" onChange={(e)=>setSingUpData({...singUpData,name:e.target.value})} value={singUpData.name}  placeholder="Name" />
<Input name="email" value={singUpData.email} onChange={(e)=>setSingUpData({...singUpData,email:e.target.value})} placeholder="Enter Email" />
<Input name="password" value={singUpData.password} onChange={(e)=>setSingUpData({...singUpData,password:e.target.value})} placeholder="Enter Password" />
<Button onClick={handleSingup}  colorScheme={'blue'} >Sing up </Button>
<Text>already have account? <Link color="blue" to={'/login'} > <Text color={'blue'} >Login</Text> </Link>  </Text>
</Stack>



}