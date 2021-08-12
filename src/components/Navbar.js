import React from 'react';
import { NavLink } from 'react-router-dom';
import { Session } from '../requests';

function Navbar({ currentUser, onSignOut }) {
  const handleSignOut = () => {
    Session.destroy().then(() => {
      onSignOut();
    });
  };
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 30px',
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      {currentUser ? (
        <React.Fragment>
          <NavLink to="/products/new">Products New</NavLink>-
          <span>
            Welcome, {currentUser.first_name}
            {currentUser.last_name}
          </span>
          -<button onClick={handleSignOut}>Sign Out</button>
        </React.Fragment>
      ) : (
        <>
          <NavLink to="sign_in">Sign In</NavLink>
          <NavLink to="sign_up">Sign Up</NavLink>
        </>
      )}
    </nav>
  );
}

export default Navbar;
