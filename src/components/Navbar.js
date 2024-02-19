import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar(){
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent fixed-top nav-style">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      {/* need to change dark=>white */}
                    <Link className="nav-link active text-white" aria-current="page"to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white"to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white" aria-disabled="true"to="/search">Search</Link> 
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white" aria-disabled="true"to="/services">Service</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
  }