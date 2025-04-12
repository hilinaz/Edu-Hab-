import { Award, CheckCircle, Medal, Star, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const certificates = [
  {
    id: 1,
    title: "HTML & CSS Fundamentals",
    issueDate: "2023-02-15",
    credential: "CERT-12345-HTML",
    thumbnail: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 2,
    title: "JavaScript Basics",
    issueDate: "2023-03-10",
    credential: "CERT-67890-JS",
    thumbnail: "/placeholder.svg?height=80&width=120",
  },
]

const badges = [
  {
    id: 1,
    title: "Fast Learner",
    description: "Completed 5 lessons in one day",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Perfect Score",
    description: "Scored 100% on an assessment",
    icon: Star,
  },
  {
    id: 3,
    title: "Consistent Learner",
    description: "Logged in for 7 consecutive days",
    icon: CheckCircle,
  },
]

const inProgressAchievements = [
  {
    id: 1,
    title: "Course Completion Master",
    description: "Complete 5 courses",
    progress: 60,
    current: 3,
    total: 5,
    icon: Medal,
  },
  {
    id: 2,
    title: "Quiz Champion",
    description: "Score above 90% on 10 quizzes",
    progress: 40,
    current: 4,
    total: 10,
    icon: Award,
  },
]

export function Achievements() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Certificates</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="flex items-center gap-4 rounded-lg border p-4">
              <div className="h-20 w-30 overflow-hidden rounded-md">
                <img
                  src={certificate.thumbnail || "/placeholder.svg"}
                  alt={certificate.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{certificate.title}</h4>
                <p className="text-sm text-muted-foreground">Issued on {formatDate(certificate.issueDate)}</p>
                <p className="text-xs text-muted-foreground">Credential: {certificate.credential}</p>
                <Button variant="link" className="h-8 p-0 text-sm">
                  View Certificate
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Badges Earned</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {badges.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center rounded-lg border p-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="mt-2 font-medium">{badge.title}</h4>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Achievements In Progress</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {inProgressAchievements.map((achievement) => (
            <div key={achievement.id} className="rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <achievement.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Progress</span>
                  <span>
                    {achievement.current}/{achievement.total}
                  </span>
                </div>
                <Progress value={achievement.progress} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
