"use client"

import { useState } from "react"
import { Calendar, ChevronLeft, ChevronRight, GitCommit, GitPullRequest, LineChart, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Sample activity data
const activityData = {
  contributions: [
    { date: "Mon", count: 5 },
    { date: "Tue", count: 8 },
    { date: "Wed", count: 12 },
    { date: "Thu", count: 7 },
    { date: "Fri", count: 10 },
    { date: "Sat", count: 4 },
    { date: "Sun", count: 6 },
  ],
  xpGrowth: [
    { date: "Jan", xp: 1200 },
    { date: "Feb", xp: 2400 },
    { date: "Mar", xp: 3600 },
    { date: "Apr", xp: 5200 },
    { date: "May", xp: 6800 },
    { date: "Jun", xp: 8750 },
  ],
  // Sample contribution grid (similar to GitHub)
  contributionGrid: Array.from({ length: 7 }, () => Array.from({ length: 12 }, () => Math.floor(Math.random() * 5))),
}

// Helper function to get color based on contribution count
function getContributionColor(count: number) {
  if (count === 0) return "bg-muted"
  if (count === 1) return "bg-emerald-100"
  if (count === 2) return "bg-emerald-300"
  if (count === 3) return "bg-emerald-500"
  return "bg-emerald-700"
}

export function UserActivity() {
  const [activeTab, setActiveTab] = useState("contributions")
  const [timeRange, setTimeRange] = useState("week")

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle>Activity</CardTitle>
          <CardDescription>Your coding activity and XP growth</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contributions">
              <GitCommit className="mr-2 h-4 w-4" />
              Contributions
            </TabsTrigger>
            <TabsTrigger value="xp">
              <Zap className="mr-2 h-4 w-4" />
              XP Growth
            </TabsTrigger>
            <TabsTrigger value="calendar">
              <Calendar className="mr-2 h-4 w-4" />
              Calendar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contributions" className="space-y-4">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData.contributions}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="date" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Contributions" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-muted p-3">
              <div className="flex items-center">
                <GitPullRequest className="h-5 w-5 text-primary" />
                <span className="ml-2 text-sm font-medium">Total Contributions</span>
              </div>
              <span className="text-lg font-bold">
                {activityData.contributions.reduce((sum, item) => sum + item.count, 0)}
              </span>
            </div>
          </TabsContent>

          <TabsContent value="xp" className="space-y-4">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData.xpGrowth}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="date" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="xp"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.2}
                    name="XP"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-muted p-3">
              <div className="flex items-center">
                <LineChart className="h-5 w-5 text-primary" />
                <span className="ml-2 text-sm font-medium">XP Growth Rate</span>
              </div>
              <span className="text-lg font-bold">+1,550 XP/month</span>
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="pt-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Contribution Calendar</span>
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-muted-foreground">Less</span>
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div key={level} className={`h-3 w-3 rounded-sm ${getContributionColor(level)}`} />
                  ))}
                  <span className="text-xs text-muted-foreground">More</span>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-1">
                {activityData.contributionGrid.map((week, weekIndex) => (
                  <div key={weekIndex} className="space-y-1">
                    {week.map((day, dayIndex) => (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`h-3 w-3 rounded-sm ${getContributionColor(day)}`}
                        title={`${day} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                {activityData.contributionGrid.flat().reduce((sum, count) => sum + count, 0)} contributions in the last
                year
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
