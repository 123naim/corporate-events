import { NavLink } from "react-router-dom";
import "./header.css";
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className=" -mt-1 flex justify-between bg-violet-600 text-white items-center py-4 border rounded-b-xl px-3">
            <div className="pl-3">
                <img className="w-48 h-12" src={logo} alt="" />
            </div>
            <div className="px-60">
                <ul className="flex gap-4">
                    <li className="text-xl">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="text-xl">
                        <NavLink
                            to="/category"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Category
                        </NavLink>
                    </li>
                    <li className="text-xl">
                        <NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="">
                <p className="text-xl font-semibold">
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Login
                    </NavLink>
                </p>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Header;