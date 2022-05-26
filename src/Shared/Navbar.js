import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
  const [user] =useAuthState(auth);
  const logout = () => {
    signOut(auth);
  }; 
  
    const menuItems=(
        <>
         <li><Link to="/">Home</Link></li>
        <li><Link to='/purchasePage'>Purchase</Link></li>
        <li><Link to='/blog'>Blog</Link></li>

        {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}

        <li>
        {user ? (
          <button onClick={logout} className="btn btn-ghost">
            logOut
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
          </li>
        </>
    )
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-warning normal-case text-xl">FerrariLux</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">

{/* add end sidebar (74.8) add for and tabindex 1 */}
<label for="dashboard-sidebar"  tabIndex="1" className="btn btn-ghost lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </label>
{/* <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
</div>
</div>
    );
};

export default Navbar;