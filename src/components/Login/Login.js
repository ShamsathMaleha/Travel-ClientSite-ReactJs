import React from 'react';
import {  useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Login.css'
import photo from '../images/photo-3.jfif'



const Login = () => {
    const {signInUsingGoogle}= useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
   
    const handleGoogleSignIn = ()=>{
        signInUsingGoogle()
        .then(()=>{
            history.push(redirect_uri)
        })
    }
    
    return (
        
        <div>
            
<div>
<div className="login-section">
    <img src={photo} alt="" />
</div>
<div className="container " >
<div className="form w-50">
<div className="row d-flex justify-content-center"> 
<div className="col-sm-12 col-lg-12 ">
                             
  
      <h1>Login</h1>
        
        <div className="form">
        <button className="btn btn-outline-warning" onClick={handleGoogleSignIn}>Login with Google </button>

        </div>

   

  

  
        
  </div>
</div>
</div>
</div>
</div>
        </div>

    );
};

export default Login;

