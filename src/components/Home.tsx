import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import image from "../assets/in-c869-p03-1280px_0.jpg";

const Home = () => {
    return (
        <div className="flex flex-col h-screen bg-black p-6">
            <div className="grid grid-cols-3 gap-12 flex-grow">
                <Link to="/community-support" className="w-full h-full ">
                    <button
                        style={{ backgroundImage: `url(${image})` }}
                        className="rounded-2xl relative overflow-hidden bg-cover bg-center px-6 py-3 text-white transition-all duration-300 ease-in-out group w-full h-full"
                    >
                        <span className="text-2xl font-bold rounded-2xl relative z-10 group-hover:opacity-75 transition-opacity duration-300">
                            Community Support
                        </span>
                        <span className="absolute inset-0 bg-black opacity-75 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></span>
                    </button>
                </Link>
                <Link to="/mentorship" className="w-full h-full ">
                    <button
                        style={{ backgroundImage: `url(${image})` }}
                        className="rounded-2xl relative overflow-hidden bg-cover bg-center px-6 py-3 text-white transition-all duration-300 ease-in-out group w-full h-full"
                    >
                        <span className="text-2xl font-bold rounded-2xl relative z-10 group-hover:opacity-75 transition-opacity duration-300">
                            Mentorship
                        </span>
                        <span className="absolute inset-0 bg-black opacity-75 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></span>
                    </button>
                </Link>
                <Link to="/business-sections" className="w-full h-full  ">
                    <button
                        style={{ backgroundImage: `url(${image})` }}
                        className="text-2xl font-bold rounded-2xl relative overflow-hidden bg-cover bg-center px-6 py-3 text-white transition-all duration-300 ease-in-out group w-full h-full"
                    >
                        <span className="rounded-2xl relative z-10 group-hover:opacity-75 transition-opacity duration-300">
                            Business Sections
                        </span>
                        <span className="absolute inset-0 bg-black opacity-75 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></span>
                    </button>
                </Link>
                <Link to="/courses" className="w-full h-full ">
                    <button
                        style={{ backgroundImage: `url(${image})` }}
                        className="rounded-2xl relative overflow-hidden bg-cover bg-center px-6 py-3 text-white transition-all duration-300 ease-in-out group w-full h-full"
                    >
                        <span className="text-2xl font-bold relative z-10 group-hover:opacity-75 transition-opacity duration-300">
                            Courses
                        </span>
                        <span className="absolute inset-0 bg-black opacity-75 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></span>
                    </button>
                </Link>
                <Link to="/mentorship" className="w-full h-full ">
                    <button
                        style={{ backgroundImage: `url(${image})` }}
                        className="rounded-2xl relative overflow-hidden bg-cover bg-center px-6 py-3 text-white transition-all duration-300 ease-in-out group w-full h-full"
                    >
                        <span className="text-2xl font-bold relative z-10 group-hover:opacity-75 transition-opacity duration-300">
                            Button Text
                        </span>
                        <span className="absolute inset-0 bg-black opacity-75 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></span>
                    </button>
                </Link>
                <Link to="/mentorship" className="w-full h-full">
                    <button
                        style={{ backgroundImage: `url(${image})` }}
                        className="rounded-2xl relative overflow-hidden bg-cover bg-center px-6 py-3 text-white transition-all duration-300 ease-in-out group w-full h-full"
                    >
                        <span className="text-2xl font-bold relative z-10 group-hover:opacity-75 transition-opacity duration-300">
                            Button Text
                        </span>
                        <span className="absolute inset-0 bg-black opacity-75 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></span>
                    </button>
                </Link>
            </div>
            <button className="fixed left-3 bottom-32 bg-white p-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                <MessageSquare />
            </button>
        </div>
    );
};

export default Home;
