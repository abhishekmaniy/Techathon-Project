import SearchBar from "./SearchBar"

const Courses = () => {
  return (
    <div className="bg-gray-800 p-4 flex-grow">
      <h1 className="text-blue-600 text-4xl text-center font-bold pb-4" >Courses</h1>
      <p className="text-white text-xl text-center pb-4">Learn new skills, advance your career, and achieve your goals with our curated selection of courses.</p>
      <SearchBar />

    </div>
  )
}

export default Courses