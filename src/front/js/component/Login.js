import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import React, { useContext, useState, Component} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const [Uname, setUname] = useState('');
  const [newUser, setNewUser] = useState(false);
  const token = sessionStorage.getItem("token");

  const handleRegisterClick = (e) => {
    e.preventDefault();
    // console.log(e.target)
    actions.createUser(Uname, email, password)
    
  }
  const handleLoginClick = (e) => {
    e.preventDefault();
    // console.log(e.target)
    actions.login(email, password)
       
  }
  const redirect = (e) => {
    e.preventDefault();
    setNewUser(true)
    console.log(newUser);
  }
    // if (store.token && store.token != "" && store.token != undefined) history("/profile")
    let fields = newUser == false ?
      <div className="login-form">
        <form>
          <h1>Login</h1>
          <div className="content">
              <div className="input-field">
                  <input type={"text"} placeholder={'Email'} value={email} onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <div className="input-field">
                  <input type={'password'} placeholder={'password'} value={password} onChange={(e)=> setPassword(e.target.value)}/>
              </div>
              <a href="#" className="link">Forgot Your Password?</a>
              <br/>
          </div>
          <div className="action">              
              <button className="regBtn" onClick={(e)=> redirect(e)}>Register</button>
              <button onClick={(e) => handleLoginClick(e)}>Sign in</button>
          </div>
        </form>
          
          {store.message && <p>{store.message}</p>}
      </div>
      :
      <div className="register-form">
        <form>
            <h1>Register</h1>

            <div className="content">
                <div className="input-field">
                    <input type={"text"} placeholder={'Name'} value={Uname} onChange={(e)=> setUname(e.target.value)}/>
                </div>
                <div className="input-field">
                    <input type={"text"} placeholder={'Email'} value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="input-field">
                    <input type={'password'} placeholder={'password'} value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <a href="#" className="link">Forgot Your Password?</a>
                <br/>
            
                <span>Go Back</span>
                
            </div>

            <div className="action">
              <button onClick={(e) => handleRegisterClick(e)}>Register</button>
            </div>

        </form>
      
      </div>


  return (
    <div>
      {fields}
    </div>
  );
}

export default Login;