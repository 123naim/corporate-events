import { MdDateRange, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';


const SingleData = ({ singleData }) => {
    const { id, name, event_img, event_logo, date, city, organized_by } = singleData
    return (
        <div className="bg-gray-100 rounded-xl">
            <div className="relative">
                <img className="rounded-t-xl" src={event_img} alt="" />
                <img className="absolute top-4 left-4 w-24 h-24 rounded-xl" src={event_logo} alt="" />
            </div>
            <div className="p-5">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className='flex gap-4 items-center mt-5 text-gray-700'>
                    <MdDateRange className='text-xl'></MdDateRange>
                    {date}
                </p>
                <p className='flex gap-4 items-center mt-3 -ml-1 text-gray-700'>
                    <MdLocationOn className='text-2xl'></MdLocationOn>
                    {city}
                </p>
            </div>
            <div className="p-5 flex justify-between items-center">
                <div>
                    <p className='text-gray-700'>Organized By</p>
                    <p className='mt-1 text-2xl font-semibold'>{organized_by}</p>
                </div>
                <div>
                    <button className='btn btn-primary mt-1 text-white font-semibold'> <Link to={`/carddetail/${id}`}>View Details</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default SingleData;