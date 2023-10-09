import { MdDateRange, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';


const SingleData = ({ singleData }) => {
    const { id, name, event_img, event_logo, date, city, price, details_info } = singleData
    return (
        <div className="bg-gray-100 rounded-xl">
            <div>
                <img className="rounded-t-xl w-full h-[200px]" src={event_img} alt="" />
            </div>
            <div className="p-5">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className='text-xl mt-3'>{details_info.event_info.slice(0, 50)}......</p>
                <p className='flex gap-4 items-center mt-5 text-gray-700'>
                    <MdDateRange className='text-xl'></MdDateRange>
                    {date}
                </p>
                <p className='flex gap-4 items-center mt-3 -ml-1 text-gray-700'>
                    <MdLocationOn className='text-2xl'></MdLocationOn>
                    {city}
                </p>
            </div>
            <div className="px-5 pb-5 flex justify-between items-center">
                <div>
                    <p className='text-gray-700 font-semibold text-2xl'>Price: {price}</p>
                </div>
                <div>
                    <button className='btn btn-primary mt-1 text-white font-semibold'> <Link to={`/carddetail/${id}`}>View Details</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default SingleData;


// Conferences and Seminars
// Trade Shows and Expos
// Team Building Workshops
// Product Launches
// Corporate Meetings
// Award Ceremonies