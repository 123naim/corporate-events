import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AboutUs = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="text-center my-16 ">
                <h2 className="text-5xl font-bold">What We Offer</h2>
                <p className="my-8 text-gray-700 text-xl">Hear 9 inspiring talks, meet the best product people in Europe <br /> and party together after the event!</p>
                <div className="grid grid-cols-1 bg-white md:grid-cols-3 gap-8">
                    <div className="relative">
                        <img className="w-[400px] h-[250px] rounded-xl" src="https://i.ibb.co/d2K1HZC/Business-Presentation.jpg" alt="" />
                        <div class="absolute inset-0 bg-black opacity-60 rounded-xl"></div>
                        <div className="absolute top-12 left-14">
                            <h2 className="text-3xl mb-4 text-white font-bold ">Conference</h2>
                            <p className="w-60 text-white font-semibold">A group of impactful people gathers for the week-long experience — which attendees have described as “a journey into the future.”</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="w-[400px] h-[250px] rounded-xl" src="https://i.ibb.co/PW1mkvq/workshops.jpg" alt="" />
                        <div class="absolute inset-0 bg-black opacity-60 rounded-xl"></div>
                        <div className="absolute top-12 left-14">
                            <h2 className="text-3xl mb-4 text-white font-bold ">WorkShops</h2>
                            <p className="w-60 text-white font-semibold">Access to the conference and a workshop of your choice. Stick around for mind-blowing ideas from best speakers exclusively at Genesis Expo.</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="w-[400px] h-[250px] rounded-xl" src="https://i.ibb.co/9g1grfD/Coffee-Break.webp" alt="" />
                        <div class="absolute inset-0 bg-black opacity-60 rounded-xl"></div>
                        <div className="absolute top-12 left-14">
                            <h2 className="text-3xl mb-4 text-white font-bold ">Cooffe Breaks</h2>
                            <p className="w-60 text-white font-semibold">A group of impactful people gathers for the week-long experience — which attendees have described as “a journey into the future.”</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="w-[400px] h-[250px] rounded-xl" src="https://i.ibb.co/N3XydmJ/networking-session.jpg" alt="" />
                        <div class="absolute inset-0 bg-black opacity-60 rounded-xl"></div>
                        <div className="absolute top-12 left-14">
                            <h2 className="text-3xl mb-4 text-white font-bold ">Networking</h2>
                            <p className="w-60 text-white font-semibold">A group of impactful people gathers for the week-long experience — which attendees have described as “a journey into the future.”</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="w-[400px] h-[250px] rounded-xl" src="https://i.ibb.co/XCBg58P/Breakout-session.jpg" alt="" />
                        <div class="absolute inset-0 bg-black opacity-60 rounded-xl"></div>
                        <div className="absolute top-12 left-14">
                            <h2 className="text-3xl mb-4 text-white font-bold ">Breakout</h2>
                            <p className="w-60 text-white font-semibold">A group of impactful people gathers for the week-long experience — which attendees have described as “a journey into the future.”</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="w-[400px] h-[250px] rounded-xl" src="https://i.ibb.co/ZxcDb0C/Garms-Panel.jpg" alt="" />
                        <div class="absolute inset-0 bg-black opacity-60 rounded-xl"></div>
                        <div className="absolute top-12 left-14">
                            <h2 className="text-3xl mb-4 text-white font-bold ">Panel Discussions</h2>
                            <p className="w-60 text-white font-semibold">A group of impactful people gathers for the week-long experience — which attendees have described as “a journey into the future.”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;