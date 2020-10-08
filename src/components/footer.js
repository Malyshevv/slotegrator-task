import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink,Link } from 'react-router-dom'

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import  store  from  "../store.js";

function  Footer() {

  const userData = store.getState();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
   setAnchorEl(null);
  };

  const handleLogout = (event) =>  {
    // dispatch action
    localStorage.removeItem('user');

  	store.dispatch({
    	type: 'LOGOUT',
      login: 'guest'
    });
    
  };

    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row text-center d-flex justify-content-center pt-5 ">
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link href="/">Home</Link>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/news/">News</Link>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
              <Button aria-controls="simple-menu" className="btnUserFooter" aria-haspopup="true"  onClick={handleClick}>
                Profile
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
              {(() => {
                if (userData.login === 'guest')  {
                  return (
                    <div>
                      <MenuItem onClick={handleClose}><Link to="/login">Login</Link></MenuItem>
                      <MenuItem onClick={handleClose}><Link to="/users">All Users </Link></MenuItem>
                    </div>
                  )
                }
                else {
                  return(
                    <div>
                    <MenuItem onClick={handleClose}><Link to="/profile">My Page</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/users">All Users </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link onClick={handleLogout}>Logout</Link></MenuItem>
                    </div>
                  )
                 }
              })()}
              </Menu>
              </h6>
            </div>
          </div>
          <hr/>
          <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="#"> Slotegrator</a>
          </div>
          </div>
      </footer>
    );
}

export default Footer;
