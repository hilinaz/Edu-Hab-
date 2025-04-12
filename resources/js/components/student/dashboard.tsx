import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EnrolledCourses } from "@/components/student/enrolled-courses"
import { AvailableCourses } from "@/components/student/available-courses"
import { UpcomingDeadlines } from "@/components/student/upcoming-deadlines"
import { LearningProgress } from "@/components/student/learning-progress"
import { Achievements } from "@/components/student/achievements"

export function StudentDashboardComponent() {
  return (
    <div className="grid gap-4 md:gap-8 mt-4">
      {/* <h1>Courses</h1> */}
      <Tabs defaultValue="enrolled" className="space-y-4">
        <TabsList>
          <TabsTrigger value="enrolled"><h1> My Courses</h1></TabsTrigger>
          {/* <TabsTrigger value="available">Available Courses</TabsTrigger> */}
        </TabsList>
        <TabsContent value="enrolled" className="space-y-4">
          <EnrolledCourses />
        </TabsContent>
        {/* <TabsContent value="available" className="space-y-4">
          <AvailableCourses />
        </TabsContent> */}
      </Tabs>

      {/* <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
            <CardDescription>Track your progress across all courses</CardDescription>
          </CardHeader>
          <CardContent>
            <LearningProgress />
          </CardContent>
        </Card> */}
        {/* <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Assignments and exams due soon</CardDescription>
          </CardHeader>
          <CardContent>
            <UpcomingDeadlines />
          </CardContent>
        </Card> */}
      {/* </div> */}

      <Card>
        <CardHeader>
          <CardTitle>Achievements & Certificates</CardTitle>
          <CardDescription>Your learning milestones and certifications</CardDescription>
        </CardHeader>
        <CardContent>
          <Achievements />
        </CardContent>
      </Card>
    </div>
  )
}
