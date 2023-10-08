import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Category = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2>this is Category Page: {user.email}</h2>
            <h2>this is Category Page: {user.displayName}</h2>
            <img src={user.photoURL} alt="" />
        </div>
    );
};

export default Category;