import React, { createContext, useContext, useState } from 'react';
import './User.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import Admin from './Admin';
import UserStatus from './UserStatus';

const User = () => {

    const {user} = useContext(UserContext);
    //var data = user.email;
    let data = localStorage.getItem('token')

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Add form submission logic here
    // };

    return(

<div className=' bg-image ' style={{height:'90vh'}}>
    
{/* {
(data.email === 'suyash2004pandey@gmail.com')? 
<>
<div class="centered-div">
<div className='buttons' id='button1'>
<Link to="/Fill"> <button type='submit'>Request For Gatepass</button></Link></div>
<div className='buttons' id='button2'>
<Link to ='/UserStatus'><button id='button2'>View Status of Approval</button></Link></div>
<div className='buttons' id='button3'>
<Link to ="/Login"><button id='button3'>Log Out</button> </Link> </div> 
</div>
</> : <><Admin/></>}*/}
<div class="centered-div">
<div className='buttons' id='button1'>
<Link to="/Fill"> <button type='submit'>Request For Gatepass</button></Link></div>
<div className='buttons' id='button2'>
<Link to ='/UserStatus'><button id='button2'>View Status of Approval</button></Link></div>
<div className='buttons' id='button3'>
<Link to ="/Login"><button id='button3'>Log Out</button> </Link> </div> 
</div>
</div> 
 );
};

export default User;