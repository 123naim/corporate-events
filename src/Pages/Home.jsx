import { useContext, useEffect, useState } from "react";
import Banner from "../Navbar-banner/Banner";
import SingleData from "../Components/SingleData";
import PopularSpeak from "../Components/PopularSpeak";
import { AuthContext } from "../Provider/AuthProvider";
import OrganizData from "../Components/OrganizData";


const Home = () => {
    const [allData, setAllData] = useState([]);
    const [organizData, setOrganizData] = useState([]);


    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);

    useEffect(() => {
        fetch('/featured-organization.json')
        .then(res => res.json())
        .then(data => setOrganizData(data))
    }, [])

    const {name} = useContext(AuthContext);

    return (
        <div>
            <div className="">
                <Banner></Banner>
            </div>
            <div className="my-8 md:my-16">
                <h2 className="text-center text-3xl md:text-6xl font-semibold md:mb-12 mb-6">Featured Events</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {
                        allData.map(singleData => <SingleData key={singleData.id} singleData={singleData}></SingleData>)
                    }
                </div>
            </div>
            <div className="my-16">
                <h2 className="text-center text-6xl font-semibold mb-12">Featured Organizers</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {
                        organizData.map(data => <OrganizData key={data.id} data={data}></OrganizData>)
                    }
                </div>
            </div>
            <div className="my-16">
                <h2 className="text-center text-6xl font-semibold mb-12">Popular Speakers</h2>
                <div>
                    <PopularSpeak></PopularSpeak>
                </div>
            </div>
        </div>
    );
};

export default Home;