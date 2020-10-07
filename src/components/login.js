import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Login() {

  const [login, setLogin] = useState('false');


   const getUserData = param => e => {
     console.log(e);
   }

  return (
    <main className="main-content bg-gray">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          <li class="breadcrumb-item active" aria-current="page">Login</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-md-12">

            <div>
              <form className="formLogin" id="formLogin">
        
              <label>Username</label>
              <div className="input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text">L</span>
                </div>
                <input type="text" className="form-control form-control-lg" id="userLogin" type="text" name="userLogin" placeholder="Username"/>

              </div>
              <br/>
              <label>Password</label>
              <div className="input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text">P</span>
                </div>
                <input type="password" className="form-control form-control-lg" id="userPassword" type="password"  name="userPassword" placeholder="Password"/>
                <a href="#" className="password-control-top"></a>
              </div>
              <br/>
              <button type="button" onClick={getUserData()} className="btn btn-primary" id="LoginBtn">Login</button>
              <br/>

              </form>
            </div>

        </div>
      </div>
    </main>
  );
};

export default Login;
