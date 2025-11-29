
import Firstpage from "./pages/Firstpage";
import Secondpage from "./pages/Secondpage";
import {Route,Routes,HashRouter as Router} from 'react-router-dom'
import { AppContext } from "./ContextAPI";
function App() {

  return (
  <>
<AppContext>
  <Router>
    <Routes>
      <Route path="/" element={<Firstpage/>}/>
      <Route path="/page2"element={<Secondpage/>}/>
    </Routes>
  </Router>
</AppContext>

  </>
  );
}

export default App;
