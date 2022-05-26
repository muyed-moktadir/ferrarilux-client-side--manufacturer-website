import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
            <li><Link to="/dashboard/myreview">My reviews</Link></li>
            <li><Link to="/dashboard/myorder">My order</Link></li>
            <li><Link to="/dashboard/menageorder">Menage Orders</Link></li>
           <li><Link to="/dashboard/users">All Users</Link></li>

          {/* admin hole link ta dekhabe na hole dekhabe na 75.8*/}

          {/* {admin && <li><Link to="/dashboard/users">All Users</Link></li>} */}
          </ul>
            
          
        
        </div>
      </div>
    );
};

export default Dashboard;