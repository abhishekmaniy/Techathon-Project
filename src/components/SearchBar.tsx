import { Filter, Search } from "lucide-react"

const SearchBar = () => {
    return (
        <div className='flex justify-between mb-3 w-full bg-gray-800 text-white rounded-md  ' >
            <div className="flex gap-2 w-96 items-center bg-black rounded-md justify-between p-2 pr-4" >
                <input type="text" className="bg-black w-full outline-none text-white rounded-md p-2" placeholder="Search Community Name" />
                <Search />
            </div>

            <button className="flex bg-black p-2 gap-2 rounded-md justify-center items-center " >Filter <Filter /> </button>
        </div>
    )
}

export default SearchBar