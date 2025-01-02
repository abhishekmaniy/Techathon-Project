import { Link } from "react-router-dom";
import features from "../lib/features";
import image from "./../assets/in-c869-p03-1280px_0.jpg";
import FeaturesCard from "./FeaturesCard";

const Hero = () => {
    return (
        <>
            <div className="flex items-center justify-center flex-grow bg-black-100">
                <img
                    src={image}
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative pt-52 text-white z-10 text-center px-4">
                    <h1 className="text-4xl font-bold mb-6">
                        Empowering Rural Women to Build a Better Tomorrow
                    </h1>
                    <p className="text-lg mb-8">
                        A platform where dreams meet opportunities: get inspired by success stories, guided by mentors, and supported through resources to achieve your goals.
                    </p>
                    <Link to="/home" className="text-2xl font-bold py-3 px-6 rounded-md bg-black hover:bg-white hover:text-black transition-colors duration-300">
                        Get Started
                    </Link>
                </div>
            </div>

            <div className="bg-black pt-80  py-12 mt-0">
                <div className="container mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {features.map((feature) => (
                        <FeaturesCard key={feature.title} feature={feature} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Hero;
