import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <nav>
            <div className="leftNav">
                <Link to="/">All</Link>
                <Link to="/fullzip">Full zip</Link>
                <Link to="/pants">Pants</Link>
                <Link to="/bag">Bag</Link>
            </div>
            <div className="midNav">
                <div className="logo"><p>PRESMA</p></div>
            </div>
            <div className="rightNav">
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    )
}