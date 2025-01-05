import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PlusCircle } from 'lucide-react'

export default function CreateCourse() {
    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        duration: '',
        level: '',
        instructor: '',
        price: '',
        sections: [{ title: '', lectures: [{ title: '', videoUrl: '' }] }],
        quizzes: [{ title: '', questions: [{ question: '', options: ['', '', '', ''], correctAnswer: '' }] }]
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setCourseData(prev => ({ ...prev, [name]: value }))
    }

    const handleSectionChange = (index: number, field: string, value: string) => {
        const newSections = [...courseData.sections]
        newSections[index] = { ...newSections[index], [field]: value }
        setCourseData(prev => ({ ...prev, sections: newSections }))
    }

    const handleLectureChange = (sectionIndex: number, lectureIndex: number, field: string, value: string) => {
        const newSections = [...courseData.sections]
        newSections[sectionIndex].lectures[lectureIndex] = { ...newSections[sectionIndex].lectures[lectureIndex], [field]: value }
        setCourseData(prev => ({ ...prev, sections: newSections }))
    }

    const handleQuizChange = (quizIndex: number, field: string, value: string) => {
        const newQuizzes = [...courseData.quizzes]
        newQuizzes[quizIndex] = { ...newQuizzes[quizIndex], [field]: value }
        setCourseData(prev => ({ ...prev, quizzes: newQuizzes }))
    }

    const handleQuestionChange = (quizIndex: number, questionIndex: number, field: string, value: string) => {
        const newQuizzes = [...courseData.quizzes]
        newQuizzes[quizIndex].questions[questionIndex] = { ...newQuizzes[quizIndex].questions[questionIndex], [field]: value }
        setCourseData(prev => ({ ...prev, quizzes: newQuizzes }))
    }

    const handleOptionChange = (quizIndex: number, questionIndex: number, optionIndex: number, value: string) => {
        const newQuizzes = [...courseData.quizzes]
        newQuizzes[quizIndex].questions[questionIndex].options[optionIndex] = value
        setCourseData(prev => ({ ...prev, quizzes: newQuizzes }))
    }

    const addSection = () => {
        setCourseData(prev => ({
            ...prev,
            sections: [...prev.sections, { title: '', lectures: [{ title: '', videoUrl: '' }] }]
        }))
    }

    const addLecture = (sectionIndex: number) => {
        const newSections = [...courseData.sections]
        newSections[sectionIndex].lectures.push({ title: '', videoUrl: '' })
        setCourseData(prev => ({ ...prev, sections: newSections }))
    }

    const addQuiz = () => {
        setCourseData(prev => ({
            ...prev,
            quizzes: [...prev.quizzes, { title: '', questions: [{ question: '', options: ['', '', '', ''], correctAnswer: '' }] }]
        }))
    }

    const addQuestion = (quizIndex: number) => {
        const newQuizzes = [...courseData.quizzes]
        newQuizzes[quizIndex].questions.push({ question: '', options: ['', '', '', ''], correctAnswer: '' })
        setCourseData(prev => ({ ...prev, quizzes: newQuizzes }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // In a real application, you would send this data to your backend API
        console.log("Course data submitted:", courseData)
        alert("Course created successfully!")
    }

    return (
        <div className="container mx-auto px-4 py-8 bg-black text-white ">
            <h1 className="text-3xl font-bold mb-8">Create a New Course</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <Label htmlFor="title">Course Title</Label>
                    <Input
                        id="title"
                        name="title"
                        value={courseData.title}
                        onChange={handleInputChange}
                        required
                        className='bg-gray-800 border-none '
                    />
                </div>
                <div>
                    <Label htmlFor="description">Course Description</Label>
                    <Textarea
                        id="description"
                        name="description"
                        value={courseData.description}
                        onChange={handleInputChange}
                        className='bg-gray-800 border-none'
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="duration">Duration</Label>
                    <Input
                        id="duration"
                        name="duration"
                        value={courseData.duration}
                        onChange={handleInputChange}
                        className='bg-gray-800 border-none'
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="level">Level</Label>
                    <Input
                        id="level"
                        name="level"
                        value={courseData.level}
                        onChange={handleInputChange}
                        className='bg-gray-800 border-none'
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="instructor">Instructor Name</Label>
                    <Input
                        id="instructor"
                        name="instructor"
                        value={courseData.instructor}
                        onChange={handleInputChange}
                        className='bg-gray-800 border-none'
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="price">Price (in ₹)</Label>
                    <Input
                        id="price"
                        name="price"
                        type="number"
                        value={courseData.price}
                        onChange={handleInputChange}
                        className='bg-gray-800 border-none'
                        required
                    />
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Course Sections</h2>
                    {courseData.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-6 p-4 border rounded">
                            <Label htmlFor={`section-${sectionIndex}`}>Section Title</Label>
                            <Input
                                id={`section-${sectionIndex}`}
                                value={section.title}
                                onChange={(e) => handleSectionChange(sectionIndex, 'title', e.target.value)}
                                className='bg-gray-800 border-none'
                                required
                            />
                            <h3 className="text-xl font-semibold mt-4 mb-2">Lectures</h3>
                            {section.lectures.map((lecture, lectureIndex) => (
                                <div key={lectureIndex} className="mb-4">
                                    <Label htmlFor={`lecture-${sectionIndex}-${lectureIndex}`}>Lecture Title</Label>
                                    <Input
                                        id={`lecture-${sectionIndex}-${lectureIndex}`}
                                        value={lecture.title}
                                        onChange={(e) => handleLectureChange(sectionIndex, lectureIndex, 'title', e.target.value)}
                                        className='bg-gray-800 border-none'
                                        required
                                    />
                                    <Label htmlFor={`video-${sectionIndex}-${lectureIndex}`}>Video URL</Label>
                                    <Input
                                        id={`video-${sectionIndex}-${lectureIndex}`}
                                        value={lecture.videoUrl}
                                        onChange={(e) => handleLectureChange(sectionIndex, lectureIndex, 'videoUrl', e.target.value)}
                                        className='bg-gray-800 border-none'
                                        required
                                    />
                                </div>
                            ))}
                            <Button type="button" onClick={() => addLecture(sectionIndex)} className="mt-2 bg-gray-600 hover:bg-gray-800">
                                <PlusCircle className="w-4 h-4 mr-2" />
                                Add Lecture
                            </Button>
                        </div>
                    ))}
                    <Button type="button" onClick={addSection} className="mt-4 bg-gray-600 hover:bg-gray-800">
                        <PlusCircle className="w-4 h-4 mr-2" />
                        Add Section
                    </Button>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Quizzes</h2>
                    {courseData.quizzes.map((quiz, quizIndex) => (
                        <div key={quizIndex} className="mb-6 p-4 border rounded">
                            <Label htmlFor={`quiz-${quizIndex}`}>Quiz Title</Label>
                            <Input
                                id={`quiz-${quizIndex}`}
                                value={quiz.title}
                                onChange={(e) => handleQuizChange(quizIndex, 'title', e.target.value)}
                                className='bg-gray-800 border-none'
                                required
                            />
                            <h3 className="text-xl font-semibold mt-4 mb-2">Questions</h3>
                            {quiz.questions.map((question, questionIndex) => (
                                <div key={questionIndex} className="mb-4 p-4 border rounded">
                                    <Label htmlFor={`question-${quizIndex}-${questionIndex}`}>Question</Label>
                                    <Input
                                        id={`question-${quizIndex}-${questionIndex}`}
                                        value={question.question}
                                        onChange={(e) => handleQuestionChange(quizIndex, questionIndex, 'question', e.target.value)}
                                        className='bg-gray-800 border-none'
                                        required
                                    />
                                    <div className="mt-2">
                                        <Label>Options</Label>
                                        {question.options.map((option, optionIndex) => (
                                            <Input
                                                key={optionIndex}
                                                value={option}
                                                onChange={(e) => handleOptionChange(quizIndex, questionIndex, optionIndex, e.target.value)}
                                                className="mt-1 bg-gray-800 border-none "
                                                placeholder={`${optionIndex + 1} :`}
                                                required
                                            />
                                        ))}
                                    </div>
                                    <Label htmlFor={`correct-answer-${quizIndex}-${questionIndex}`}>Correct Answer</Label>
                                    <Input
                                        id={`correct-answer-${quizIndex}-${questionIndex}`}
                                        value={question.correctAnswer}
                                        className='bg-gray-800 border-none'
                                        onChange={(e) => handleQuestionChange(quizIndex, questionIndex, 'correctAnswer', e.target.value)}
                                        required
                                    />
                                </div>
                            ))}
                            <Button type="button" onClick={() => addQuestion(quizIndex)} className="mt-2 bg-gray-600 hover:bg-gray-800">
                                <PlusCircle className="w-4 h-4 mr-2" />
                                Add Question
                            </Button>
                        </div>
                    ))}
                    <Button type="button" onClick={addQuiz} className="mt-4 bg-gray-600 hover:bg-gray-800">
                        <PlusCircle className="w-4 h-4 mr-2" />
                        Add Quiz
                    </Button>
                </div>

                <Button type="submit" className='bg-gray-600 hover:bg-gray-800' >Create Course</Button>
            </form>
        </div>
    )
}

