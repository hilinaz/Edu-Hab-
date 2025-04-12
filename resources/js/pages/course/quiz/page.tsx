import { useState } from "react"
import { CheckCircle2, ChevronLeft, ChevronRight, HelpCircle, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { BreadcrumbItem, Question } from "@/types"
import AppLayout from "@/layouts/app-layout"
import { Head } from "@inertiajs/react"



// Sample quiz questions
const quizQuestions: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Which of the following is a JavaScript framework?",
    options: ["Java", "Python", "React", "HTML"],
    correctAnswer: "React",
    explanation: "React is a JavaScript library for building user interfaces, often referred to as a framework.",
  },
  {
    id: 2,
    type: "true-false",
    question: "CSS stands for Cascading Style Sheets.",
    correctAnswer: true,
    explanation:
      "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML.",
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Which of the following is used for version control?",
    options: ["Docker", "Git", "Kubernetes", "Jenkins"],
    correctAnswer: "Git",
    explanation:
      "Git is a distributed version control system for tracking changes in source code during software development.",
  },
  {
    id: 4,
    type: "text-input",
    question: "What HTML tag is used to create a hyperlink?",
    correctAnswer: "a",
    explanation: "The <a> tag defines a hyperlink, which is used to link from one page to another.",
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Which of these is NOT a CSS preprocessor?",
    options: ["SASS", "LESS", "SCSS", "JAVA"],
    correctAnswer: "JAVA",
    explanation:
      "JAVA is a programming language, not a CSS preprocessor. SASS, LESS, and SCSS are all CSS preprocessors.",
  },
  {
    id: 6,
    type: "true-false",
    question: "HTTP stands for HyperText Transfer Protocol.",
    correctAnswer: true,
    explanation: "HTTP (HyperText Transfer Protocol) is the foundation of data communication for the World Wide Web.",
  },
  {
    id: 7,
    type: "text-input",
    question: "What property is used to change the text color in CSS?",
    correctAnswer: "color",
    explanation: "The 'color' property in CSS is used to set the color of text.",
  },
]

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string | boolean>>({})
  const [submitted, setSubmitted] = useState(false)
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({})

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const totalQuestions = quizQuestions.length
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100

  // Handle answer changes
  const handleAnswerChange = (value: string | boolean) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: value,
    })
  }

  // Navigate to next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  // Navigate to previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  // Submit quiz
  const handleSubmit = () => {
    setSubmitted(true)
  }

  // Toggle explanation visibility
  const toggleExplanation = (questionId: number) => {
    setShowExplanation({
      ...showExplanation,
      [questionId]: !showExplanation[questionId],
    })
  }

  // Calculate score
  const calculateScore = () => {
    let correctCount = 0
    quizQuestions.forEach((question) => {
      const userAnswer = answers[question.id]
      if (userAnswer !== undefined) {
        // For text input, do case-insensitive comparison
        if (question.type === "text-input") {
          if (
            typeof userAnswer === "string" &&
            typeof question.correctAnswer === "string" &&
            userAnswer.toLowerCase() === question.correctAnswer.toLowerCase()
          ) {
            correctCount++
          }
        } else if (userAnswer === question.correctAnswer) {
          correctCount++
        }
      }
    })
    return {
      score: correctCount,
      total: totalQuestions,
      percentage: Math.round((correctCount / totalQuestions) * 100),
    }
  }

  // Check if current question is answered
  const isCurrentQuestionAnswered = answers[currentQuestion.id] !== undefined

  // Check if all questions are answered
  const areAllQuestionsAnswered = quizQuestions.every((q) => answers[q.id] !== undefined)

  // Get result data
  const resultData = submitted ? calculateScore() : null

  // Render question based on type
  const renderQuestion = () => {
    const question = currentQuestion
    const userAnswer = answers[question.id]
    const isCorrect = submitted && userAnswer === question.correctAnswer
    const isIncorrect = submitted && userAnswer !== undefined && userAnswer !== question.correctAnswer

    switch (question.type) {
      case "multiple-choice":
        return (
          <div className="space-y-4">
            <RadioGroup value={userAnswer as string} onValueChange={handleAnswerChange} disabled={submitted}>
              {question.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option}
                    id={`option-${index}`}
                    className={cn(
                      submitted && option === question.correctAnswer && "border-green-500 text-green-500",
                      submitted &&
                        userAnswer === option &&
                        option !== question.correctAnswer &&
                        "border-red-500 text-red-500",
                    )}
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className={cn(
                      "cursor-pointer",
                      submitted && option === question.correctAnswer && "text-green-500 font-medium",
                      submitted &&
                        userAnswer === option &&
                        option !== question.correctAnswer &&
                        "text-red-500 font-medium",
                    )}
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case "true-false":
        return (
          <div className="space-y-4">
            <RadioGroup
              value={userAnswer !== undefined ? userAnswer.toString() : ""}
              onValueChange={(value) => handleAnswerChange(value === "true")}
              disabled={submitted}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="true"
                  id="true"
                  className={cn(
                    submitted && question.correctAnswer === true && "border-green-500 text-green-500",
                    submitted &&
                      userAnswer === true &&
                      question.correctAnswer !== true &&
                      "border-red-500 text-red-500",
                  )}
                />
                <Label
                  htmlFor="true"
                  className={cn(
                    "cursor-pointer",
                    submitted && question.correctAnswer === true && "text-green-500 font-medium",
                    submitted && userAnswer === true && question.correctAnswer !== true && "text-red-500 font-medium",
                  )}
                >
                  True
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="false"
                  id="false"
                  className={cn(
                    submitted && question.correctAnswer === false && "border-green-500 text-green-500",
                    submitted &&
                      userAnswer === false &&
                      question.correctAnswer !== false &&
                      "border-red-500 text-red-500",
                  )}
                />
                <Label
                  htmlFor="false"
                  className={cn(
                    "cursor-pointer",
                    submitted && question.correctAnswer === false && "text-green-500 font-medium",
                    submitted && userAnswer === false && question.correctAnswer !== false && "text-red-500 font-medium",
                  )}
                >
                  False
                </Label>
              </div>
            </RadioGroup>
          </div>
        )

      case "text-input":
        return (
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Type your answer here"
              value={(userAnswer as string) || ""}
              onChange={(e) => handleAnswerChange(e.target.value)}
              disabled={submitted}
              className={cn(
                isCorrect && "border-green-500 text-green-500",
                isIncorrect && "border-red-500 text-red-500",
              )}
            />
            {submitted && (
              <div className="text-sm font-medium">
                {isCorrect ? (
                  <span className="text-green-500">Correct!</span>
                ) : (
                  <div className="text-red-500">
                    <span>Incorrect. </span>
                    <span className="text-muted-foreground">
                      The correct answer is:{" "}
                      <span className="font-medium text-green-500">{question.correctAnswer as string}</span>
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        )

      default:
        return null
    }
  }

  // If quiz is submitted and we're showing results
  if (submitted && resultData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Quiz Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="text-6xl font-bold">{resultData.percentage}%</div>
            <p className="text-xl">
              You scored {resultData.score} out of {resultData.total}
            </p>
            <div
              className={cn(
                "mt-2 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
                resultData.percentage >= 70 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700",
              )}
            >
              {resultData.percentage >= 70 ? "Passed" : "Failed"}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Question Review</h3>
            {quizQuestions.map((question, index) => {
              const userAnswer = answers[question.id]
              const isCorrect =
                question.type === "text-input"
                  ? typeof userAnswer === "string" &&
                    typeof question.correctAnswer === "string" &&
                    userAnswer.toLowerCase() === question.correctAnswer.toLowerCase()
                  : userAnswer === question.correctAnswer

              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-2">
                      {isCorrect ? (
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                      ) : (
                        <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                      )}
                      <div>
                        <p className="font-medium">
                          {index + 1}. {question.question}
                        </p>
                        <div className="mt-1 text-sm">
                          <span className="text-muted-foreground">Your answer: </span>
                          <span className={isCorrect ? "text-green-500" : "text-red-500"}>
                            {userAnswer === undefined
                              ? "Not answered"
                              : userAnswer === true
                                ? "True"
                                : userAnswer === false
                                  ? "False"
                                  : (userAnswer as string)}
                          </span>
                        </div>
                        {!isCorrect && (
                          <div className="mt-1 text-sm">
                            <span className="text-muted-foreground">Correct answer: </span>
                            <span className="text-green-500">
                              {question.correctAnswer === true
                                ? "True"
                                : question.correctAnswer === false
                                  ? "False"
                                  : (question.correctAnswer as string)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExplanation(question.id)}
                      className="ml-2 h-8 w-8 rounded-full p-0"
                    >
                      <HelpCircle className="h-4 w-4" />
                      <span className="sr-only">Show explanation</span>
                    </Button>
                  </div>

                  {showExplanation[question.id] && question.explanation && (
                    <div className="ml-7 rounded-md bg-muted p-3 text-sm">
                      <p className="font-medium">Explanation:</p>
                      <p className="text-muted-foreground">{question.explanation}</p>
                    </div>
                  )}

                  {index < quizQuestions.length - 1 && <Separator className="my-2" />}
                </div>
              )
            })}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={() => {
              setSubmitted(false)
              setAnswers({})
              setCurrentQuestionIndex(0)
              setShowExplanation({})
            }}
          >
            Retake Quiz
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </CardTitle>
          <div className="text-sm text-muted-foreground">
            {Object.keys(answers).length} of {totalQuestions} answered
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">{currentQuestion.question}</h2>
          <div className="mt-1 text-sm text-muted-foreground">
            {currentQuestion.type === "multiple-choice" && "Select one option"}
            {currentQuestion.type === "true-false" && "Select true or false"}
            {currentQuestion.type === "text-input" && "Type your answer"}
          </div>
        </div>

        {renderQuestion()}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>

        <div className="flex gap-2">
          {currentQuestionIndex === totalQuestions - 1 ? (
            <Button onClick={handleSubmit} disabled={!areAllQuestionsAnswered}>
              Submit Quiz
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} disabled={!isCurrentQuestionAnswered}>
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Course',
        href: '/teacher/dashboard',
    },
];

export default function QuizPage() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Course" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-25 pt-4">
                <h1>Create a new course by filling all the required details</h1>
                <Quiz />
                {/* <CourseForm /> */}
            </div>
        </AppLayout>
    );
}
