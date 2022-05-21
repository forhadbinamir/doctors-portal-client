import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../Firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-gray-200 text-base-content rounded-lg mr-3">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointment</Link></li>
                    <li><Link to='/dashboard/review'>My Review</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/users'>All users</Link></li>
                        <li><Link to='/dashboard/doctor'>Add a doctor</Link></li>
                        <li><Link to='/dashboard/managedoctor'>Manage doctor</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;