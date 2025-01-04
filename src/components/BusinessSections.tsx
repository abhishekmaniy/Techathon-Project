import { Album, CableCar, ChartCandlestick, FileUser } from "lucide-react"
import FundOppertunity from "./FundOppertunity"
import IdeaSubmitForm from "./IdeaSubmitForm"
import Resources from "./Resources"
import SuccessStory from "./SuccessStory"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

const BusinessSections = () => {
  return (
    <div className="bg-gray-800 p-4 flex-grow">
      <h1 className="text-blue-600 text-4xl text-center font-bold pb-4" >Bussiness Section</h1>
      <p className="text-white text-xl text-center pb-4">Join a community of entrepreneurs, get inspired, and grow your business.</p>

      <Tabs defaultValue="success-story" className=" bg-gray-800 text-white flex flex-col justify-start">
        <TabsList className="bg-gray-800 text-white flex justify-start">
          <TabsTrigger className="flex gap-2 items-center border-gray-400  border-2 m-2" value="success-story">Success Story <Album  /> </TabsTrigger>
          <TabsTrigger className="flex gap-2 items-center border-gray-400 border-2 m-2" value="resources">Resources <CableCar /></TabsTrigger>
          <TabsTrigger className="flex gap-2 items-center border-gray-400 border-2 m-2" value="submit-idea">Submit Idea <FileUser /> </TabsTrigger>
          <TabsTrigger className="flex gap-2 items-center border-gray-400 border-2 m-2" value="funding-opp">Funding Opportunities <ChartCandlestick /> </TabsTrigger>
        </TabsList>
        <TabsContent className="bg-black" value="success-story">
          <SuccessStory />
        </TabsContent>
        <TabsContent value="resources">
          <Resources />
        </TabsContent>
        <TabsContent value="submit-idea">
          <IdeaSubmitForm />
        </TabsContent>
        <TabsContent value="funding-opp">
          <FundOppertunity />
        </TabsContent>
      </Tabs>


    </div>
  )
}

export default BusinessSections