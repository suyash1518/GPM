import React, { useEffect, useState, useContext } from 'react';
import './UserStatus.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import DataTable from 'react-data-table-component';

const customStyles = {
    rows: {
        Cell: {
            className: 'custom-row',
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

function UserStatus() {
    const [contacts, setContacts] = useState([]);
    const { user } = useContext(UserContext);

    const columns = [
        { name: 'Name', selector: (row) => row.name },
        { name: 'Designation', selector: (row) => row.designation },
        { name: 'Purpose', selector: (row) => row.purpose },
        { name: 'Department', selector: (row) => row.department },
        { name: 'Mentor', selector: (row) => row.mentor },
        { name: 'Status', selector: (row) => row.Status },
    ];

    useEffect(() => {
        axios
            .get('http://127.0.0.1:3000/contactmsyt/installreqs', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((res) => {
                if (res.data.success) {
                    setContacts(res.data.contacts);
                }
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="Maincontainer">
            {/* Logout Button Section */}
            <div className="col-2 box" id="box2">
                <Link to="/Login" className="text-decoration-none">
                    <button className="container-fluid btn btn-danger bttn" type="button">
                        Log Out
                    </button>
                </Link>
            </div>

            {/* Table Section */}
            <div className="col-1 box" id="box1">
                <DataTable
                    columns={columns}
                    data={contacts.map((contact) => ({
                        ...contact,
                        tag: contact.Status?.toLowerCase(),
                    }))}
                    customStyles={customStyles}
                    pagination
                />
            </div>
        </div>
    );
}

export default UserStatus;
