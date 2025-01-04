import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import image from "../assets/in-c869-p03-1280px_0.jpg"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

const MentorCard = () => {
    return (

        <Card className="max-h-min bg-black border-none">
            <CardHeader>
                <CardTitle className="text-white">Abhishek Maniyar</CardTitle>
                <CardDescription>Software Engineer</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={image} className="rounded-md" alt="Mentor Profile" />
                <div className="text-white pt-3">
                    <p><strong>Experience:</strong> 5+ years in full-stack development.</p>
                    <p className="pt-3 flex gap-2" ><strong>Expertise:</strong> <span className="flex gap-3" ><Badge className="text-white" variant="outline">React</Badge><Badge className="text-white" variant="outline">Node.js</Badge><Badge className="text-white" variant="outline">Blockchain</Badge><Badge className="text-white" variant="outline">Cloud Computing</Badge></span></p>
                    <p className="pt-3" >
                        <strong>Bio:</strong> Passionate about mentoring aspiring developers,
                        with a strong background in building scalable applications
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <span className="text-gray-500">Slots: 10/20 Available</span>
                <Button className="outline hover:bg-white hover:text-black">
                    Take Mentorship
                </Button>
            </CardFooter>
        </Card>

    )
}

export default MentorCard