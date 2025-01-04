const teamMembers = [
    { id: 1, name: "John Doe", role: "CEO & Founder", image: "/team/john.jpg" },
    { id: 2, name: "Jane Smith", role: "CTO", image: "/team/jane.jpg" },
    { id: 3, name: "Sam Lee", role: "Product Manager", image: "/team/sam.jpg" },
];

const stats = [
    { id: 1, label: "Users Served", value: "10K+" },
    { id: 2, label: "Projects Completed", value: "500+" },
    { id: 3, label: "Countries Reached", value: "50+" },
];
import image from "../assets/in-c869-p03-1280px_0.jpg"



const AboutUs = () => {
    return (
        <>
            <div className="bg-gray-800 p-4 flex-grow">
                <h1 className="text-blue-600 text-4xl text-center font-bold pb-4" >About Us</h1>
                <p className="text-white text-xl text-center pb-4">Discover who we are, what we do, and why we do it.</p>
            </div>
            <div className="bg-gray-800 p-6">
                <section className="mt-12 p-6">
                    <h2 className="text-3xl font-bold text-white text-center">Our Story</h2>
                    <div className="mt-6 space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 bg-blue-600 font-bold text-white flex items-center justify-center rounded-full">
                                1
                            </div>
                            <p className="text-white">
                                Founded in 2020, we started with a vision to revolutionize woman empowerment.
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 bg-blue-600 font-bold text-white flex items-center justify-center rounded-full">
                                2
                            </div>
                            <p className="text-white">
                                In 2022, we expanded to serve a global audience, making an impact across rural areas.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission & Values */}
                <section className="mt-12 p-6 bg-black">
                    <h2 className="text-3xl font-bold pb-5 text-gray-300 text-center">Our Mission & Values</h2>
                    <div className="mt-6 pb-6 grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-blue-600">Innovation</h3>
                            <p className="text-gray-300 pt-4">We drive progress through creative solutions.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-blue-600">Integrity</h3>
                            <p className="text-gray-300 pt-4">We act with honesty and transparency.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-blue-600">Collaboration</h3>
                            <p className="text-gray-300 pt-4">We achieve more by working together.</p>
                        </div>
                    </div>
                </section>

                <section className="mt-12 p-6">
                    <h2 className="text-3xl font-bold text-blue-600 text-center">Meet the Team</h2>
                    <div className="mt-6 grid grid-cols-3 gap-6">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="text-center">
                                <img
                                    src={image}
                                    alt={member.name}
                                    className="mb-4 h-32 w-32 mx-auto rounded-full"
                                />
                                <h3 className="text-lg mb-1 font-bold text-white">{member.name}</h3>
                                <p className="text-sm text-white">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Impact Metrics */}
                <section className="mt-12 p-6 bg-black">
                    <h2 className="text-3xl font-bold mb-3 text-white text-center">Our Impact</h2>
                    <div className="mt-6 grid grid-cols-3 gap-6 text-center">
                        {stats.map((stat) => (
                            <div key={stat.id}>
                                <h3 className="text-2xl font-bold text-blue-600">{stat.value}</h3>
                                <p className="text-white mt-3">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default AboutUs