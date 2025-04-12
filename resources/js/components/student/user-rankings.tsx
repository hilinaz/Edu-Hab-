import { ArrowUp, Medal, Star, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Sample rankings data
const rankings = {
  global: {
    rank: 1247,
    total: 54892,
    percentile: 97,
    change: "+12",
  },
  local: {
    rank: 28,
    total: 342,
    percentile: 92,
    change: "+3",
  },
  topUsers: [
    {
      name: "Sarah Chen",
      username: "sarahcodes",
      avatar: "/placeholder.svg?height=32&width=32",
      xp: 12450,
      rank: 1,
    },
    {
      name: "Michael Rodriguez",
      username: "mroddev",
      avatar: "/placeholder.svg?height=32&width=32",
      xp: 11980,
      rank: 2,
    },
    {
      name: "Jessica Kim",
      username: "jkimcoder",
      avatar: "/placeholder.svg?height=32&width=32",
      xp: 11540,
      rank: 3,
    },
  ],
}

export function UserRankings() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <Medal className="mr-2 h-5 w-5 text-yellow-500" />
          Rankings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Global Rank</p>
              <Badge variant="outline" className="flex items-center gap-1 px-2 py-1">
                <ArrowUp className="h-3 w-3 text-green-500" />
                {rankings.global.change}
              </Badge>
            </div>
            <div className="mt-2 flex items-baseline">
              <span className="text-2xl font-bold">#{rankings.global.rank}</span>
              <span className="ml-2 text-xs text-muted-foreground">of {rankings.global.total}</span>
            </div>
            <div className="mt-1 flex items-center text-xs text-muted-foreground">
              <Users className="mr-1 h-3 w-3" />
              <span>Top {rankings.global.percentile}%</span>
            </div>
          </div>

          <div className="rounded-lg border p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Local Rank</p>
              <Badge variant="outline" className="flex items-center gap-1 px-2 py-1">
                <ArrowUp className="h-3 w-3 text-green-500" />
                {rankings.local.change}
              </Badge>
            </div>
            <div className="mt-2 flex items-baseline">
              <span className="text-2xl font-bold">#{rankings.local.rank}</span>
              <span className="ml-2 text-xs text-muted-foreground">of {rankings.local.total}</span>
            </div>
            <div className="mt-1 flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>Top {rankings.local.percentile}%</span>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">Leaderboard</p>
          <div className="space-y-3">
            {rankings.topUsers.map((user) => (
              <div key={user.username} className="flex items-center justify-between rounded-lg border p-2">
                <div className="flex items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    {user.rank}
                  </div>
                  <Avatar className="ml-2 h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-2">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">@{user.username}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 text-yellow-500" />
                  <span className="font-medium">{user.xp.toLocaleString()} XP</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
