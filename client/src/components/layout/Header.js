// Component folder has all the files which would be re used repertedly like header ,footer
import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
// import { BiLogoShopify } from 'react-icons/bi'
import { BiLogoShopify } from 'react-icons/bi';
import PageNotFound from './../../pages/PageNotFound';
const Header = () => {
    return (
        <><nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to="/" className="navbar-brand" ><BiLogoShopify />My Bazzar</Link>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link " >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Category" className="nav-link" >Category</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Register" className="nav-link" href="#">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Login" className="nav-link " >Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Card" className="nav-link " >Card</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        </>
    )
}

export default Header; 