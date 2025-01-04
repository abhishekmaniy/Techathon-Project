import { ChevronsDown } from 'lucide-react'
import FundOppertunityCard from './FundOppertunityCard'
import SearchBar from './SearchBar'

const FundOppertunity = () => {
    return (
        <div className='bg-gray-800'>
            <SearchBar />
            <div className='grid mt- grid-cols-3 gap-5 p-5 bg-black' >
                <FundOppertunityCard />
                <FundOppertunityCard />
                <FundOppertunityCard />
            </div>
            <p className="text-center bg-black p-4 flex justify-center" >View More <ChevronsDown /> </p>
        </div>
    )
}

export default FundOppertunity