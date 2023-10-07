
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const SingleDataDetails = () => {
    const { id } = useParams();
    const [ticketType, setTicketType] = useState('standard');
    const [ticketPrice, setTicketPrice] = useState(100);

    const [cardDetails, setCardDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const details = data.find(card => card.id === Number(id));
                setCardDetails(details);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    };



    const handleTicketTypeChange = (e) => {
        const selectedType = e.target.value;
        setTicketType(selectedType);

        // Update ticket price based on selected type
        if (selectedType === 'standard') {
            setTicketPrice(100);
        } else if (selectedType === 'vip') {
            setTicketPrice(200);
        } else if (selectedType === 'premium') {
            setTicketPrice(300);
        } else {
            setTicketPrice(100); // Default to Standard ticket price
        }
    };



    return (
        <div>
            <div className="relative">
                <img src="https://i.ibb.co/gjyKFPz/Details-Page-Cover-photo.jpg" className="w-full h-[450px] mt-12 rounded-xl" alt="" />
                <div class="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
                <div className="absolute flex items-center gap-8 top-36 left-12">
                    <img className="rounded-xl" src={cardDetails.event_logo} alt="" />
                    <div className="text-white">
                        <h2 className="text-3xl font-bold w-[600px] mb-3">{cardDetails.name}</h2>
                        <p className="font-[500]">Date: {cardDetails.date}</p>
                        <p className="font-[500]">Time: {cardDetails.details_info.time}</p>
                        <p className="font-[500]">Vanue: {cardDetails.city}</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-10">
                <div className="col-span-2">
                    <div className="bg-gray-100 p-10 rounded-xl">
                        <img className="rounded-xl" src={cardDetails.details_info.event_cover_img} alt="" />
                        <h1 className="text-4xl font-bold mt-10 mb-6 ">Event Information</h1>
                        <p className="text-gray-600 text-[18px]">{cardDetails.details_info.event_info}</p>
                        <h1 className="text-4xl font-bold mt-10 mb-6 ">Event About</h1>
                        <p className="text-gray-600 text-[18px]">{cardDetails.details_info.evetn_about1}</p>
                        <p className="text-gray-600 text-[18px]">Topic Includes: </p>
                        <p className="ml-7 text-gray-600 text-[18px] mt-6">
                            <li>{cardDetails.details_info.evetn_about2}</li>
                            <li>{cardDetails.details_info.evetn_about3}</li>
                            <li>{cardDetails.details_info.evetn_about2}</li>
                            <li>{cardDetails.details_info.evetn_about3}</li>
                        </p>
                        <p className="text-gray-600 text-[18px] mt-6">{cardDetails.details_info.evetn_about1}</p>
                    </div>
                    <div className="my-10 bg-gray-100 p-10 rounded-xl">
                        <h2 className="text-4xl font-bold mb-10">Speaker</h2>
                        <div className="grid grid-cols-3 gap-8">
                            {
                                cardDetails.speaker.map(speak => <>
                                    <div className="border py-7 rounded-xl text-center">
                                        <div className="flex justify-center">
                                            <img className="rounded-full" src={speak.speaker_img} alt="" />
                                        </div>
                                        <h3 className="mt-6 text-xl font-semibold">{speak.speaker_name}</h3>
                                        <p className="mt-2 text-gray-700">{speak.speaker_name}</p>
                                        <p className="flex gap-2 items-center justify-center mt-7">
                                            <FaFacebookF></FaFacebookF>
                                            <FaTwitter></FaTwitter>
                                            <FaLinkedinIn></FaLinkedinIn>
                                            <FaInstagram></FaInstagram>
                                        </p>
                                    </div>
                                </>)
                            }
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="rounded-xl">
                        <div>
                            <div className="bg-gray-100 rounded-lg shadow-lg p-8 w-full">
                                <h2 className="text-2xl font-semibold mb-4">Ticket Purchase</h2>
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="ticketType" className="block text-gray-700 text-sm font-bold mb-2">Ticket Type:</label>
                                        <select
                                            id="ticketType"
                                            name="ticketType"
                                            className="w-full border rounded-md p-2"
                                            value={ticketType}
                                            onChange={handleTicketTypeChange}
                                        >
                                            <option value="standard">Standard</option>
                                            <option value="vip">VIP</option>
                                            <option value="premium">Premium</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="ticketPrice" className="block text-gray-700 text-sm font-bold mb-2">Ticket Price:</label>
                                        <input
                                            type="text"
                                            id="ticketPrice"
                                            name="ticketPrice"
                                            className="w-full border rounded-md p-2"
                                            value={`$${ticketPrice}`} // Display price with a dollar sign
                                            readOnly
                                        />
                                    </div>
                                    <button type="submit" className="bg-blue-500 text-white rounded-md p-2 w-full hover:bg-blue-600">Purchase</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDataDetails;