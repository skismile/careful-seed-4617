import { createContext, useReducer } from "react";

const init={
    isAuth:false,
    email:null,
    password:null,
    singupData:[]
}
const reducer=(state,action)=>{
    switch(action.type)
    {
case "loginSuccess":return{...state,isAuth:true,email:action.payload.email,password:action.payload.password}
case "singupSuccess":return {...state,singupData:[...state.singupData,action.payload]}

    }
}

export const Appcontext=createContext()

export default function AppContextProvider({children}){
const [state,dispatch]=useReducer(reducer,init)


return <Appcontext.Provider value={{state,dispatch}}  >{children}</Appcontext.Provider>


}