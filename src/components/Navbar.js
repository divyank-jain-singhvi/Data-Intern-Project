import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page"to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active"to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-disabled="true"to="/search">Search</Link> 
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-disabled="true"to="/services">Service</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
  }
}

export default Navbar