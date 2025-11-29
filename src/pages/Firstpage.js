import '../App.css'
import { Link } from 'react-router-dom'
import { useAPIcontext } from '../ContextAPI'
const Firstpage = () => {
  let {data,setData}=useAPIcontext();
  // change Name
  function handleName(event){
setData({...data,name:event.target.value});
    // storge data
    localStorage.setItem('data',JSON.stringify(data));


  }
  // change Email
  function handleEmail(event){
    setData({...data,email:event.target.value});
    // storge data
    localStorage.setItem('data',JSON.stringify(data));

  }
   
  return (
    <>
   <form>
     <label>Name</label>
<input value={data.name} onChange={handleName} type='text'/>
<label>email</label>
<input value={data.email} onChange={handleEmail} type='email'/>
 <Link to={'/page2'}>
    <button >Go to Second Page</button>

   </Link>
   </form>
  
</>
  )
}

export default Firstpage