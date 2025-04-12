import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, ExternalLink, PlayCircle } from "lucide-react"

const enrolledCourses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    instructor: "Jane Doe",
    progress: 75,
    lastAccessed: "2 days ago",
    thumbnail: "/placeholder.svg?height=100&width=200",
    category: "Programming",
    duration: "8 weeks",
    nextLesson: "CSS Flexbox and Grid",
  },
  {
    id: 2,
    title: "UX Design Fundamentals",
    instructor: "John Smith",
    progress: 45,
    lastAccessed: "Yesterday",
    thumbnail: "/placeholder.svg?height=100&width=200",
    category: "Design",
    duration: "6 weeks",
    nextLesson: "User Research Methods",
  },
  {
    id: 3,
    title: "Data Analysis with Python",
    instructor: "Maria Garcia",
    progress: 20,
    lastAccessed: "1 week ago",
    thumbnail: "/placeholder.svg?height=100&width=200",
    category: "Data Science",
    duration: "10 weeks",
    nextLesson: "Pandas DataFrame Operations",
  },
]

export function EnrolledCourses() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {enrolledCourses.map((course) => (
        <div key={course.id} className="group relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[140px] items-center justify-center rounded-md bg-muted">
            <img
              src={course.thumbnail || "/placeholder.svg"}
              alt={course.title}
              width={200}
              height={100}
              className="h-full w-full object-cover transition-all group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col space-y-1.5 p-2">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="px-2 py-1">
                {course.category}
              </Badge>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                {course.duration}
              </div>
            </div>
            <h3 className="font-semibold tracking-tight">{course.title}</h3>
            <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
            <div className="mt-2 flex flex-col space-y-1">
              <div className="flex justify-between text-xs">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              <span>Next: {course.nextLesson}</span>
            </div>
            <div className="mt-4 flex space-x-2">
              <Button className="flex-1">
                <PlayCircle className="mr-2 h-4 w-4" />
                Continue
              </Button>
              <Button variant="outline" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
