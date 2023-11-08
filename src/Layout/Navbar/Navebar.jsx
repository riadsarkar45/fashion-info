import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaStar } from 'react-icons/fa';
const Navebar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(result => {
                toast.success("LogOut Successfull");
                console.log(result)
            })
            .catch(error => console.error(error))
    }
    const navLink = (
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/add-service">Add Service</NavLink></li>
            {user ? (
                <li tabIndex={0}>
                    <details>
                        <summary>Dashboard</summary>
                        <ul className="p-2">
                            <li><NavLink to="/add-service">Add Service</NavLink></li>
                            <li><NavLink to="/my-shedule">My Schedule</NavLink></li>
                            <li><NavLink to="/my-services">My Services</NavLink></li>
                        </ul>
                    </details>
                </li>
            ) : null}
        </ul>
    );


    const nav = <>
        <ul className="menu menu-horizontal px-1">

            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/blog">Write A Blog</NavLink></li>

            {
                user ? <>

                    <li><NavLink to="/add-service">Add Service</NavLink></li>
                    <li>
                        <div className="dropdown dropdown-bottom">
                            <label tabIndex={0} className="m-1">Dashboard</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><NavLink to="/add-service">Add Service</NavLink></li>
                                <li><NavLink to="/my-shedule">My Shedule</NavLink></li>
                                <li><NavLink to="/my-services">My Services</NavLink></li>
                            </ul>
                        </div>
                    </li>
                </>

                    :

                    null
            }
        </ul>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    {navLink}


                </div>
                <a className="btn btn-ghost normal-case text-xl"><FaStar></FaStar> Fashion Info</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {nav}
            </div>
            {
                user ?

                    <>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                    <a className="justify-between">
                                        {user.displayName}
                                    </a>
                                </li>
                                <li>
                                    <a className="justify-between">
                                        {user.email}
                                    </a>
                                </li>
                                <li onClick={handleLogout}><a>Logout</a></li>
                            </ul>
                        </div>
                    </>


                    :


                    <>
                        <div className="navbar-end">
                            <Link className="btn" to="/login">Login</Link>
                        </div>
                    </>
            }
        </div>



    );
};

export default Navebar;