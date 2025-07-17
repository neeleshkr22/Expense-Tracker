import React from "react"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import SignUp from "./pages/Auth/SignUp"
import Login from "./pages/Auth/Login"
import { Home } from "./pages/Dashboard/Home"
import { Income } from "./pages/Dashboard/Income"
import { Expense } from "./pages/Dashboard/Expense"

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Root/>}/>

        <Route path="/login"element={<Login/>}/>
        <Route path="/signup"element={<SignUp/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/dashboard"element={<Home/>}/>
        <Route path="/income"element={<Income/>}/>
        <Route path="/expense"element={<Expense/>}/>
        </Routes>
      </Router>
    </div>
    
    
  )
}

export default App

const Root = ()=>{
  const isAuthanticated =  !!localStorage.getItem("token");


  return isAuthanticated?<Navigate to="/dashboard"/>:<Navigate to="/login"/>

}

