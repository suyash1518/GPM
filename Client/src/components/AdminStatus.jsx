// import Header from "./Header";
// import React from "react";
// import DataTable from 'react-data-table-component'

import React, { useEffect, useState } from "react";
import "./AdminStatus.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header";
import { useContext } from "react";
import { UserContext } from "../App";
import axios from "axios";
import DataTable from "react-data-table-component";
//import { FaPenToSquare } from 'react-icons/fa6'

const customStyles = {
  rows: {
    styled: {
      backgroundColor: (row) => {
        if (row.Status === "Approved") {
          return "green";
        } else if (row.Status === "Rejected") {
          return "red";
        } else {
          return "yellow";
        }
      },
    },
  },
  headCells: {
    style: {
      fontSize: 15 + "px",
      fontWeight: 600,
    },
  },
  cells: {
    style: {
      fontSize: 13 + "px",
      fontWeight: 500,
    },
  },
};

function AdminStatus() {
  const [contacts, setContacts] = useState([]);
  const [filterText, setFilterText] = useState("");

  const columns = [
    {
      name: "name",
      selector: (row) => row.name,
    },

    {
      name: "designation",

      selector: (row) => row.designation,
    },

    {
      name: "purpose",
      selector: (row) => row.purpose,
    },

    {
      name: "department",
      selector: (row) => row.department,
    },

    {
      name: "mentor",
      selector: (row) => row.mentor,
    },

    {
      name: "Status",
      cell: (row) => (
        <select value={row.Status} onChange={(e) => handleStatusChange(e, row)}>
          <option value="Pending" className="badge text-bg-success">
            Pending
          </option>
          <option value="Approved" className="badge text-bg-danger">
            Approved
          </option>
          <option value="Rejected" className="badge text-bg-warning">
            Rejected
          </option>
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
              Authorization: `Berear ${localStorage.getItem("token")}`,
            },
          }
        ) // Assuming the endpoint for updating the record is '/api/records/:id'
        // Handle successful update
        .then((res) => {
          if (res.data.success) {
            //console.log(updatedRow)
            //console.log("updated");
            setContacts((prevContacts) =>
              prevContacts.map((contact) => {
                if (contact._id === row._id) {
                  return { ...contact, Status: e.target.value };
                }
                return contact;
              })
            );
          }
        })
        .catch((err) => {
          // Handle error
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // setLoading(true)
    fetch("http://127.0.0.1:3000/contactmsyt/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      // setLoading(false)
      .catch(
        (error) => console.error("Error fetching records: ", error)
        //setLoading(false)
      );
  }, [contacts]);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="Maincontainer">
        <div className="col-2 box bg-light" id="box2">
          <button
            className="btn btn-primary block bttn"
            style={{ backgroundColor: "red", border: "1px solid red" }}
            type="submit"
          >
            <a href="/Login" className="text text-light text-decoration-none">
              Log Out
            </a>
          </button>
        </div>

        <div className="col-1 box bg-light contact-list ">
          <DataTable
            columns={columns}
            data={contacts}
            customStyles={customStyles}
            pagination
          />
        </div>
      </div>
    </>
  );
}

export default AdminStatus;
