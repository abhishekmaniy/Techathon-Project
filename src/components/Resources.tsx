import { ChevronsDown } from "lucide-react"
import MarketingStratergyCard from "./cards/MarketingStratergyCard"
import SearchBar from "./SearchBar"
import { Separator } from "./ui/separator"
import InvestorCard from "./cards/InvestorCard"
import BusinessTemplateCard from "./cards/BusinessTemplateCard"

const Resources = () => {
    return (
        <div>
            <SearchBar />
            <div>
                <div className="bg-black p-5">
                    <h1 className="text-2xl font-bold">Business Templates</h1>
                    <Separator className="mt-4 " />
                    <div className="grid grid-cols-3 gap-5 p-5">
                        <BusinessTemplateCard />
                        <BusinessTemplateCard />
                        <BusinessTemplateCard />
                    </div>
                    <p className="text-center flex justify-center" >View More <ChevronsDown /> </p>
                </div>
                <Separator className="m-4 bg-gray-800 " />
                <div className="bg-black p-5" >
                    <h1 className="text-2xl font-bold">Investors</h1>
                    <Separator className="mt-4 " />

                    <div className="grid grid-cols-3 gap-5 p-5">
                        <InvestorCard />
                        <InvestorCard />
                        <InvestorCard />
                    </div>
                    <p className="text-center flex justify-center" >View More <ChevronsDown /> </p>
                </div>
                <Separator className="m-4 bg-gray-800 " />

                <div className="bg-black p-5" >
                    <h1 className="text-2xl font-bold">Marketing Stratergies</h1>
                    <Separator className="mt-4 " />
                    <div className="grid grid-cols-3 gap-5 p-5" >
                        <MarketingStratergyCard />
                        <MarketingStratergyCard />
                        <MarketingStratergyCard />
                    </div>
                    <p className="text-center flex justify-center" >View More <ChevronsDown /> </p>
                </div>
            </div>
        </div>
    )
}

export default Resources