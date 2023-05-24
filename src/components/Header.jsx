import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

const Header = () => {
  return (
    <nav>
        <h1>Travigo</h1>
        <main>
            <HashLink to="/#home" >Home</HashLink>
            <Link to="/contact" onClick={()=> window.scroll(0 , 0) } >Contact</Link>
            <HashLink to="/#about" >About</HashLink>
            <HashLink to="/#brands" >Brands</HashLink>
            <Link to="/services" onClick={()=> window.scroll(0 , 0) }>Services</Link>
        </main>
    </nav>
  )
}

export default Header