import React, { useEffect, useState, useContext } from "react";
import "./AdminStatus.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { UserContext } from "../App";
import axios from "axios";
import DataTable from "react-data-table-component";

const customStyles = {
    rows: {
        style: {
            backgroundColor: "#fff", // Default row color
        },
    },
    headCells: {
        style: {
            fontSize: "15px",
            fontWeight: 600,
        },
    },
    cells: {
        style: {
            fontSize: "13px",
            fontWeight: 500,
        },
    },
};

function AdminStatus() {
    const [contacts, setContacts] = useState([]);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
        },
        {
            name: "Designation",
            selector: (row) => row.designation,
        },
        {
            name: "Purpose",
            selector: (row) => row.purpose,
        },
        {
            name: "Department",
            selector: (row) => row.department,
        },
        {
            name: "Mentor",
            selector: (row) => row.mentor,
        },
        {
            name: "Status",
            cell: (row) => (
                <select
                    value={row.Status}
                    onChange={(e) => handleStatusChange(e, row)}
                >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                </select>
            ),
        },
    ];

    const handleStatusChange = async (e, row) => {
        try {
            const updatedRow = { ...row, Status: e.target.value };
            await axios
                .put(
                    `http://127.0.0.1:3000/contactmsyt/records/${row._id}`,
                    updatedRow,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                )
                .then((res) => {
                    if (res.data.success) {
                        setContacts((prevContacts) =>
                            prevContacts.map((contact) =>
                                contact._id === row._id
                                    ? { ...contact, Status: e.target.value }
                                    : contact
                            )
                        );
                    }
                })
                .catch((err) => console.error(err));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        axios
            .get("http://127.0.0.1:3000/contactmsyt/contacts")
            .then((res) => {
                if (res.data.success) {
                    setContacts(res.data.contacts);
                }
            })
            .catch((err) => console.error("Error fetching records:", err));
    }, []);

    return (
        <div className="Maincontainer">
            {/* Logout Button Section */}
            <div className="box">
                <button className="btn btn-danger bttn">
                    <a href="/Login">Log Out</a>
                </button>
            </div>

            {/* Table Section */}
            <div className="box contact-list">
                <DataTable
                    columns={columns}
                    data={contacts}
                    customStyles={customStyles}
                    pagination
                />
            </div>
        </div>
    );
}

export default AdminStatus;
