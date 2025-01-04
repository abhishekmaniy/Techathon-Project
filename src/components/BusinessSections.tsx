import SearchBar from "./SearchBar"

const BusinessSections = () => {
  return (
    <div className="bg-gray-800 p-4 flex-grow">
      <h1 className="text-blue-600 text-4xl text-center font-bold pb-4" >Bussiness Section</h1>
      <p className="text-white text-xl text-center pb-4">Join a community of entrepreneurs, get inspired, and grow your business.</p>
      <SearchBar />

    </div>
  )
}

export default BusinessSections