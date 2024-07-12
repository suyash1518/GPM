import React, { useState } from 'react';
import './Admin.css';
import Header from './Header';
import { Link } from 'react-router-dom';



const Admin = () => {



    return(
<div className="wrapper bg-image d-flex align-items-center justify-content-center w-100" style={{height:'100vh'}}>
 {/* <div className="container mt-0"> */}
 <div class="centered-div">
<div className='buttons center centered ms-5 mt-5' id='button1'>
<Link to='/AdminStatus'><button>Admin Dashboard</button></Link>
</div>

<div className='buttons center centered ms-5 mt-2' id='button2'>
<Link to = "/Login"><button>Log Out</button></Link>
</div>

</div>
</div>

    );
};





export default Admin;