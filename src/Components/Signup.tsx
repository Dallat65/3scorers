import React, { useState } from 'react';
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import './Signup.css'; 
import { register } from '../api/api';

interface SignupState {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  repeat_password: string;
}

const Signup: React.FC = () => {
  const [signUpDatavalue, setSignUpDatavalue] = useState<SignupState>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    repeat_password: '',
  });

  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: { target: { name: any; value: any; }; }) =>{
    setSignUpDatavalue({
      ...signUpDatavalue,
      [e.target.name]: e.target.value
    })
    // setfirstnamevalue(e.target.value);
      // console.log(e.target.value);        
    }

  const handleRegister = async(e: { preventDefault: () => void; }) =>{
    e.preventDefault();
    try {
    const registerResponse = await register(signUpDatavalue)
    console.log('REGISTER', registerResponse ); 
    
      if(registerResponse.data.success === true){
        Swal.fire({
         title: 'User Created!',
         icon: 'success',
         confirmButtonText: 'OK',
         timer: 1500
       })
       navigate('/login');
     }
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        confirmButtonText: 'OK'
      })
  }
  }
  return (
    
    <div className="signup-container">
      <div className='logo'>

      </div>

      <div className="background-section">
        <div className='background_main'>
        <img src='./src/assets/IMG-3scorersLogo.png' className='three-scorers-logo'/>
        <h2 className='signup-header'>Create an Account</h2>
        <p className='header-text'>Join the community and have fun predicting!</p>
        </div>

      </div>

      <div className="login-section">
        <div className="login_main">
        <div className="input-container">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={signUpDatavalue.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={signUpDatavalue.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Choose a username"
            value={signUpDatavalue.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={signUpDatavalue.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={signUpDatavalue.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="repeat_password"
            placeholder="Confirm your password"
            value={signUpDatavalue.repeat_password}
            onChange={handleInputChange}
          />
        </div>
          <div className='btn_containner'>
          <button className="btnClass" onClick={handleRegister}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;