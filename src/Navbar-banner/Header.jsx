import { NavLink } from "react-router-dom";
import "./header.css";
import logo from '../assets/logo.png';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const pageLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>AboutUs</NavLink></li>
        <li><NavLink to='/sponsor'>Sponsor</NavLink></li>
    </>

    const handleLogout = () => {
        logOut()
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className=" -mt-1 flex flex-col md:flex-row justify-between bg-violet-600 text-white items-center py-4 border rounded-b-xl px-3">
            <div>
                <img className="w-48 h-12" src={logo} alt="" />
            </div>
            <div className="mt-3 md:mt-0">
                <ul className="flex gap-4 text-xl font-semibold">
                    {pageLink}
                </ul>
            </div>
            <div className="mt-5 md:mt-0">
                <p className="text-xl flex items-center gap-4 font-semibold">
                    <div>
                        {
                            user ? <>
                                {
                                    user.photoURL ? <>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-8 border rounded-xl px-2 py-1">
                                                <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                                                <p>{user.displayName}</p>
                                            </div>
                                            <a onClick={handleLogout} href="">LogOut</a>
                                        </div>
                                    </> : <>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-8 border rounded-xl px-2 py-1">
                                                <img className="w-10 h-10 rounded-full" src="https://i.ibb.co/j8ZdpDs/default-profile-2.jpg" alt="" />
                                                <p>{user.displayName}</p>
                                            </div>
                                            <a onClick={handleLogout} href="">LogOut</a>
                                        </div>
                                    </>
                                }
                            </> :
                                <>
                                    <div className="flex gap-4 items-center">
                                        <NavLink
                                            to="/login"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            Login
                                        </NavLink>
                                        <NavLink
                                            to="/signup"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            SignUp
                                        </NavLink>
                                    </div>
                                </>
                        }
                    </div>

                </p>
            </div>
        </div>
    );
};

export default Header;