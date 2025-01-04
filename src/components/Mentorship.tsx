import MentorCard from "./MentorCard"
import SearchBar from "./SearchBar"

const Mentorship = () => {
  return (
    <div className="bg-gray-800 p-4 flex-grow">
      <h1 className="text-blue-600 text-4xl text-center font-bold pb-4" >Mentorship</h1>
      <p className="text-white text-xl text-center pb-4">Connect with mentors in your field, gain industry insights, and fast-track your career or learning journey.</p>
      <SearchBar />
      <div className="grid grid-cols-3 gap-4" >
        <MentorCard /><MentorCard /><MentorCard /><MentorCard /><MentorCard /><MentorCard /><MentorCard /><MentorCard /><MentorCard /><MentorCard />
      </div>
    </div>
  )
}

export default Mentorship