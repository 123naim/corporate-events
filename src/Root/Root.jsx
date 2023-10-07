import { Outlet } from "react-router-dom";
import Header from "../Navbar-banner/Header";
import Footer from "../Components/footer";


const Root = () => {
    return (
        <div className="w-5/6 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;