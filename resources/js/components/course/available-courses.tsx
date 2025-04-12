import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Star, ChevronLeft, ChevronRight } from "lucide-react"

const availableCourses = [
  {
    id: 1,
    title: "Advanced JavaScript Concepts",
    instructor: "David Kim",
    description: "Master advanced JavaScript concepts including closures, prototypes, and async programming.",
    thumbnail: "https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg",
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
    thumbnail: "https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg",
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
    thumbnail: "https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg",
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
    thumbnail: "https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg",
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
    thumbnail: "https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg",
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
    thumbnail: "https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg",
    category: "Marketing",
    duration: "6 weeks",
    level: "Beginner",
    rating: 4.7,
    students: 1567,
    price: "$44.99",
  },
  {
    id: 7,
    title: "Web Development with Node.js",
    instructor: "James Wilson",
    description: "Build scalable web applications using Node.js, Express, and MongoDB.",
    thumbnail: "https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg",
    category: "Programming",
    duration: "9 weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 1342,
    price: "$59.99",
  },
  {
    id: 8,
    title: "UI/UX Design Principles",
    instructor: "Sophia Martinez",
    description: "Learn the fundamentals of user interface and user experience design.",
    thumbnail: "https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg",
    category: "Design",
    duration: "7 weeks",
    level: "Beginner",
    rating: 4.9,
    students: 2156,
    price: "$49.99",
  },
  {
    id: 9,
    title: "Python for Data Science",
    instructor: "Daniel Lee",
    description: "Master Python programming for data analysis and visualization.",
    thumbnail: "/placeholder.svg?height=100&width=200",
    category: "Data Science",
    duration: "8 weeks",
    level: "Beginner",
    rating: 4.7,
    students: 1876,
    price: "$54.99",
  },
  {
    id: 10,
    title: "Cloud Computing Fundamentals",
    instructor: "Rachel Green",
    description: "Introduction to cloud platforms, services, and deployment models.",
    thumbnail: "/placeholder.svg?height=100&width=200",
    category: "IT & Software",
    duration: "6 weeks",
    level: "Intermediate",
    rating: 4.6,
    students: 1243,
    price: "$64.99",
  },
  {
    id: 11,
    title: "Social Media Marketing",
    instructor: "Thomas Brown",
    description: "Strategies for effective social media marketing campaigns.",
    thumbnail: "/placeholder.svg?height=100&width=200",
    category: "Marketing",
    duration: "5 weeks",
    level: "All Levels",
    rating: 4.5,
    students: 1987,
    price: "$39.99",
  },
  {
    id: 12,
    title: "Blockchain Development",
    instructor: "Jennifer Clark",
    description: "Learn to build decentralized applications using blockchain technology.",
    thumbnail: "https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg",
    category: "Programming",
    duration: "10 weeks",
    level: "Advanced",
    rating: 4.8,
    students: 876,
    price: "$79.99",
  },
]

export function AvailableCourses() {
  const [currentPage, setCurrentPage] = useState(1)
  const coursesPerPage = 6

  // Calculate total pages
  const totalPages = Math.ceil(availableCourses.length / coursesPerPage)

  // Get current courses
  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = availableCourses.slice(indexOfFirstCourse, indexOfLastCourse)

  // Change page
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    // Remove the scrolling behavior
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1)
    }
  }

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages are less than max pages to show
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // Always show first page
      pageNumbers.push(1)

      // Calculate start and end of page numbers to show
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if at the beginning
      if (currentPage <= 2) {
        end = 4
      }

      // Adjust if at the end
      if (currentPage >= totalPages - 1) {
        start = totalPages - 3
      }

      // Add ellipsis after first page if needed
      if (start > 2) {
        pageNumbers.push("...")
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i)
      }

      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pageNumbers.push("...")
      }

      // Always show last page
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentCourses.map((course) => (
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

      {/* Pagination Controls */}
      <div className="flex flex-col items-center space-y-2 py-4">
        <div className="text-sm text-muted-foreground">
          Showing {indexOfFirstCourse + 1}-{Math.min(indexOfLastCourse, availableCourses.length)} of{" "}
          {availableCourses.length} courses
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevPage}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {getPageNumbers().map((page, index) =>
            typeof page === "number" ? (
              <Button
                key={index}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => goToPage(page)}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
                className="h-8 w-8 p-0"
              >
                {page}
              </Button>
            ) : (
              <span key={index} className="px-2">
                {page}
              </span>
            ),
          )}

          <Button
            variant="outline"
            size="icon"
            onClick={nextPage}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
