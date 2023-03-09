import React from 'react';
import { useNavigate } from 'react-router-dom';
export const Home = () => {
    const navigate  = useNavigate()
    var logdata = JSON.parse(localStorage.getItem('mydata'));
    const email = logdata.email;
    const psw = logdata.password;
    localStorage.setItem("loggedin",true);
  return (

    <div>
     <center>
        <div className='home'>
        <h1>Your Login credentials</h1>
         <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
         <h2>Email:<span>{email}</span></h2>
        <h2>Password:<span style={{marginLeft:'0px'}}>{psw}</span></h2>
         </div>
        </div>
     



     </center>


    </div>
  )
}
