import React, { useState,useEffect } from "react";
import { Link,Redirect} from 'react-router-dom';
import { useForm } from "react-hook-form";

import  store  from  "../store.js";
import reducers from "../reducers/reducers.js";



function Login(props) {
  
  const stateUser = store.getState();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    if(data.login == 'admin' && data.password == '123456') {
      let username = data.login;
      let password = data.password;
        // dispatch action
        store.dispatch({
          type: 'LOGIN',
          login: username,
          password: password
        });

        props.history.push('/profile')
    }
    else {
      alert('Login or Password incorrect!');
    }
  };





  return (
    <main className="main-content bg-gray">
       <h1>Current state is {stateUser.status + ' as ' + stateUser.login}</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Login</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-md-12">

            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
                <div className="form-group">
                  <label>Login</label>
                  <input className="form-control" type="text" name="login" ref={register({ required: true })} />
                </div>
                {errors.login && <span>Login field is required</span>}
                <br/>
                {/* include validation with required or other standard HTML validation rules */}
                <div className="form-group">
                  <label>Password</label>
                  <input className="form-control" type="password" name="password" ref={register({ required: true })} />
                </div>
                {/* errors will return when field validation fails  */}
                {errors.password && <span>Password field is required</span>}
                <br/>
                <input type="submit" className="btn btn-info" />
              </form>
            </div>

        </div>
      </div>
    </main>
  );
};

export default Login;
