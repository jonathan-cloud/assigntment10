import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Navlist = () => {
  return (
    
    <ul className="m-0">
      <li><Link className="active" to="/" >Students Home</Link></li>
      <li><Link to="/add" >Add Student </Link></li>
      <li><Link to='/dashboard'> Student Dashboard </Link></li>
    </ul>
  
  )
}

export default Navlist