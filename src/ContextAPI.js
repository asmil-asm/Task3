import { createContext,useState,useContext} from "react";
const ContextAPI=createContext();
export const AppContext= ({children})=>{
    let [data,setData]=useState({name:"",email:""});

    return(
        <>
        <ContextAPI.Provider value={{data,setData}}>
{children}
        </ContextAPI.Provider>
        </>
    )
}
export const useAPIcontext=()=>{
    const context=useContext(ContextAPI);
    return context;
}