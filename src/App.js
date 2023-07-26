import React from 'react'
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Welcome from './Welcome';
const App = () => {
  return (
   <div>
     <Router>
      <Routes>
       <Route path="/"  element={<Login />}  exact/>
       <Route path="/signup"  element={<Signup/>}  exact/>
       <Route path="/welcome"  element={<Welcome/>}  exact/>
       </Routes>
    </Router>
   </div>
  )
}

export default App;