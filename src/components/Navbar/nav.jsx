import React from "react";


export default function Navbar(){
    return(
        <nav>
            <div className="leftNav">
                <a href="index.html">All</a>
                <a href="">Full zip</a>
                <a href="">Pants</a>
                <a href="">Bag</a>
            </div>
            <div className="midNav">
                <div className="logo"><p>PRESMA</p></div>
            </div>
            <div className="rightNav">
                <a href="contact.html">Contact</a>
                <a href="">Cart</a>
            </div>
        </nav>
    )
}