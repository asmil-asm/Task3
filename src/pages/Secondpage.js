import '../App.css'
import { Link } from 'react-router-dom'
import { useAPIcontext } from '../ContextAPI'
const Secondpage = () => {
  let {data}=useAPIcontext();
  return (
    <div className="data">
        <h2>Name:</h2>
        <p>{data.name}</p>
        <h2>Email:</h2>
        <p>{data.email}</p>

 <Link to={'/'}>
    <button >Back</button>

   </Link>
    </div>
  )
}

export default Secondpage