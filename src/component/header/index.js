import React from 'react';
import './style.css';

const Header =(props)=>{
    return(<div>
       <header className="header">
           <nav className="headerMenu">
               <a href="#"> Home</a>
               <a href="#">About Us</a>
               <a href="#">Contact us </a>               
           </nav>
           <div>Social media links </div>
       </header>
    </div>);
}
export default Header;