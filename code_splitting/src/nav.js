import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li><Link to='home'>Home</Link></li>
        <li><Link to='products'>Products</Link></li>
        <li><Link to='profile'>Profile</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Navbar
