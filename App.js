import React from 'react'
import { Register } from './Register';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { ProtectedRoute } from './ProtectedRoute';
function App(){
  const login=localStorage.getItem("loggedin")
  return (
    <div>
     <Router>
        <Routes>
            <Route path="/login" element={login?<Home />:<Login />}/>
            <Route path="/" element={login?<Home />:<Register />}/>
            <Route path="/home" element={<ProtectedRoute />}>
             <Route path="/home" element={<Home />}/>
            </Route>
           
        </Routes>
     </Router>
    </div>
  )
}
export default App;
