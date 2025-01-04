import { Filter, Lightbulb, Search } from "lucide-react"
import { Button } from "./ui/button"

const SearchBar = () => {
    return (
        <div className='flex justify-between mb-3 w-full bg-gray-800 text-white rounded-md  ' >
            <div className="flex gap-2 w-96 items-center bg-black rounded-md justify-between p-2 pr-4" >
                <input type="text" className="bg-black w-full outline-none text-white rounded-md p-2" placeholder="Search Community Name" />
                <Search />
            </div>
            <div className="flex gap-3 ">
                <Button className="hover:bg-white hover:text-black" >Submit Idea <Lightbulb /></Button>

                <Button className="flex bg-black p-2 gap-2 rounded-md justify-center items-center " >Filter <Filter /> </Button>
            </div>
        </div>
    )
}

export default SearchBar