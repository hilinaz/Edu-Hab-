import { Award, BookOpen, Brain, Code, Flame, Lightbulb, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Sample achievements data
const achievements = [
  {
    id: 1,
    title: "Algorithm Master",
    description: "Solve 100 algorithm challenges",
    icon: Brain,
    progress: 78,
    current: 78,
    total: 100,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    id: 2,
    title: "Streak Champion",
    description: "Maintain a 30-day streak",
    icon: Flame,
    progress: 100,
    current: 30,
    total: 30,
    color: "text-orange-500",
    bgColor: "bg-orange-100",
    completed: true,
  },
  {
    id: 3,
    title: "Quiz Wizard",
    description: "Complete 50 quizzes with 90%+ score",
    icon: Lightbulb,
    progress: 64,
    current: 32,
    total: 50,
    color: "text-amber-500",
    bgColor: "bg-amber-100",
  },
  {
    id: 4,
    title: "Code Contributor",
    description: "Submit 200 solutions",
    icon: Code,
    progress: 45,
    current: 90,
    total: 200,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    id: 5,
    title: "Learning Explorer",
    description: "Complete courses in 5 different topics",
    icon: BookOpen,
    progress: 60,
    current: 3,
    total: 5,
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
]

export function UserAchievements() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
          Achievements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex items-start space-x-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${achievement.bgColor}`}>
                <achievement.icon className={`h-5 w-5 ${achievement.color}`} />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center">
                  <p className="font-medium">{achievement.title}</p>
                  {achievement.completed && <Award className="ml-2 h-4 w-4 text-yellow-500" />}
                </div>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span>
                    {achievement.current}/{achievement.total}
                  </span>
                  <span>{achievement.progress}%</span>
                </div>
                <Progress value={achievement.progress} className="h-1.5" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
