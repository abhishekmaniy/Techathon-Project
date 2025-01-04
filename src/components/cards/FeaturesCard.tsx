import React from "react";

// Define the shape of the feature prop passed to the FeaturesCard component
interface Feature {
    title: string;
    description: string;
}

interface FeaturesCardProps {
    feature: Feature;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ feature }) => {
    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
        </div>
    );
};

export default FeaturesCard;
