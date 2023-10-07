import { useEffect, useState } from "react";
import Banner from "../Navbar-banner/Banner";
import SingleData from "../Components/SingleData";


const Home = () => {
    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);

    console.log(allData)

    return (
        <div>
            <div className="">
                <Banner></Banner>
            </div>
            <div className="my-10">
                <h2 className="text-center text-6xl font-semibold mb-12">Featured Events</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {
                        allData.map(singleData => <SingleData key={singleData.id} singleData={singleData}></SingleData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;