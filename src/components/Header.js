import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const auth = JSON.parse(sessionStorage.getItem('auth'));

  const [userIconState, setUserIconState] = useState(false);

  let activeStyle = {
    textDecoration: 'underline',
  };

  //function to logout
  const Logout = () => {
    let authen = false;
    sessionStorage.setItem('auth', authen);
    setUserIconState(false);
    navigate('/login');
  };

  const onUserClick = () => {
    setUserIconState(!userIconState);
  };

  // ================================================================

  // =====================================================================

  return (
    <div>
      <div className={auth ? 'user-make' : null}>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          onClick={() => setUserIconState(false)}
        >
          <a className="navbar-brand" href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwzsL1YzQGowOg88tm4sMVGshPhAzEUYA7Ud-3DAwAAwlt6nrVmBPirpOq7-GlWVeuLoQ&usqp=CAU"
              style={{ width: '80px' }}
            />
          </a>
          <nav className="navbar navbar-light bg-light">
            <NavLink
              to="/"
              className="navbar navbar-light bg-light"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="navbar-brand mb-0 h1">Home</span>
            </NavLink>
          </nav>

          {auth ? (
            <NavLink
              to="/blog-management"
              className="navbar navbar-light bg-light"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="navbar-brand mb-0 h1">Blog Management</span>
            </NavLink>
          ) : (
            <NavLink
              to="/blogs"
              className="navbar navbar-light bg-light"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="navbar-brand mb-0 h1">Blogs</span>
            </NavLink>
          )}

          <NavLink
            to="/contact"
            className="navbar navbar-light bg-light"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <span className="navbar-brand mb-0 h1">Contact Us</span>
          </NavLink>
          {auth ? (
            <NavLink
              to="/login"
              onClick={Logout}
              className="navbar navbar-light bg-light"
            >
              <span className="navbar-brand mb-0 h1">Logout</span>
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="navbar navbar-light bg-light"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="navbar-brand mb-0 h1">Login</span>
            </NavLink>
          )}
          {/* ======================================================================================= */}
          <NavLink
            to="/data-table"
            className="navbar navbar-light bg-light"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <span className="navbar-brand mb-0 h1">Datatable</span>
          </NavLink>

          {/* ======================================================================================= */}
        </nav>

        {auth ? (
          <div className="user-top">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrM9idjLIZhIs-ZGvkIef0hWJbgOiReywmVg&usqp=CAU"
              onClick={onUserClick}
            />

            {userIconState ? (
              <div className="dropDisplay">
                <a
                  onClick={() => {
                    navigate('/change-password');
                    setUserIconState(false);
                  }}
                >
                  Change Password
                </a>
                <br />
                <a onClick={Logout}>Logout</a>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
