// import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Progress } from "@/components/ui/progress"

const overallProgress = 65

const courseProgress = [
  { name: "Web Dev", progress: 75 },
  { name: "UX Design", progress: 45 },
  { name: "Data Analysis", progress: 20 },
]

const weeklyActivity = [
  { day: "Mon", hours: 1.5 },
  { day: "Tue", hours: 2.0 },
  { day: "Wed", hours: 0.5 },
  { day: "Thu", hours: 1.0 },
  { day: "Fri", hours: 2.5 },
  { day: "Sat", hours: 3.0 },
  { day: "Sun", hours: 1.0 },
]

export function LearningProgress() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Overall Progress</span>
          <span className="font-medium">{overallProgress}%</span>
        </div>
        <Progress value={overallProgress} className="h-2" />
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium">Course Progress</h4>
        {courseProgress.map((course) => (
          <div key={course.name} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{course.name}</span>
              <span className="font-medium">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        ))}
      </div>

      <div>
        <h4 className="mb-4 text-sm font-medium">Weekly Learning Activity</h4>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyActivity}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={12} />
              <YAxis tickLine={false} axisLine={false} fontSize={12} tickFormatter={(value: any) => `${value}h`} />
              <Tooltip />
              <Bar dataKey="hours" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Hours Spent" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
