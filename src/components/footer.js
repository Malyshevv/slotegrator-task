import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink,Link } from 'react-router-dom'

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


function Header() {

  const [login, setLogin] = useState('false');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
   setAnchorEl(null);
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
                if (login === 'false') {
                  return (
                    <div>
                      <MenuItem onClick={handleClose}><NavLink to="/login/">Login</NavLink></MenuItem>
                      <MenuItem onClick={handleClose}><NavLink to="/users/">All Users </NavLink></MenuItem>
                    </div>
                  )
                }
                else {
                  return(
                    <div>
                    <MenuItem onClick={handleClose}><NavLink to="/profile/">My Page</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to="/all-users/">All Users </NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink>Logout</NavLink></MenuItem>
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

export default Header;
