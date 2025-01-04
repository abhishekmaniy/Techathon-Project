import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import image from "../../assets/in-c869-p03-1280px_0.jpg"
import { Dot } from "lucide-react"

const BusinessTemplateCard = () => {
    return (
        <Card className="bg-gray-800 border-none" >
            <CardHeader>
                <CardTitle className="text-blue-500" >Nirali Dubey</CardTitle>
                <CardDescription>Dairy Nirmaan</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
                <img src={image} alt="" />
                <p className="mt-3 flex "><Dot /> How to Grove Dairy Business in City or in Rural areas.</p>
            </CardContent>
        </Card>

    )
}

export default BusinessTemplateCard