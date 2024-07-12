import React, { useState, useEffect } from 'react';
import './Register.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import Validation from './Validation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
   
    const [values, setValues] = useState({
        name:'',
        designation:'',
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [serverErrors, setServerErrors] = useState([]);



    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = Validation(values)
        setErrors(errs);
        if (errs.name === "" && errs.designation === "" && errs.email === "" && errs.password === "") {
            axios.post('http://127.0.0.1:3000/contactmsyt/Register', values)
                .then(res => {
                    if(res.data.success){
                    toast.success(`${values.name},Account Created Successfully.`, {
                        position: "top-left",
                        //positionClass:"toast-top-full-width",
                        style:{
                            width:'100%',
                           // color:'red'
                        },
                        autoClose: 2000


                    })
                    navigate('/Login')
                }
                })
                .catch(err => {
                    if(err.response.data.errors){
                        setServerErrors(err.response.data.errors)
    
                    }
                    else{
                        console.log(err)
                    }
                   // console.log(err);

                })
        }
        /* axios.post('http://localhost:3000/auth/Registration', { name, designation, email, password,})
             .then(response => {
                 if (response.data.status) {
                     navigate('/Login')
                 }
             })
             .catch(err => {
                 console.log(err)
             })*/


    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    // const errors = {
    //     email: '', // Add validation error messages if needed
    //     Password: '' // Add validation error messages if needed
    // };

    // const serverErrors = []; // Add server-side validation errors if applicable

    return (
        <>
           
            <div className='wrapper bg-image  d-flex align-items-center justify-content-center '  style={{ height: '90vh' }}>
                <div className=' register bg-light' >
                    <form className='bg2-image needs-validation' onSubmit={handleSubmit}>

                    <div className='form-group was-validated mb-2'>
                            <label htmlFor='username' className='form-label'>Username</label>
                            <input type='username' className='form-control' name='name' /*value={values.name}*/ onChange={handleChange} required />
                            {errors.name && <span className='error'>{errors.name}</span>}
                        </div>

                        <div className='form-group was-validated mb-2'>
                            <label htmlFor='Designation' className='form-label'>Designation</label>
                            <input type='Designation' className='form-control' name='designation' /*value={values.designation}*/ onChange={handleChange} required />
                            {errors.designation && <span className='error'>{errors.designation}</span>}
                        </div>


                        <div className='form-group was-validated mb-2'>
                            <label htmlFor='email' className='form-label'>Email-Address</label>
                            <input type='email' className='form-control' name='email' /*value={values.email}*/ onChange={handleChange} required />
                            {errors.email && <span className='error'>{errors.email}</span>}
                        </div>

                        <div className='form-group was-validated mb-2'>
                            <label htmlFor='password' className='form-label'>Create Password</label>
                            <input type='password' className='form-control' name='password' /*value={values.Password}*/ onChange={handleChange} required />
                            {errors.password && <span className='error'>{errors.password}</span>}
                        </div>

                        

                         {serverErrors.length > 0 && (
                            serverErrors.map((error, index) => (
                                <p className='error' key={index}>{error.msg}</p>
                            ))
                        )} 

                        <div>
                            {/* <Link to="/Login">*/}<button type='submit' className='btn btn-success w-100 h-25 block mt-2'>Register Here</button> {/*</Link>*/}
                            <p>Have an Account? <a className='text-primary' href='./Login'>Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;