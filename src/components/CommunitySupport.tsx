import CommunityCard from "./cards/CommunityCard";
import SearchBar from "./SearchBar";
import communities from "../lib/community";
import { SeparatorHorizontal } from "lucide-react";

const CommunitySupport = () => {
    return (
        <div className="bg-gray-800 p-4 flex-grow">
            <h1 className="text-blue-600 text-4xl text-center font-bold pb-4" >Community Support</h1>
            <p className="text-white text-xl text-center pb-4">Connect with mentors in your field, gain industry insights, and fast-track your career or learning journey.</p>
            <SearchBar />
            <div className="flex flex-col">
                {communities.map((community) => (
                    <>
                        <SeparatorHorizontal />
                        <CommunityCard key={community.id} community={community} />
                        <SeparatorHorizontal />
                    </>
                ))}
            </div>
        </div>
    );
};

export default CommunitySupport;
