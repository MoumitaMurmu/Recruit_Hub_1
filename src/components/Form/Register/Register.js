import React, { useState } from 'react';
import './register.css'
import { useNavigate } from 'react-router-dom';
import logo from '../../../assests/Recruithublogo.png';

const Register = () => {

    const navigate = useNavigate('');

   

const[adminName, setAdminName] = useState('');
const[email, setEmail] = useState('');
const[password, setPassword] = useState('');

function handleSubmit(e){
  e.preventDefault();
  console.log(adminName, email, password);
}





  return (
    <form onSubmit={handleSubmit} className='register-form'>
         <div style={{ height: '100px' , textAlign:'center'}}>
            <img src={logo} alt='logo' style={{height:'100px'}}/>
         </div>
         <h4 style={{textAlign:'center',
       color:'rgb(35 123 247)',
       fontWeight:'600'
       }}>Create Account</h4>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder='Enter your name here'
          value={adminName}
          onChange={(e)=>setAdminName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Example@email.com'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='Enter your password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
      </div>
      {/* <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder='Re-enter your password'
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          required
        />
      </div> */}
      <button type="submit">Register</button>
     <div>
      <p style={{padding:'5px', marginTop:'20px', textAlign:'center', fontSize:'13px', fontWeight:'600'}}>
      Already have an account.
        <span 
       style={{cursor:'pointer', color:'blue', paddingLeft:'5px' }}>Login Now</span>
      </p>
     </div>
    </form>
  );
};

export default Register;

