import { Users, MapPin, Calendar } from 'lucide-react';
import image from "../assets/in-c869-p03-1280px_0.jpg"

type CommunityType = {
    id: string;
    name: string;
    description: string;
    members: number;
    events: string;
    location: string;
    image: string;
};

type CommunityCardProps = {
    community: CommunityType; // Accepting community as a prop
};

const CommunityCard = ({ community }: CommunityCardProps) => {
    return (
        <div className='flex w-full overflow-hidden rounded-lg bg-gray-800 text-white shadow-lg transition-all hover:shadow-xl'>
            <div className='relative h-auto w-1/3 min-w-[200px]'>
                <img src={image} className='rounded-l-lg h-full bg-cover' alt={community.name} />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                    <h1 className="mb-3 text-3xl font-bold text-blue-400">{community.name}</h1>
                    <p className="mb-4 text-lg text-gray-300">
                        {community.description}
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-between text-sm text-gray-400">
                    <div className="mb-2 flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{community.location}</span>
                    </div>
                    <div className="mb-2 flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        <span>{community.members} Members</span>
                    </div>
                    <div className="mb-2 flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{community.events} Events/month</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityCard;
