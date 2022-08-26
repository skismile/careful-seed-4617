import { Input, Stack,Button, Heading, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, Modal } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LoginRoutes from "./loginroutes";
import Singup from "./singup";


export default function Modaal(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const navigate=useNavigate()


return <>

<Button bg={'white'} colorScheme='none' color='black' onClick={onOpen}>Sing Up / Sing In</Button>
<Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
       



<LoginRoutes/>

          </ModalBody>

          <ModalFooter>
  
            <Button onClick={onClose}>Cancel</Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
</>


}