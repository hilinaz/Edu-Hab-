import { ArrowRight, CheckCircle, Clock, Code, FileCode, Hourglass, Star, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample challenges data
const challenges = [
  {
    id: 1,
    title: "Binary Search Tree Implementation",
    difficulty: "Hard",
    category: "Data Structures",
    points: 150,
    status: "completed",
    completedDate: "2 days ago",
  },
  {
    id: 2,
    title: "Dynamic Programming: Coin Change",
    difficulty: "Medium",
    category: "Algorithms",
    points: 100,
    status: "in-progress",
    progress: 60,
  },
  {
    id: 3,
    title: "Implement a Queue using Stacks",
    difficulty: "Medium",
    category: "Data Structures",
    points: 100,
    status: "not-started",
  },
  {
    id: 4,
    title: "Graph Traversal: DFS & BFS",
    difficulty: "Hard",
    category: "Algorithms",
    points: 150,
    status: "not-started",
  },
]

// Helper function to get badge color based on difficulty
function getDifficultyBadge(difficulty: string) {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Easy</Badge>
    case "medium":
      return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Medium</Badge>
    case "hard":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Hard</Badge>
    default:
      return <Badge variant="outline">{difficulty}</Badge>
  }
}

// Helper function to get status icon
function getStatusIcon(status: string) {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-5 w-5 text-green-500" />
    case "in-progress":
      return <Hourglass className="h-5 w-5 text-amber-500" />
    case "not-started":
      return <Clock className="h-5 w-5 text-muted-foreground" />
    default:
      return null
  }
}

export function UserChallenges() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <Code className="mr-2 h-5 w-5 text-blue-500" />
          Challenges
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="rounded-lg border p-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center">
                  {getStatusIcon(challenge.status)}
                  <h3 className="ml-2 font-medium">{challenge.title}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {getDifficultyBadge(challenge.difficulty)}
                  <Badge variant="outline">{challenge.category}</Badge>
                  <div className="flex items-center text-muted-foreground">
                    <Trophy className="mr-1 h-3 w-3" />
                    <span>{challenge.points} XP</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <FileCode className="h-4 w-4" />
              </Button>
            </div>

            {challenge.status === "completed" && (
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>Completed {challenge.completedDate}</span>
                <div className="flex items-center">
                  <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
            )}

            {challenge.status === "in-progress" && (
              <div className="mt-2 flex items-center justify-between">
                <div className="h-1.5 w-full flex-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-primary" style={{ width: `${challenge.progress}%` }} />
                </div>
                <span className="ml-2 text-xs">{challenge.progress}%</span>
              </div>
            )}

            {challenge.status === "not-started" && (
              <div className="mt-2">
                <Button variant="outline" size="sm" className="w-full text-xs">
                  Start Challenge
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
