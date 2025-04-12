import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MetricCard } from "@/components/teacher/metric-card"
// import { EnrollmentChart } from "@/components/enrollment-chart"
// import { CompletionRateChart } from "@/components/completion-rate-chart"
import { RecentActivity } from "@/components/teacher/recent-actions"
import { CourseList } from "@/components/teacher/course-list"
import { PlusCircle } from "lucide-react"
import { Link } from "@inertiajs/react"

export function DashboardOverview() {
  return (
    <div className="grid gap-4 md:gap-8 mt-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Courses"
          value="12"
          description="2 courses created this month"
          trend="+20%"
          trendType="positive"
        />
        <MetricCard
          title="Active Courses"
          value="8"
          description="6 published, 2 in progress"
          trend="+14%"
          trendType="positive"
        />
        <MetricCard
          title="Total Learners"
          value="248"
          description="32 new enrollments this month"
          trend="+18%"
          trendType="positive"
        />
        <MetricCard
          title="Completion Rate"
          value="76%"
          description="Average across all courses"
          trend="+5%"
          trendType="positive"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Enrollment Trends</CardTitle>
            <CardDescription>New enrollments over the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            {/* <EnrollmentChart /> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Completion Rates</CardTitle>
            <CardDescription>Course completion rates by subject</CardDescription>
          </CardHeader>
          <CardContent>
            {/* <CompletionRateChart /> */}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>My Courses</CardTitle>
            <CardDescription>Manage your existing courses or create a new one</CardDescription>
          </div>
          <Button className="flex items-center gap-1">
            <PlusCircle className="h-4 w-4" />
            <Link href="/teacher/course/create"> Create Course</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <CourseList />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates from your courses and learners</CardDescription>
        </CardHeader>
        <CardContent>
          <RecentActivity />
        </CardContent>
      </Card>
    </div>
  )
}
