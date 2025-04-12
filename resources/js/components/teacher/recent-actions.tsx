import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    type: "enrollment",
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AJ",
    },
    course: "Introduction to Web Development",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "completion",
    user: {
      name: "Maria Garcia",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MG",
    },
    course: "UX Design Fundamentals",
    time: "Yesterday",
  },
  {
    id: 3,
    type: "submission",
    user: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "DK",
    },
    course: "Advanced JavaScript",
    assignment: "Final Project",
    time: "Yesterday",
  },
  {
    id: 4,
    type: "feedback",
    user: {
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SW",
    },
    course: "Data Analysis with Python",
    time: "2 days ago",
  },
  {
    id: 5,
    type: "question",
    user: {
      name: "James Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JW",
    },
    course: "Mobile App Development",
    time: "3 days ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4 rounded-lg border p-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium leading-none">{activity.user.name}</p>
              <ActivityBadge type={activity.type} />
            </div>
            <p className="text-sm text-muted-foreground">{getActivityText(activity)}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function ActivityBadge({ type }: { type: string }) {
  switch (type) {
    case "enrollment":
      return (
        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
          Enrolled
        </Badge>
      )
    case "completion":
      return (
        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
          Completed
        </Badge>
      )
    case "submission":
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">
          Submitted
        </Badge>
      )
    case "feedback":
      return (
        <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
          Feedback
        </Badge>
      )
    case "question":
      return (
        <Badge variant="outline" className="bg-rose-50 text-rose-700 hover:bg-rose-50">
          Question
        </Badge>
      )
    default:
      return null
  }
}

function getActivityText(activity: (typeof activities)[0]) {
  switch (activity.type) {
    case "enrollment":
      return `Enrolled in "${activity.course}"`
    case "completion":
      return `Completed "${activity.course}"`
    case "submission":
      return `Submitted ${activity.assignment} for "${activity.course}"`
    case "feedback":
      return `Left feedback on "${activity.course}"`
    case "question":
      return `Asked a question about "${activity.course}"`
    default:
      return ""
  }
}
