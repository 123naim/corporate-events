import { MdDateRange, MdLocationOn } from 'react-icons/md';


const OrganizData = ({data}) => {
    const { organiz_name, organiz_img, event_no, organiz_location } = data;
    return (
        <div className="bg-gray-200 rounded-xl p-5 flex gap-4 items-center">
            <div>
                <img className="rounded-xl" src={organiz_img} alt="" />
            </div>
            <div>
                <h2 className="text-[18px] mb-[6px] font-bold">{organiz_name}</h2>
                <p className="mb-[6px] text-gray-700 flex gap-2 items-center"><MdDateRange className='text-xl'></MdDateRange> {event_no}</p>
                <p className='flex gap-2 text-gray-700'><MdLocationOn className='text-2xl'></MdLocationOn> {organiz_location}</p>
            </div>
        </div>
    );
};

export default OrganizData;