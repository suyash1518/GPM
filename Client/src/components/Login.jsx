
// import React, {createContext, useContext, useState, UserContext } from 'react';
// import '../components/Login.css';
// import Header from './Header';
// import { Link } from 'react-router-dom';
// import Validation from './Validation';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
// //import { UserContext } from '../App';
// //import React, { createContext, useContext, useState } from 'react';


// const Login = () => {
//     const {user} = useContext(UserContext);
//     //var data = user.email;
//     let data = localStorage.getItem('token')
//     const [values, setValues] = useState({
//         email: '',
//         password: ''
//     });
//     const navigate = useNavigate();
//     //const[user, setUser] = useContext(UserContext)
//     const [errors, setErrors] = useState({})
//     const [serverErrors, setServerErrors] = useState([])


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const errs = Validation(values)
//         setErrors(errs);
//         if (errs.email === "" && errs.password === "") {
//             axios.post('http://127.0.0.1:3000/contactmsyt/Login', values)
//                 .then(res => {
//                     if (res.data.success) {
//                         toast.success("Login Successfully", {
//                             position: "top-left",
//                             width: 100,
//                             autoClose: 2000
//                         })
//                         /*localStorage.setItem("token", res.data.token)
//                         localStorage.setItem("name",res.data.user.name)
//                         localStorage.setItem("designation",res.data.user.designation)
//                         localStorage.setItem("email",res.data.user.email)
//                         setUser(res.data.user)*/
//                         //console.log('data',res.data["user"]["email"])
//                         localStorage.setItem("token", res.data.token)
//                         //console.log(localStorage.getItem())
//                         //setUser(res.data.user)

//                         var abc = res.data["user"]["email"];
//                         if( res.data.token.email === "shubhang@gmail.com" )
//                             {
                                
//                                 navigate('/User')
                                
//                         }
//                         else{
                            
//                             navigate('/Admin')
//                         }

                        
//                     }
//                 })
//                 .catch(err => {
//                     console.log(err)
//                     if (err.response.data.errors) {
//                         setServerErrors(err.response.data.errors)
//                     }
//                     else {
//                         console.log(err)
//                     }

//                 })
//         }
       


//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setValues({
//             ...values,
//             [name]: value
//         });
//     };

//     // const error = {
//     //     email: '', // Add validation error messages if needed
//     //     Password: '' // Add validation error messages if needed
//     // };

//     // const serverErrors = []; // Add server-side validation errors if applicable

//     return (
//         <>
           
//             <div className='wrapper bg-image d-flex align-items-center justify-content-center w-100'  style={{ height: '90vh' }}>
//                 <div className='login bg-light' id="log" >
//                     <form className='needs-validation' onSubmit={handleSubmit}>
//                         <div className='form-group was-validated mb-2'>
//                             <label htmlFor='email' className='form-label'>Email-Address</label>
//                             <input type='email' className='form-control' name='email' /*value={values.email}*/ onChange={handleChange} required />
//                             {errors.email && <span className='error'>{errors.email}</span>}
//                         </div>

//                         <div className='form-group was-validated mb-2'>
//                             <label htmlFor='password' className='form-label'>Password</label>
//                             <input type='password' className='form-control' name='password' /*value={values.password}*/ onChange={handleChange} required />
//                             {errors.password && <span className='error'>{errors.password}</span>}
//                         </div>

//                          {serverErrors.length > 0 && (
//                             serverErrors.map((error, index) => (
//                                 <p className='error' key={index}>{error.msg}</p>
//                             ))
//                         )}

//                         <div className='form-group form-check mb-2'>
//                             <label htmlFor='checkbox' className='form-check-label'>Remember me</label>
//                             <input type='checkbox' className='form-check-input' />
//                         </div>

//                         <div>
//                         {/* <Link to= "/User"> */} <button type='submit' className='btn btn-success w-100 h-25 block mt-2'> SIGN IN</button> {/*</Link>*/}
//                             <p>Don't Have Account? <Link to="/Register" className='text-primary' >Register</Link></p>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;


import React, { useContext, useState } from 'react';
import '../components/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './Validation';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from '../App';

const Login = () => {
    const { setUser } = useContext(UserContext);
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [serverErrors, setServerErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = Validation(values);
        setErrors(errs);
        if (errs.email === "" && errs.password === "") {
            axios.post('http://127.0.0.1:3000/contactmsyt/Login', values)
                .then(res => {
                    if (res.data.success) {
                        toast.success("Login Successfully", {
                            position: "top-left",
                            width: 100,
                            autoClose: 2000
                        });

                        localStorage.setItem("token", res.data.token);
                        localStorage.setItem("name", res.data.user.name);
                        localStorage.setItem("designation", res.data.user.designation);
                        localStorage.setItem("email", res.data.user.email);
                        setUser(res.data.user);

                        if (res.data.user.email === "shubhang@gmail.com") {
                            navigate('/Admin');
                        } else {
                            navigate('/User');
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                    if (err.response?.data?.errors) {
                        setServerErrors(err.response.data.errors);
                    } else {
                        console.log(err);
                    }
                });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    return (
        <>
            <div className='wrapper bg-image d-flex align-items-center justify-content-center w-100' style={{ height: '90vh' }}>
                <div className='login bg-light' id="log">
                    <form className='needs-validation' onSubmit={handleSubmit}>
                        <div className='form-group was-validated mb-2'>
                            <label htmlFor='email' className='form-label'>Email-Address</label>
                            <input type='email' className='form-control' name='email' onChange={handleChange} required />
                            {errors.email && <span className='error'>{errors.email}</span>}
                        </div>

                        <div className='form-group was-validated mb-2'>
                            <label htmlFor='password' className='form-label'>Password</label>
                            <input type='password' className='form-control' name='password' onChange={handleChange} required />
                            {errors.password && <span className='error'>{errors.password}</span>}
                        </div>

                        {serverErrors.length > 0 && (
                            serverErrors.map((error, index) => (
                                <p className='error' key={index}>{error.msg}</p>
                            ))
                        )}

                        <div className='form-group form-check mb-2'>
                            <label htmlFor='checkbox' className='form-check-label'>Remember me</label>
                            <input type='checkbox' className='form-check-input' />
                        </div>

                        <div>
                            <button type='submit' className='btn btn-success w-100 h-25 block mt-2'>SIGN IN</button>
                            <p>Don't Have an Account? <Link to="/Register" className='text-primary'>Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
