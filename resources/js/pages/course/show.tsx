import { AvailableCourses } from "@/components/course/available-courses"
// import { AvailableCourses } from "@/components/course/available-courses"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AppLayout from "@/layouts/app-layout"
import { BreadcrumbItem } from "@/types"
import { Head, Link } from "@inertiajs/react"
import { BookOpen, Search } from "lucide-react"

function CoursesPage() {
    return (
        <div className="container py-10 lg:max-w-9/10">
            <div className="mb-8 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
                    <Button>
                    <BookOpen className="mr-2 h-4 w-4" />
                        <Link href="/dashboard">
                        My Learning 
                        </Link>
                       
                    </Button>
                </div>
                <p className="text-muted-foreground">
                    Browse our comprehensive collection of courses to enhance your skills and knowledge.
                </p>
            </div>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search courses..." className="w-full bg-background pl-8 sm:max-w-sm" />
                </div>
            </div>

            <Tabs defaultValue="all">
                <TabsList className="mb-8">
                    <TabsTrigger value="all">All Courses</TabsTrigger>
                    <TabsTrigger value="popular">Popular</TabsTrigger>
                    <TabsTrigger value="newest">Newest</TabsTrigger>
                    <TabsTrigger value="enrolled">Enrolled</TabsTrigger>
                    <TabsTrigger value="mine">My Courses</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                    <AvailableCourses />
                </TabsContent>

                <TabsContent value="popular">
                    <AvailableCourses />
                </TabsContent>

                <TabsContent value="newest">
                    <AvailableCourses />
                </TabsContent>

                <TabsContent value="enrolled">
                    <AvailableCourses />
                </TabsContent>

                <TabsContent value="mine">
                    <AvailableCourses />
                </TabsContent>
            </Tabs>
        </div>
    )
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Student Profile',
        href: '/student/profile',
    },
];

export default function Page() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Student Profile" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 items-center justify-center">
                <CoursesPage />
            </div>
        </AppLayout>
    );
}
