import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <>
    <div className='header-container'>
    <div className = 'navbar' id="main">
        <div className="navbar-left">
         <img src='gaill.png' id="image" alt="img"></img>
        </div>
        <div><h1>Gate Pass Management</h1></div>
    <div className="nav-right">
      
        {/*<a href="" className='navbar-link text-dark me-5'>About</a>*/}
        <img src="indgov2.png" id='gov' alt=""/>
        <img src="MoPNG5.png" id='oil'  alt="" />
        
    </div>
    </div>
    </div>
    </>
  )
}


export default Header

{/*import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';

function Header() {
  return (

<>
    <div>hello</div>
  {/*  <div className="navbar">
      <div className="navbar-left">
        <h1>GPM</h1>
      </div>
      <div className="navigation-right">
        <Link to="/about" className='navbar-link'>About</Link>
        <Link to="/login" className='navbar-link'>Login</Link>
        <Link to="/register" className='navbar-link'>Register</Link>
      </div>
  </div>*/}

{/*</>
  
  );
}

export default Header;*/}
