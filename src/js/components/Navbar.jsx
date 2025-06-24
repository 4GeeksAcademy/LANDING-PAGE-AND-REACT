import React from "react";
const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
         <div className="container">
         <a className="navbar-brand text-white" href="#">Kim Kardashian website</a>
         <div>
           <a className="text-white me-3" href="#">Home</a>
           <a className="text-white me-3" href="#">About</a>
           <a className="text-white me-3" href="#">Services</a>
           <a className="text-white" href="#">Contact</a>
         </div>
        </div>
    </nav>
    );

};

export default Navbar;