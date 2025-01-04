import { HandCoins, History, MapPin, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

const FundOppertunityCard = () => {
    return (
        <Card className="bg-gray-800" >
            <CardHeader>
                <CardTitle className="text-blue-500">Mahila Kalyan Yojna</CardTitle>
                <CardDescription>Agriculture</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300" >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione iste sequi nihil illo odit molestiae, inventore minus doloribus iure?</p>
                <p className="flex mt-3 gap-4" ><strong><MapPin /></strong>Online</p>
                <p className="flex mt-3 gap-4" ><strong ><HandCoins /></strong> 1000₹ funding</p>
                <p className="flex mt-3 gap-4" ><strong><History /></strong> 27/05/2025</p>

                <div className="flex justify-between items-center" >
                    <div className="flex" >
                        <Star /><Star /><Star /><Star /><Star />
                    </div>
                    <Button className="mt-3 " >View Details</Button>
                </div>
            </CardContent>
        </Card>

    )
}

export default FundOppertunityCard