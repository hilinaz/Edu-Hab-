import { CalendarDays, Clock, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const deadlines = [
  {
    id: 1,
    title: "JavaScript Final Project",
    course: "Introduction to Web Development",
    dueDate: "2023-04-15",
    type: "Assignment",
    priority: "high",
  },
  {
    id: 2,
    title: "User Research Report",
    course: "UX Design Fundamentals",
    dueDate: "2023-04-18",
    type: "Assignment",
    priority: "medium",
  },
  {
    id: 3,
    title: "Mid-term Exam",
    course: "Data Analysis with Python",
    dueDate: "2023-04-22",
    type: "Exam",
    priority: "high",
  },
  {
    id: 4,
    title: "Group Presentation",
    course: "UX Design Fundamentals",
    dueDate: "2023-04-25",
    type: "Presentation",
    priority: "medium",
  },
]

export function UpcomingDeadlines() {
  return (
    <div className="space-y-4">
      {deadlines.map((deadline) => (
        <Card key={deadline.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-start gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                {deadline.type === "Assignment" && <FileText className="h-5 w-5 text-primary" />}
                {deadline.type === "Exam" && <Clock className="h-5 w-5 text-primary" />}
                {deadline.type === "Presentation" && <CalendarDays className="h-5 w-5 text-primary" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{deadline.title}</h4>
                  <PriorityBadge priority={deadline.priority} />
                </div>
                <p className="text-sm text-muted-foreground">{deadline.course}</p>
                <div className="mt-2 flex items-center text-sm">
                  <CalendarDays className="mr-1 h-4 w-4 text-muted-foreground" />
                  <span>{formatDate(deadline.dueDate)}</span>
                  <Badge variant="outline" className="ml-2">
                    {deadline.type}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function PriorityBadge({ priority }: { priority: string }) {
  switch (priority) {
    case "high":
      return (
        <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
          High Priority
        </Badge>
      )
    case "medium":
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">
          Medium Priority
        </Badge>
      )
    case "low":
      return (
        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
          Low Priority
        </Badge>
      )
    default:
      return null
  }
}

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
