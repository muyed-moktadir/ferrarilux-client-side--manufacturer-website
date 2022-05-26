import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* <!-- Page content here --> */}
          <h2 className='text-3xl text-green-600 font-bold'>Welcome To Dashboard</h2>
          <Outlet></Outlet>

        
        </div> 
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to="/dashboard" >My Profile</Link></li>
            {
                !admin && <li><Link to="/dashboard/myreview">My reviews</Link></li>
            }
            {
              !admin && <li><Link to="/dashboard/myorder">My order</Link></li>
            }
            {
             admin && <li><Link to="/dashboard/menageorder">Menage Orders</Link></li>
            }
            {
             admin && <li><Link to="/dashboard/addaproduct">Add A Product</Link></li>
            }

          {admin && <li><Link to="/dashboard/users">All Users</Link></li>}
          </ul>
            
          
        
        </div>
      </div>
    );
};

export default Dashboard;