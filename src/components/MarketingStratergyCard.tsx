import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const MarketingStratergyCard = () => {
    return (
        <Card className="bg-gray-800 border-none " >
            <CardHeader className="text-blue-500">
                <CardTitle>Social Media Engagement Plan</CardTitle>
                <CardDescription>Social Nirmaan</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300" >
                <p><strong>Target Audience:</strong> Women entrepreneurs in rural areas aged 25-40.</p>
                <p><strong>Objective:</strong> Increase product visibility and drive local sales.</p>
                <p><strong>Estimated Budget:</strong> $500 - $2,000</p>
            </CardContent>

        </Card>

    )
}

export default MarketingStratergyCard