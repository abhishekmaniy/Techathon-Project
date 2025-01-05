
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import PaymentButton from './PaymentButton'

const course = {
  id: 1,
  title: "English for Beginners",
  description: "Learn basic English communication skills for everyday use.",
  price: 500,
  lectures: [
    { id: 1, title: "Learn React ", videoUrl: "https://youtu.be/LDB4uaJ87e0?si=YINdjHEa5zxK-KDz" },
    { id: 2, title: "Learn Basic Next", videoUrl: "https://youtu.be/wm5gMKuwSYk?si=V4oQPXYGeomVGUvp" },
    { id: 3, title: "Learn TypeScript", videoUrl: "https://youtu.be/30LWjhZzg50?si=iDMIz0D8jRe7UWR9" },
  ],
  quizzes: [
    {
      id: 1,
      title: "Greetings Quiz",
      questions: [
        {
          id: 1,
          question: "How do you say 'Hello' in English?",
          options: ["Hola", "Bonjour", "Hello", "Namaste"],
          correctAnswer: "Hello"
        },
        {
          id: 2,
          question: "Which is a common goodbye phrase?",
          options: ["Good morning", "See you later", "How are you", "Nice to meet you"],
          correctAnswer: "See you later"
        }
      ]
    }
  ]
}

export default function CourseContent() {
  const [selectedLecture, setSelectedLecture] = useState(course.lectures[0])
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({})

  const handleQuizSubmit = () => {
    // In a real application, you would send the answers to the server for grading
    console.log("Quiz submitted:", quizAnswers)
    alert("Quiz submitted successfully!")
    setShowQuiz(false)
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-8 text-blue-500">{course.title}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full p-5 md:w-1/3 bg-gray-800">
          <h2 className="text-xl font-semibold mb-4 ">Lectures</h2>
          <ul className="space-y-2">
            {course.lectures.map((lecture) => (
              <li key={lecture.id}>
                <Button
                  key={lecture.id}
                  variant={selectedLecture?.id === lecture.id ? "secondary" : "ghost"}
                  className={`w-full text-left border-none ${selectedLecture?.id === lecture.id ? "text-black" : "text-white"
                    }`}
                  onClick={() => setSelectedLecture(lecture)}
                >
                  {lecture.title}
                </Button>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-4">Quizzes</h2>
          <ul className="space-y-2">
            {course.quizzes.map((quiz) => (
              <li key={quiz.id}>
                <Button
                  variant="outline"
                  className="w-full text-left bg-black border-none"
                  onClick={() => setShowQuiz(true)}
                >
                  {quiz.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-2/3">
          {!showQuiz ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">{selectedLecture.title}</h2>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/30LWjhZzg50?si=zRQ6eVSqcVuuqiB8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-500">{course.quizzes[0].title}</h2>
              {course.quizzes[0].questions.map((question) => (
                <div key={question.id} className="mb-6">
                  <p className="font-semibold mb-2">{question.question}</p>
                  {question.options.map((option, index) => (
                    <label key={index} className="block mb-2">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        onChange={(e) => setQuizAnswers({ ...quizAnswers, [question.id]: e.target.value })}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ))}
              <Button onClick={handleQuizSubmit}>Submit Quiz</Button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Enroll in this course</h2>
        <p className="mb-4">Price: ₹{course.price}</p>
        <PaymentButton price={course.price} />
      </div>
    </div>
  )
}

