import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';
import './NavBar.css';

const Navbar: React.FC = () => {
  const [contactAnchorEl, setContactAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleContactClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setContactAnchorEl(event.currentTarget);
  };

  const handleContactClose = () => {
    setContactAnchorEl(null);
  };

  return (
    <header>
      <nav>
        <div className="navbar-buttons">
          <div className="navbar-buttons-right">
            <Button
              color="primary"
              aria-controls="contact-menu"
              aria-haspopup="true"
              onClick={handleContactClick}
              className="navbar-button"
            >
              Contact Us
            </Button>
            <Menu
              id="contact-menu"
              anchorEl={contactAnchorEl}
              keepMounted
              open={Boolean(contactAnchorEl)}
              onClose={handleContactClose}
              className="contact-menu"
            >
              <MenuItem onClick={handleContactClose}>
                <a href="mailto:johm@gmail.com">Email</a>
              </MenuItem>
              <MenuItem onClick={handleContactClose}>
                <a href="tel:+1234567890">Phone</a>
              </MenuItem>
            </Menu>
            <Button
              color="primary"
              component={RouterLink}
              to="/signup"
              className="navbar-button"
            >
              Sign Up
            </Button>
            <Button
              color="primary"
              component={RouterLink}
              to="/signin"
              className="navbar-button"
            >
              Sign In
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
