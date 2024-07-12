import React, { useState } from 'react';
import './Fill.css';
import Header from './Header';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Validation from './Validation';


const Fill = () => {
    const [values, setValues] = useState({
        name: '',
        designation: '',
        purpose:'',
        department:'',
        mentor:''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
            axios.post('http://127.0.0.1:3000/contactmsyt/add-request',values,{
                headers:{
                    Authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            if (res.data.success) {
                toast.success("Submitted Successfully", {
                    position: "top-left",
                    width: 100,
                    autoClose: 2000
                });
                
                // localStorage.setItem("token", res.data.token)
                
            }
            navigate('/User')
            setValues({name: '',designation: '',purpose:'',department:'',mentor:''})
        })
        .catch((err) =>{
            console.log(err)
        });
        navigate('/User')

        // Add form submission logic here
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(values);
    };

    // const errors = {
    //     Name: '', // Add validation error messages if needed
    //     Designation: '' // Add validation error messages if needed
    // };

    // const serverErrors = []; // Add server-side validation errors if applicable

    return (
        <>
           
            <div className='wrapper bg-image  d-flex align-items-center justify-content-center w-100 '  style={{ height: '90vh' }}>
                <div className='register bg-light ' style={{height:'600px'}} >
                    <form className='needs-validation' onSubmit={handleSubmit}>

                    <div className='form-group was-validated mb-2'>
                            <label htmlFor='name' className='form-label'>Name</label>
                            <input type='name' className='form-control' name='name' /*value={values.name}*/ onChange={handleChange} required />
                            {/*{errors.password && <span className='error'>{errors.password}</span>}*/}
                        </div>

                        <div className='form-group was-validated mb-2'>
                            <label htmlFor='designation' className='form-label'>Designation</label>
                            <input type='designation' className='form-control' name='designation' /*value={values.designation}*/ onChange={handleChange} required />
                            {/*{errors.password && <span className='error'>{errors.password}</span>}*/}
                        </div>


                        <div className='form-group was-validated mb-2'>
                            <label htmlFor='purpose' className='form-label'>Purpose</label>
                            <input type='purpose' className='form-control' name='purpose' /*value={values.purpose}*/ onChange={handleChange} required />
                           {/*} {errors.email && <span className='error'>{errors.email}</span>}*/}
                        </div>

                        <div className='form-group was-validated mb-2'>
                            <label htmlFor='department' className='form-label'>Department</label>
                            <input type='department' className='form-control' name='department' /*value={values.department}*/ onChange={handleChange} required />
                            {/*{errors.password && <span className='error'>{errors.password}</span>}*/}
                        </div>

                        <div className='form-group was-validated mb-2'>
                            <label htmlFor='mentor' className='form-label'>Mentor</label>
                            <input type='mentor' className='form-control' name='mentor' /*value={values.mentor}*/ onChange={handleChange} required />
                            {/*{errors.password && <span className='error'>{errors.password}</span>}*/}
                        </div>

                        {/* {serverErrors.length > 0 && (
                            serverErrors.map((error, index) => (
                                <p className='error' key={index}>{error.msg}</p>
                            ))
                        )} */}

                        <div>
                            <button type='submit' className='btn btn-success w-100 h-25 block mt-2  '>Submit</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Fill;