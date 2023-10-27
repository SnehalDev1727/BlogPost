import React,{useState} from 'react';
import './style.css';
import{NavLink}from 'react-router-dom'

const Navbar=(props)=> {

const [search,setSearch] =useState(false)



    const opensearch=()=>
    {
    setSearch(true)
    }
    const SubmitSearch=(e)=>
    {
        e.preventDefault();
        alert("search head")
    }

    const searchClass=search?'searchinputactive':'searchinput';
    console.log(searchClass);

    return (
        <div className="navbar">
           <ul className="navbarmenu">
               <li><NavLink to="/">Home</NavLink></li>
               <li><NavLink to="/post">All Blog</NavLink></li>
               <li><NavLink to="#">Add Blog</NavLink></li>
           </ul>
           <div className="search">
               <form onSubmit={SubmitSearch}>
                    <input type="text" placeholder="Search" className="searchClass" />
                    <img onClick={opensearch} className="searchicon" src={require('../../Assets/icon/Search.png')} alt="Search"/>
              </form>

           </div>
        </div>
    )
}
export default Navbar;