import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../img/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/authSlice';
import { resetUserProfile } from '../../Redux/userProfileSlice';
import './style.css';

const Navbar = () => {

  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const userName = useSelector(state => state.user.userProfile?.userName);
  const location = useLocation();
  useEffect (() => {
    if(location.pathname === "/"){
      dispatch(logout());
      dispatch(resetUserProfile());
    }
  }, [location.pathname, dispatch]);
  
  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetUserProfile());
  };

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {token ? (
          <>
            <NavLink to="/user" className="main-nav-item">
              <i className="fa fa-user-circle nav-icon"></i>
              {userName}
            </NavLink>
            <NavLink to="/" onClick={handleLogout} className="main-nav-item">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </>
        ) : (
          <NavLink to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle nav-icon"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
