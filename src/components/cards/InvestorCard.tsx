import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import image from "../../assets/in-c869-p03-1280px_0.jpg"
import { Badge } from "../ui/badge"

const InvestorCard = () => {
    return (
        <Card className="bg-gray-800 border-none" >
            <CardHeader>
                <CardTitle className="text-blue-500">Axita Mukharji</CardTitle>
                <CardDescription>co-founder of Dairy Nirmaan</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
                <img src={image} alt="" />
                <p className="mt-3"><strong className="font-bold">Focus</strong>: Tech startups and sustainable businesses</p>
                <p className="mt-1 flex"><strong className="font-bold">Area Of Expertise</strong>: <div className="" ><Badge>Business strategy</Badge> <Badge>Market scaling</Badge> <Badge>Product development</Badge> </div> </p>
            </CardContent>
        </Card>

    )
}

export default InvestorCard