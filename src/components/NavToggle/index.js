import { NavLink } from 'react-router-dom';

const NavToggle = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <NavLink to="/user" replace className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Tony
          </NavLink>
          <NavLink to="/" replace className="main-nav-item">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </>
      ) : (
        <NavLink to="/sign-in" replace className="main-nav-item">
          Sign In
        </NavLink>
      )}
    </div>
  );
}

export default NavToggle;
