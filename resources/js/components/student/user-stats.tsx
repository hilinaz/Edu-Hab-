import { Award, Flame, Zap, Brain, Code, CheckCircle2, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Sample user stats data
const userStats = {
  currentStreak: 28,
  maxStreak: 103,
  totalXP: 87500,
  challengesCompleted: 342,
  quizzesPassed: 89,
  hoursSpent: 412,
  averageScore: 92,
}

export function UserStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Zap className="mr-2 h-5 w-5 text-yellow-500" />
          Stats & Streaks
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
              <Flame className="h-5 w-5 text-orange-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium">Current Streak</p>
              <p className="text-2xl font-bold">{userStats.currentStreak} days</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Max</p>
            <p className="text-xl font-semibold">{userStats.maxStreak}</p>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center rounded-lg border p-3">
            <Award className="h-5 w-5 text-purple-500" />
            <p className="mt-1 text-2xl font-bold">{userStats.totalXP.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Total XP</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg border p-3">
            <Code className="h-5 w-5 text-blue-500" />
            <p className="mt-1 text-2xl font-bold">{userStats.challengesCompleted}</p>
            <p className="text-xs text-muted-foreground">Challenges</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg border p-3">
            <Brain className="h-5 w-5 text-green-500" />
            <p className="mt-1 text-2xl font-bold">{userStats.quizzesPassed}</p>
            <p className="text-xs text-muted-foreground">Quizzes</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg border p-3">
            <Clock className="h-5 w-5 text-amber-500" />
            <p className="mt-1 text-2xl font-bold">{userStats.hoursSpent}</p>
            <p className="text-xs text-muted-foreground">Hours</p>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-muted p-3">
          <div className="flex items-center">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span className="ml-2 text-sm font-medium">Average Score</span>
          </div>
          <span className="text-lg font-bold">{userStats.averageScore}%</span>
        </div>
      </CardContent>
    </Card>
  )
}
