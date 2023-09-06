/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from 'react';
import styles from'./Login.module.css'
import { useNavigate } from 'react-router-dom';
import { login } from '../api/api';
import Swal from 'sweetalert2';

const Login: React.FC = () => {
  const [loginDatavalue, setLoginDatavalue] = useState({})
  const navigate = useNavigate();
    const handleInputChange = (e: { target: { name: any; value: any; }; }) =>{
      setLoginDatavalue({
        ...loginDatavalue,
        [e.target.name]: e.target.value
        
      })   
    }

    const handleLogin = async(e: { preventDefault: () => void; }) =>{
      e.preventDefault();
      try {
      const loginResponse = await login(loginDatavalue)
      if(loginResponse.data.success === true){
        Swal.fire({
         title: 'You are now logged in!',
         icon: 'success',
         confirmButtonText: 'OK',
         timer: 1500
       })
       navigate('/dashboard');
      }
        
        localStorage.setItem("userData", JSON.stringify(loginResponse.data) )
        localStorage.setItem("accessToken", loginResponse.data.accessToken )
        localStorage.setItem("refreshToken", loginResponse.data.refreshToken )


        
      
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        Swal.fire({
          title: 'Error!',
          icon: 'error',
          confirmButtonText: 'OK'
        })
    }
    }
  return (
    
    <div className={styles.loginContainer}>
      <img src="./src/assets/IMG-3scorersLogo.png"  alt="Logo" className="logo,loginImg"/>
      <div className={styles.loginCard}>
        <h2>Login</h2>
        <form>
          <div className={styles.inputContainer}>
            <label>Email Address</label>
            <input name="email" type="email" placeholder="Enter your email" onChange={handleInputChange}/>
          </div>
          <div className={styles.inputContainer}>
            <label>Password</label>
            <input name="password"  type="password" placeholder="Enter your password" onChange={handleInputChange}/>
          </div>
          <button type="submit" onClick={handleLogin}>Login</button>
        </form>
      </div>
      <div/>
     </div>
  );
};

export default Login;
