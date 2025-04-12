// import type { Metadata } from "next"
// import { DashboardHeader } from "@/components/dashboard-header"
// import { DashboardShell } from "@/components/dashboard-shell"

import { Link } from "@inertiajs/react"
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  File,
  Globe,
  Info,
  Play,
  PlayCircle,
  Star,
  User,
  Video,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"

import CourseForm from "@/components/course/course-form"
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from "react"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Course',
        href: '/teacher/dashboard',
    },
];


// Types
interface Lesson {
  id: string
  title: string
  type: "video" | "text" | "quiz"
  duration: string
  isCompleted?: boolean
}

interface Module {
  id: string
  title: string
  description: string
  lessons: Lesson[]
}

interface Course {
  id: string
  title: string
  description: string
  longDescription: string
  instructor: {
    name: string
    bio: string
    avatar: string
  }
  price: string
  thumbnail: string
  category: string
  level: string
  duration: string
  totalLessons: number
  totalHours: string
  rating: number
  reviews: number
  students: number
  lastUpdated: string
  language: string
  certificate: boolean
  isPublished: boolean
  modules: Module[]
  prerequisites: string[]
  objectives: string[]
  enrollmentStatus?: "enrolled" | "not-enrolled"
  progress?: number
}

// Sample course data
const sampleCourse: Course = {
  id: "course-1",
  title: "Advanced JavaScript: From Fundamentals to Mastery",
  description: "Master advanced JavaScript concepts and become a professional developer",
  longDescription:
    "This comprehensive course takes you from JavaScript fundamentals to advanced concepts like closures, prototypes, async programming, and modern ES6+ features. You'll build real-world projects and gain the skills needed for professional JavaScript development.",
  instructor: {
    name: "David Kim",
    bio: "Senior JavaScript Developer with 10+ years of experience. Previously worked at Google and Microsoft.",
    avatar: "",
  },
  price: "$59.99",
  thumbnail: "https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg",
  category: "Programming",
  level: "Intermediate",
  duration: "10 weeks",
  totalLessons: 48,
  totalHours: "24 hours",
  rating: 4.8,
  reviews: 1245,
  students: 8765,
  lastUpdated: "2023-03-15",
  language: "English",
  certificate: true,
  isPublished: true,
  prerequisites: [
    "Basic JavaScript knowledge",
    "Understanding of HTML and CSS",
    "Familiarity with web development concepts",
  ],
  objectives: [
    "Master JavaScript closures, prototypes, and the 'this' keyword",
    "Build real-world applications using modern JavaScript",
    "Understand asynchronous programming with Promises and async/await",
    "Learn advanced ES6+ features and best practices",
    "Implement design patterns and optimize JavaScript code",
  ],
  modules: [
    {
      id: "module-1",
      title: "JavaScript Fundamentals Refresher",
      description:
        "A quick review of JavaScript basics to ensure everyone has the foundation needed for advanced topics.",
      lessons: [
        {
          id: "lesson-1-1",
          title: "Variables, Data Types, and Operators",
          type: "video",
          duration: "25 min",
          isCompleted: true,
        },
        {
          id: "lesson-1-2",
          title: "Functions and Scope",
          type: "video",
          duration: "30 min",
          isCompleted: true,
        },
        {
          id: "lesson-1-3",
          title: "Arrays and Objects",
          type: "video",
          duration: "35 min",
          isCompleted: false,
        },
        {
          id: "lesson-1-4",
          title: "Fundamentals Quiz",
          type: "quiz",
          duration: "20 min",
          isCompleted: false,
        },
      ],
    },
    {
      id: "module-2",
      title: "Advanced JavaScript Concepts",
      description: "Dive deep into the advanced concepts that make JavaScript unique and powerful.",
      lessons: [
        {
          id: "lesson-2-1",
          title: "Closures and Lexical Scope",
          type: "video",
          duration: "40 min",
          isCompleted: false,
        },
        {
          id: "lesson-2-2",
          title: "Prototypes and Inheritance",
          type: "video",
          duration: "45 min",
          isCompleted: false,
        },
        {
          id: "lesson-2-3",
          title: "The 'this' Keyword and Execution Context",
          type: "video",
          duration: "35 min",
          isCompleted: false,
        },
        {
          id: "lesson-2-4",
          title: "Reading: Deep Dive into JavaScript Execution",
          type: "text",
          duration: "15 min",
          isCompleted: false,
        },
        {
          id: "lesson-2-5",
          title: "Advanced Concepts Quiz",
          type: "quiz",
          duration: "25 min",
          isCompleted: false,
        },
      ],
    },
    {
      id: "module-3",
      title: "Asynchronous JavaScript",
      description: "Learn how to handle asynchronous operations in JavaScript effectively.",
      lessons: [
        {
          id: "lesson-3-1",
          title: "Callbacks and the Event Loop",
          type: "video",
          duration: "30 min",
          isCompleted: false,
        },
        {
          id: "lesson-3-2",
          title: "Promises in Depth",
          type: "video",
          duration: "40 min",
          isCompleted: false,
        },
        {
          id: "lesson-3-3",
          title: "Async/Await Pattern",
          type: "video",
          duration: "35 min",
          isCompleted: false,
        },
        {
          id: "lesson-3-4",
          title: "Asynchronous JavaScript Quiz",
          type: "quiz",
          duration: "20 min",
          isCompleted: false,
        },
      ],
    },
    {
      id: "module-4",
      title: "Modern JavaScript (ES6+)",
      description: "Explore the modern features of JavaScript that make development more efficient.",
      lessons: [
        {
          id: "lesson-4-1",
          title: "Arrow Functions and Template Literals",
          type: "video",
          duration: "25 min",
          isCompleted: false,
        },
        {
          id: "lesson-4-2",
          title: "Destructuring and Spread/Rest Operators",
          type: "video",
          duration: "30 min",
          isCompleted: false,
        },
        {
          id: "lesson-4-3",
          title: "Modules and Import/Export",
          type: "video",
          duration: "35 min",
          isCompleted: false,
        },
        {
          id: "lesson-4-4",
          title: "ES6+ Features Quiz",
          type: "quiz",
          duration: "20 min",
          isCompleted: false,
        },
      ],
    },
  ],
  // This would be determined based on the user's enrollment status
  enrollmentStatus: "enrolled",
  progress: 15,
}

function CourseDetail({ courseId }: { courseId: string }) {
  // In a real application, you would fetch the course data based on the courseId
  const course = sampleCourse
  const [activeTab, setActiveTab] = useState("overview")

  // Calculate total completed lessons
  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0)
  const completedLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.filter((lesson) => lesson.isCompleted).length,
    0,
  )

  // Calculate total duration in minutes
  const totalMinutes = course.modules.reduce(
    (acc, module) =>
      acc +
      module.lessons.reduce((lessonAcc, lesson) => {
        const minutes = Number.parseInt(lesson.duration.split(" ")[0])
        return lessonAcc + (isNaN(minutes) ? 0 : minutes)
      }, 0),
    0,
  )

  // Format total duration
  const formatTotalDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours} hr ${mins} min`
  }

  const handleEnroll = () => {
    toast( `You have been enrolled in "${course.title}"`)
  }

  const handleContinue = () => {
    // Find the first incomplete lesson
    let nextLessonToWatch: { moduleIndex: number; lessonIndex: number } | null = null

    for (let i = 0; i < course.modules.length; i++) {
      const module = course.modules[i]
      for (let j = 0; j < module.lessons.length; j++) {
        if (!module.lessons[j].isCompleted) {
          nextLessonToWatch = { moduleIndex: i, lessonIndex: j }
          break
        }
      }
      if (nextLessonToWatch) break
    }

    if (nextLessonToWatch) {
      const module = course.modules[nextLessonToWatch.moduleIndex]
      const lesson = module.lessons[nextLessonToWatch.lessonIndex]
      toast(`Resuming with "${lesson.title}" in ${module.title}`)
    } else {
      toast("You have completed all lessons in this course!")
    }
  }

  return (
    <div className="container mx-auto py-6 max-w-7xl">
      <div className="mb-6">
        <Link href="/courses" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Course Header - Left Column (2/3 width on large screens) */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{course.description}</p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <Star className="mr-1 h-5 w-5 fill-amber-400 text-amber-400" />
              <span className="font-medium">{course.rating}</span>
              <span className="ml-1 text-muted-foreground">({course.reviews} reviews)</span>
            </div>
            <div className="flex items-center">
              <User className="mr-1 h-5 w-5 text-muted-foreground" />
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-5 w-5 text-muted-foreground" />
              <span>Last updated {course.lastUpdated}</span>
            </div>
          </div>

          <div className="mt-4 flex items-center">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
              <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-2">
              <p className="text-sm font-medium">Instructor: {course.instructor.name}</p>
            </div>
          </div>
        </div>


   {/* Course Content - Left Column (2/3 width on large screens) */}
   <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 pt-4">
              <div>
                <h3 className="text-xl font-semibold">About This Course</h3>
                <p className="mt-2 text-muted-foreground">{course.longDescription}</p>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold">What You'll Learn</h3>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {course.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold">Prerequisites</h3>
                <ul className="mt-4 space-y-2">
                  {course.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start">
                      <Info className="mr-2 h-5 w-5 text-blue-500" />
                      <span>{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="pt-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">Course Content</h3>
                <div className="text-sm text-muted-foreground">
                  {course.modules.length} modules • {totalLessons} lessons • {formatTotalDuration(totalMinutes)} total
                  length
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {course.modules.map((module, moduleIndex) => {
                  // Calculate module progress
                  const totalModuleLessons = module.lessons.length
                  const completedModuleLessons = module.lessons.filter((lesson) => lesson.isCompleted).length
                  const moduleProgress =
                    totalModuleLessons > 0 ? (completedModuleLessons / totalModuleLessons) * 100 : 0

                  // Calculate module duration
                  const moduleDuration = module.lessons.reduce((acc, lesson) => {
                    const minutes = Number.parseInt(lesson.duration.split(" ")[0])
                    return acc + (isNaN(minutes) ? 0 : minutes)
                  }, 0)

                  return (
                    <AccordionItem key={module.id} value={module.id}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex flex-1 items-center justify-between pr-4">
                          <div>
                            <span className="font-medium">
                              Module {moduleIndex + 1}: {module.title}
                            </span>
                            {course.enrollmentStatus === "enrolled" && (
                              <div className="mt-1 flex items-center text-xs text-muted-foreground">
                                <Progress value={moduleProgress} className="mr-2 h-1.5 w-20" />
                                <span>
                                  {completedModuleLessons}/{totalModuleLessons} completed
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {module.lessons.length} lessons • {formatTotalDuration(moduleDuration)}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="mt-2 text-sm text-muted-foreground">{module.description}</div>
                        <ul className="mt-4 space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li
                              key={lesson.id}
                              className={`flex items-center justify-between rounded-md p-2 ${
                                course.enrollmentStatus === "enrolled"
                                  ? "hover:bg-muted cursor-pointer"
                                  : "cursor-default"
                              }`}
                            >
                              <div className="flex items-center">
                                {lesson.type === "video" && <Video className="mr-2 h-4 w-4 text-blue-500" />}
                                {lesson.type === "text" && <File className="mr-2 h-4 w-4 text-green-500" />}
                                {lesson.type === "quiz" && <BookOpen className="mr-2 h-4 w-4 text-amber-500" />}
                                <span>
                                  {moduleIndex + 1}.{lessonIndex + 1} {lesson.title}
                                </span>
                                {lesson.isCompleted && <CheckCircle className="ml-2 h-4 w-4 text-green-500" />}
                              </div>
                              <div className="flex items-center">
                                {course.enrollmentStatus === "enrolled" && !lesson.isCompleted && (
                                  <Button variant="ghost" size="sm" className="mr-2 h-7 w-7 p-0">
                                    <Play className="h-4 w-4" />
                                    <span className="sr-only">Play</span>
                                  </Button>
                                )}
                                <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </TabsContent>

            <TabsContent value="instructor" className="pt-4">
              <div className="flex flex-col items-start sm:flex-row sm:items-center">
                <Avatar className="h-20 w-20 border">

                <AvatarImage src={course.instructor.avatar || "https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"} alt={course.instructor.name} /> 
    
                  <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="mt-4 sm:ml-6 sm:mt-0">
                  <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                  <p className="text-muted-foreground">Course Instructor</p>
                </div>
              </div>
              <div className="mt-6">
                <p>{course.instructor.bio}</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Course Card - Right Column (1/3 width on large screens) */}
        <div className="lg:row-start-1 lg:col-start-3">
          <Card className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={course.thumbnail || "/placeholder.svg"}
                alt={course.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=300&width=500"
                }}
              />
            </div>
            <CardContent className="p-6">
              <div className="mb-4">
                <p className="text-3xl font-bold">{course.price}</p>
              </div>

              {course.enrollmentStatus === "enrolled" ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Your progress</span>
                      <span>
                        {completedLessons}/{totalLessons} lessons
                      </span>
                    </div>
                    <Progress value={(completedLessons / totalLessons) * 100} className="h-2" />
                  </div>
                  <Button className="w-full" onClick={handleContinue}>
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Continue Learning
                  </Button>
                </div>
              ) : (
                <Button className="w-full" onClick={handleEnroll}>
                  Enroll Now
                </Button>
              )}

              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>{totalLessons} lessons</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>{formatTotalDuration(totalMinutes)}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <Info className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>{course.language}</span>
                  </div>
                </div>
                {course.certificate && (
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span>Certificate of completion</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

     
      </div>
    </div>
  )
}


export default function Course() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Course" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 lg:px-25">
                <h1>Create a new course by filling all the required details</h1>
                <CourseDetail courseId=""/>
            </div>
        </AppLayout>
    );
}
