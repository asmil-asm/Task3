import { createContext,useState,useContext,useEffect} from "react";
const ContextAPI=createContext();
export const AppContext= ({children})=>{
    let [data,setData]=useState({name:"",email:""});
// get data
 useEffect(()=>{
let Data= JSON.parse(localStorage.getItem('data'));
if(Data!=null)
    setData(Data);
  },[])
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