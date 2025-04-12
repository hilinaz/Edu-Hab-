import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Star } from "lucide-react"

const availableCourses = [
  {
    id: 1,
    title: "Advanced JavaScript Concepts",
    instructor: "David Kim",
    description: "Master advanced JavaScript concepts including closures, prototypes, and async programming.",
    thumbnail: "/placeholder.svg?height=100&width=200",
    category: "Programming",
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 1245,
    price: "$49.99",
  },
  {
    id: 2,
    title: "Mobile App Development with React Native",
    instructor: "Sarah Williams",
    description: "Learn to build cross-platform mobile applications using React Native and JavaScript.",
    thumbnail: "/placeholder.svg?height=100&width=200",
    category: "Mobile Development",
    duration: "12 weeks",
    level: "Intermediate",
    rating: 4.7,
    students: 982,
    price: "$59.99",
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    instructor: "Michael Chen",
    description: "Introduction to machine learning algorithms and their practical applications.",
    thumbnail: "/placeholder.svg?height=100&width=200",
    category: "Data Science",
    duration: "8 weeks",
    level: "Beginner",
    rating: 4.9,
    students: 1876,
    price: "$69.99",
  },
  {
    id: 4,
    title: "Graphic Design Masterclass",
    instructor: "Emily Johnson",
    description: "Comprehensive guide to graphic design principles, tools, and techniques.",
    thumbnail: "/placeholder.svg?height=100&width=200",
    category: "Design",
    duration: "6 weeks",
    level: "All Levels",
    rating: 4.6,
    students: 2341,
    price: "$39.99",
  },
  {
    id: 5,
    title: "Business Analytics and Data Visualization",
    instructor: "Robert Taylor",
    description: "Learn to analyze business data and create compelling visualizations for decision making.",
    thumbnail: "/placeholder.svg?height=100&width=200",
    category: "Business",
    duration: "8 weeks",
    level: "Intermediate",
    rating: 4.5,
    students: 1123,
    price: "$54.99",
  },
  {
    id: 6,
    title: "Digital Marketing Strategy",
    instructor: "Lisa Anderson",
    description: "Develop comprehensive digital marketing strategies for businesses of all sizes.",
    thumbnail: "/placeholder.svg?height=100&width=200",
    category: "Marketing",
    duration: "6 weeks",
    level: "Beginner",
    rating: 4.7,
    students: 1567,
    price: "$44.99",
  },
]

export function AvailableCourses() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {availableCourses.map((course) => (
        <Card key={course.id} className="overflow-hidden">
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={course.thumbnail || "/placeholder.svg"}
              alt={course.title}
              className="h-full w-full object-cover transition-all hover:scale-105"
            />
          </div>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="px-2 py-1">
                {course.category}
              </Badge>
              <Badge variant="secondary" className="px-2 py-1">
                {course.level}
              </Badge>
            </div>
            <CardTitle className="line-clamp-1">{course.title}</CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Instructor: {course.instructor}</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>{course.rating}</span>
                <span className="text-muted-foreground">({course.students})</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                {course.duration}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-lg font-bold">{course.price}</div>
            <Button>Enroll Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
