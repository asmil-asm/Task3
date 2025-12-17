import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppContext } from "./ContextAPI";
import {Route,Routes,HashRouter as Router} from 'react-router-dom'
import Firstpage from "./pages/Firstpage";
import Secondpage from "./pages/Secondpage";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContext>
    <App />
  <Router>
    <Routes>
      <Route path="/" element={<Firstpage/>}/>
      <Route path="/page2"element={<Secondpage/>}/>
    </Routes>
  </Router>
</AppContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
