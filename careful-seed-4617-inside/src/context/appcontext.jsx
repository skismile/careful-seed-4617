import { createContext } from "react";




export const Appcontext=createContext()

export default function AppContextProvider({children}){


return <Appcontext.Provider value={'hello its working'}  >{children}</Appcontext.Provider>


}