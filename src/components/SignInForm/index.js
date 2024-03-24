import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginAsync, resetStatus } from "../../Redux/authSlice";


import "./style.css";
import { fetchUserProfile } from "../../Redux/userProfileSlice";



const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);
  const authStatus = useSelector(state => state.auth.status)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginAsync({ email, password }));
    dispatch(fetchUserProfile());
  };

  useEffect(() => {
    if(token){
      navigate('/user');   
    }
  }, [token, navigate]);

  useEffect(() =>{
    dispatch(resetStatus());
  },[dispatch])

  

    return(

        <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {authStatus === 'failed' && (
          <div className="error-message">
            <p>Please enter a correct username and password.</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input 
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    )

};

export default SignInForm;
