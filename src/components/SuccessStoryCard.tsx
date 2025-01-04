import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import image from "../assets/in-c869-p03-1280px_0.jpg"
import { Button } from "./ui/button"

const SuccessStoryCard = () => {
    return (
        <Card className="bg-black text-white border-none">
            <CardHeader>
                <CardTitle>Shreya Gupta</CardTitle>
                <CardDescription>Mahila Dairy</CardDescription>
            </CardHeader>
            <CardContent className="flex relative">
                <img src={image} className="max-w-96" alt="" />
                <div className="p-2" >
                    <p className="pt-4" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias veniam nesciunt voluptates dolor beatae culpa ullam tempore officia distinctio maiores in itaque aspernatur magnam doloremque esse eum, nisi quaerat eaque sint. Excepturi officiis animi unde obcaecati dignissimos, porro, reprehenderit expedita eius enim tenetur commodi quas, fuga rem eligendi! Nam, ipsum?</p>
                    <p className="text-gray-500 pt-4 " >#independent-woman #DairyNirmaan</p>
                    <Button
                        className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                    >
                        Read More
                    </Button>
                </div>
            </CardContent>
        </Card>

    )
}

export default SuccessStoryCard