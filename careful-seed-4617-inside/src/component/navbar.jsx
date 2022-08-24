import { Stack ,Box,Text,Flex, Spacer,Image, Input } from "@chakra-ui/react"
import styles from "./navbar.module.css"
export default function Navbar(){
console.log(styles)
return <Stack>

<Flex  className={styles.topNav}   >
<Box  w={"30%"}  >
    <Flex>

    <Text  ><i className="fa-solid fa-truck"></i>  Free Shipping</Text>
   <Spacer/>
    <Text>
 
 
 <i className="fa-solid fa-store"></i>  Return To Store </Text>
    <Spacer/>
    <Text> 
 
 
 <i className="fa-solid fa-gift"></i>  Click & Collect</Text>

    </Flex>
</Box>
<Spacer/>
<Box w={"30%"}  >
    <Flex>

    <Text>Download Our Apps</Text> 
   <Spacer/>
    <Text>|</Text> 
   <Spacer/>
    <Text>Store Locator</Text>
    <Spacer/>
    <Text>|</Text> 
    <Spacer/>
    <Text>Help</Text>


    </Flex>
    </Box>
</Flex>




<Box className={styles.navCont} >
<Box className={styles.check} w={"30%"} >
<Box>
    <Image src="https://www.landmarkgroup.com/qa/sites/default/files/Brand-logo/New%20Max%20Logo-%20Eng%20With%20Outline_1.png"/>
</Box>
<Box>Women</Box>
<Box>Men</Box>
<Box>Girls</Box>
<Box>Boys</Box>

</Box>

<Box><i className="fa-solid fa-magnifying-glass"></i><Input placeholder="What are you looking for?"  /></Box>
<Box>
<Box>More</Box>
<Box>Sing Up/Sing in</Box>
<Box><i className="fa-solid fa-heart"></i></Box>
<Box><i className="fa-solid fa-bag-shopping"></i> </Box>

</Box>


</Box>


</Stack>



}