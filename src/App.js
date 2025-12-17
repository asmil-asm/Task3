
import { useEffect } from "react";
import { useAPIcontext } from "./ContextAPI";
function App() {
    let {setData}=useAPIcontext();
// get data
 useEffect(()=>{
let Data= JSON.parse(localStorage.getItem('data'));
if(Data!=null)
    setData(Data);
  },[])
  return (
  <>
  </>
  );
}

export default App;
