import React, { useEffect } from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';
import Admin from './components/Admin';
import Fill from './components/Fill';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { createContext} from 'react';
import axios from 'axios';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import UserStatus from './components/UserStatus';
import AdminStatus from './components/AdminStatus';


export const UserContext = createContext()
const router = createBrowserRouter([
  {
  path: '/',
  element:<Home/>
  },
  {
    path: '/Header',
    element:<Header/>
  },
  {
      path: '/Login',
      element:<Login/>
  },
  {
        path: '/Register',
        element:<Register/>
  },
  {
          path: '/User',
          element:<User/>
  },
  {
    path: '/Admin',
    element:<Admin/>
  },
  {
    path: '/Fill',
    element:<Fill/>
  },
  {
    path: '/UserStatus',
    element:<UserStatus/>
  },
  {
    path: '/AdminStatus',
    element:<AdminStatus/>
  }
 
  
          

])


function App() {

  const[user, setUser] = useState();
  useEffect(()=>{
    axios.get('http://127.0.0.1:3000/contactmsyt/verify',{
      headers:{
        Authorization:`Bearer${localStorage.getItem('token')}`
    }
  })
  .then(res=>{
    if(res.data.success){
      setUser(res.data.user)
    }
  }).catch((err)=>{
    console.log(err)
  })

  },[])
  return (
  //   <>
  //   <Header></Header>
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<Home/>}/>
  //     <Route path='/Header' element={<Header/>}></Route>
  //     <Route path='/Login' element={<Login/>}/>
  //     <Route path='/Register' element={<Register/>}></Route>
  //     <Route path='/User' element={<User/>}></Route>
  //     <Route path='/Admin' element={<Admin/>}></Route>
  //     <Route path='/Fill' element={<Fill/>}></Route>
  //     <Route path='/u_interface' element={<u_interface/>}></Route>
  //   </Routes>
  // </BrowserRouter>
  

    
    
      
    
  
<>
<ToastContainer/>
<UserContext.Provider value={{user, setUser}}>
  <Header></Header>
  <RouterProvider router={router}></RouterProvider>
  </UserContext.Provider>
  </>
  )
}

export default App





