import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const PopularSpeak = () => {
    const [popularSpeaker, setPopularSpeaker] = useState([]);

    useEffect(() => {
        fetch('/popularSpeaker.json')
        .then(res => res.json())
        .then(data => setPopularSpeaker(data))
    }, [])

    return (
        <div className="grid md:grid-cols-4 gap-8">
            {
                popularSpeaker.map(speak => <>
                    <div className="border py-7 rounded-xl text-center">
                        <div className="flex justify-center">
                            <img className="rounded-full" src={speak.speaker_img} alt="" />
                        </div>
                        <h3 className="mt-3 text-2xl font-bold">{speak.speaker_name}</h3>
                        <p className="mt-2 text-gray-700">{speak.speaker_profession}</p>
                        <p className="flex text-xl gap-2 items-center justify-center mt-7">
                            <FaFacebookF className="text-blue-700"></FaFacebookF>
                            <FaTwitter className="text-blue-400"></FaTwitter>
                            <FaLinkedinIn className="text-blue-500"></FaLinkedinIn>
                            <FaInstagram className="text-red-400"></FaInstagram>
                        </p>
                    </div>
                </>)
            }
        </div>
    );
};

export default PopularSpeak;