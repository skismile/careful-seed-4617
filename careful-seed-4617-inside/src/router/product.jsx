import { Box,Button,Image,Select,SimpleGrid,Stack,Text,Option,Flex } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Appcontext } from "../context/appcontext";
const url=`https://fakestoreapi.com/products/category/`

const getData=(sort,category)=>{
    return axios.get(url+`${category}'s%20clothing`)
}

export default function Product(){
const [data,setData]=useState([])
const[sort,setSort]=useState('asc')
const[category,setCategory]=useState('men')

const {state,dispatch}=useContext(Appcontext)

console.log(state.products)
    useEffect(()=>{
        dispatch({type:'loading'})
getData(sort,category).then((res)=>{
    // setData(res.data)
    // console.log(res.data)
    dispatch({type:'getproducts',payload:res.data})
})

    },[category])

const handleSort=(e)=>{
    dispatch({type:'loading'})
let x= e.target.value
if(x=='asc')
{
    let newData=state.products.sort((a,b)=>{
        return a.price-b.price
    })
    dispatch({type:'getproducts',payload:newData})
    
}

else{
    dispatch({type:'loading'})
    let newData=state.products.sort((a,b)=>{
        return b.price-a.price
    })
    dispatch({type:'getproducts',payload:newData})
   
}

}
const handleCategory=(e)=>{
    dispatch({type:'loading'})
setCategory(e.target.value)
}

const handleSortbyRating=(e)=>{
    dispatch({type:'loading'})
let x= e.target.value
if(x=='asc')
{
    let newData=state.products.sort((a,b)=>{
        return a.rating.rate-b.rating.rate
    })
    dispatch({type:'getproducts',payload:newData})
    
}

else{
    dispatch({type:'loading'})
    let newData=state.products.sort((a,b)=>{
        return b.rating.rate-a.rating.rate
    })
    dispatch({type:'getproducts',payload:newData})
   
}
}





if(state.loading)
{
    return <Text fontSize={'4xl'} >....loading</Text>
}



return <Stack p={'50px'} >
<Flex w={'30%'} >
<Select onChange={handleSort} placeholder='Sort By Price'>
  <option value='asc'>Low to High</option>
  <option value='desc'>High to Low</option>
</Select>
<Select onChange={handleCategory} placeholder='Category'>
  <option value='men'>Men</option>
  <option value='women'>Women</option>
</Select>
<Select onChange={handleSortbyRating} placeholder='ratings'>
  <option value='asc'>Low to High</option>
  <option value='desc'>High to Low</option>
</Select>
</Flex>
<SimpleGrid  columns={2}  gap="10px"  border={'1px solid red'}   >

{state.products.map((item)=>{

return<Link to={`/product/${item.id}`} > <Box _hover={{
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
}} m={'auto'} p="5px" w="400px" h={'400px'}  key={item.id} boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"} >
<Image  w={'100%'} h={'50%'} src={item.image}  />
<Text  fontWeight={'bold'} fontSize='xl' >{item.title}</Text>
{/* <Text>{item.description}</Text> */}

{/* <Text><b>Category : </b>{item.category}</Text> */}
<Text><b>${item.price}</b></Text>
<Text><b>Ratings :</b> {item.rating.rate}</Text>
{/* <Text>Totel Ratings : {item.rating.count}</Text>  */}
  <Button bg={'#303AB2'} colorScheme={"blue"} color='white'  >ADD TO BASKET</Button>
</Box></Link>

})}




</SimpleGrid>
</Stack> 

}