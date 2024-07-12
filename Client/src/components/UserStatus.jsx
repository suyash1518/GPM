import React, { useEffect, useState } from 'react';
import './UserStatus.css';
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
//import Header from '../components/Header';
import { useContext } from 'react';
import { UserContext } from '../App';
import DataTable from 'react-data-table-component'
//import io from 'socket.io-client';///


const customStyles = {
    rows: {
            Cell: {
                className:'custom-row',
            
        },
    },
    headCells: {
        style: {
            fontSize: '15px',
            fontWeight: 600,
        },
    },
    cells: {
        style: {
            fontSize: '13px',
            fontWeight: 500,
        },
    },
};
 //const socket =io('http://127.0.0.1:3000');
function UserStatus() {
    // ... (other code remains unchanged)
    const [contacts, setContacts] = useState([])
    const { user } = useContext(UserContext);
    //const Name = user.name;
    const columns = [

        {
            name: "name",
            selector: (row) => row.name
        },
        {
            name: "designation",
            selector: (row) => row.designation
        },
        {
            name: "purpose",
            selector: (row) => row.purpose
        },
        {
            name: "department",
            selector: (row) => row.department
        },
        {
            name: "mentor",
            selector: (row) => row.mentor
        },
        {
            name: "Status",
            selector: (row) => row.Status
        },
        ]

        useEffect(() => {
            axios.get('http://127.0.0.1:3000/contactmsyt/installreqs', {
                 headers: {                                                      
                     Authorization: `Berear ${localStorage.getItem('token')}`       
                 }
            })
                .then((res) => {
                    if (res.data.success) {
    
                        setContacts(res.data.contacts)
    
                    }
                })
    
                .catch((err) => {
                    console.log(err);
    
                });
    
        }, [])

    
    //const navigate = useNavigate();
    return (
        <>
           
            <div className='border border-white Maincontainer'>
                <div className='col-2 box bg-light ms-1 mt-0' id='box2'>
                <Link to="/Login" className='text text-light text-decoration-none'> <button className='container-fluid btn btn-danger block bttn' type="submit">Log Out</button></Link>
                </div>
                <div className='col-1 row-1 box bg-light ms-1 mt-0 me-0' id='box1'>
                    <DataTable
                        columns={columns}
                        //data={contacts}
                        data={contacts.map(contacts => ({ ...contacts, tag: contacts.Status.toLowerCase() }))}
                        customStyles={customStyles}
                        pagination />
                </div>
            </div>
        </>
    );
}


export default UserStatus;





