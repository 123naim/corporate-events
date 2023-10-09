import { Outlet } from "react-router-dom";
import Header from "../Navbar-banner/Header";
import Footer from "../Components/footer";
import { ToastContainer } from 'react-toastify';


const Root = () => {
    return (
        <div>
            <div className="w-5/6 mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;