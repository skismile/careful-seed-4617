import { Stack ,Box,Text,Flex, Spacer,Image, Input, Button, MenuList, MenuButton,Menu,MenuItem, } from "@chakra-ui/react"
import {ChevronDownIcon} from "@chakra-ui/icons" 
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




<Box   className={styles.navCont} >
<Box className={styles.check} w={"30%"} >
<Box>
    <Image src="https://www.landmarkgroup.com/qa/sites/default/files/Brand-logo/New%20Max%20Logo-%20Eng%20With%20Outline_1.png"/>
</Box>
<Menu  >
  <MenuButton className={styles.cont} bg="none" colorScheme='white'  color={"black"} as={Button} rightIcon={<ChevronDownIcon/>}>
    Women
  </MenuButton>
  <MenuList w={{
    base:'400px',
    sm:"600px",
    md:"800px",
    lg:'1000px'
  }}
  
  
  >
    <MenuItem> <a href="https://www.maxfashion.in/in/en/search?q=%3AallCategories%3Amaxwomen-tops%3Abadge.title.en%3AONLINE%20ONLY">Tops</a> </MenuItem>
    <MenuItem>Indian wear</MenuItem>
    <MenuItem>Sports wear</MenuItem>
    <MenuItem>Dresses</MenuItem>
    <MenuItem>Bottom Wear</MenuItem>
    <MenuItem>Sleepwear</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton className={styles.cont} bg="none" colorScheme='white'  color={"black"} as={Button} rightIcon={<ChevronDownIcon/>}>
    Men
  </MenuButton>
  <MenuList w={{
    base:'200px',
    sm:"400px",
    md:"600px",
    lg:'800px'
  }} >
     <MenuItem>Tops</MenuItem>
    <MenuItem>Indian wear</MenuItem>
    <MenuItem>Sports wear</MenuItem>
    <MenuItem>Dresses</MenuItem>
    <MenuItem>Bottom Wear</MenuItem>
    <MenuItem>Sleepwear</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton className={styles.cont} bg="none" colorScheme='white'  color={"black"} as={Button} rightIcon={<ChevronDownIcon/>}>
    Girls
  </MenuButton>
  <MenuList w={{
    base:'200px',
    sm:"300px",
    md:"500px",
    lg:'700px'
  }} >
    <MenuItem>Tops</MenuItem>
    <MenuItem>Indian wear</MenuItem>
    <MenuItem>Sports wear</MenuItem>
    <MenuItem>Dresses</MenuItem>
    <MenuItem>Bottom Wear</MenuItem>
    <MenuItem>Sleepwear</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton className={styles.cont} bg="none" colorScheme='white'  color={"black"} as={Button} rightIcon={<ChevronDownIcon/>}>
    Boys
  </MenuButton>
  <MenuList w={{
    base:'100px',
    sm:"150px",
    md:"400px",
    lg:'600px'
  }}  >
    <MenuItem>Tops</MenuItem>
    <MenuItem>Indian wear</MenuItem>
    <MenuItem>Sports wear</MenuItem>
    <MenuItem>Dresses</MenuItem>
    <MenuItem>Bottom Wear</MenuItem>
    <MenuItem>Sleepwear</MenuItem>
  </MenuList>
</Menu>

</Box>

<Box border={'1px solid skyblue'}  p="0px 0px 0px 5px"  ><i className="fa-solid fa-magnifying-glass"></i><Input placeholder="What are you looking for?" border={'none'} outline={"none"}   /></Box>
<Box>
<Menu>
  <MenuButton className={styles.cont} bg="none" colorScheme='white'  color={"black"} as={Button} rightIcon={<ChevronDownIcon/>}>
    More
  </MenuButton>

  <MenuList>
    <MenuItem>Online Gift Card</MenuItem>
    <MenuItem>Online Gift Card</MenuItem>
    <MenuItem>Blog</MenuItem>
    <MenuItem>City Buzz</MenuItem>
    <MenuItem>SBI Offers</MenuItem>
    <MenuItem>Partner Enquiry</MenuItem>
  </MenuList>
</Menu>
{/* <Box> <Login/> </Box> */}
<Box><i className="fa-solid fa-heart"></i></Box>
<Box><i className="fa-solid fa-bag-shopping"></i> </Box>

</Box>


</Box>


</Stack>



}