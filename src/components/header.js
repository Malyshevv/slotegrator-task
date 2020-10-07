import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink,Link } from 'react-router-dom';

import { createBrowserHistory } from "history";

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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">Slotegrator</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/news">News</Link>
            </li>
          </ul>
          <div>
            <Button aria-controls="simple-menu" aria-haspopup="true"  onClick={handleClick}>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle userBtn" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
              </svg>
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
                    <MenuItem onClick={handleClose}><NavLink to="/users/">All Users </NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink>Logout</NavLink></MenuItem>
                  </div>
                )
               }
            })()}
            </Menu>
          </div>
        </div>
      </nav>
    );
}

export default Header;
