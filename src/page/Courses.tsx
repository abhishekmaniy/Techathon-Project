import SearchBar from "@/components/SearchBar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

const courses = [
    {
        id: 1,
        title: "English for Beginners",
        description: "Learn basic English communication skills for everyday use. This course covers greetings, simple conversations, and essential vocabulary.",
        duration: "8 weeks",
        level: "Beginner",
        instructor: "Priya Sharma",
        enrollmentStatus: "Open",
        price: 500
    },
    {
        id: 2,
        title: "Starting a Small Business",
        description: "Discover how to start and run a successful small business. Topics include business planning, financial management, marketing, and customer service.",
        duration: "12 weeks",
        level: "Intermediate",
        instructor: "Anita Desai",
        enrollmentStatus: "Open",
        price: 1000
    },
    {
        id: 3,
        title: "Basic Computer Skills",
        description: "Learn essential computer skills including typing, using the internet, and basic office software. Perfect for those new to technology.",
        duration: "6 weeks",
        level: "Beginner",
        instructor: "Meera Patel",
        enrollmentStatus: "Open",
        price: 750
    }
]

const Courses = () => {
    return (
        <div className="bg-gray-800 p-4 flex-grow">
            <h1 className="text-blue-600 text-4xl text-center font-bold pb-4" >Courses</h1>
            <p className="text-white text-xl text-center pb-4">Learn new skills, advance your career, and achieve your goals with our curated selection of courses.</p>
            <SearchBar />
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 bg-black p-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <Card key={course.id} className="flex text-white bg-gray-800 border-none flex-col">
                            <CardHeader>
                                <CardTitle className="text-blue-500" >{course.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-gray-400 mb-4">{course.description}</p>
                                <ul className="text-sm">
                                    <li><strong>Duration:</strong> {course.duration}</li>
                                    <li><strong>Level:</strong> {course.level}</li>
                                    <li><strong>Instructor:</strong> {course.instructor}</li>
                                    <li><strong>Status:</strong> {course.enrollmentStatus}</li>
                                    <li><strong>Price:</strong> ₹{course.price}</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Link to={`/courses/${course.id}`} >
                                    <Button className="w-full bg-gray-700">View Course</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="mt-8">
                    <Link to="/create-course">
                        <Button>Create New Course</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Courses