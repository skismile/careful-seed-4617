import { createContext, useReducer } from "react";

const init={
    isAuth:false,
    email:null,
    password:null,
    singupData:[],
    loading:false,
    error:false,
    products:[],
    cartData:[]
}
const reducer=(state,action)=>{
    switch(action.type)
    {
case "loginSuccess":return{...state,isAuth:true,email:action.payload.email,password:action.payload.password}
case "logout":return{...state,isAuth:false,email:"",password:""}
case "singupSuccess":return {...state,singupData:[...state.singupData,action.payload]}
case "loading":return {...state,loading:true,error:false}
case "loading":return {...state,loading:false,error:true}
case 'getproducts':return {...state,loading:false,error:false,products:[...action.payload]}
case 'loded':return {...state,loading:false,error:false}
case 'addingCart':return {...state,loading:false,error:false,cartData:[...state.cartData,action.payload]}
default:return state  

}
}

export const Appcontext=createContext()

export default function AppContextProvider({children}){
const [state,dispatch]=useReducer(reducer,init)


return <Appcontext.Provider value={{state,dispatch}}  >{children}</Appcontext.Provider>


}