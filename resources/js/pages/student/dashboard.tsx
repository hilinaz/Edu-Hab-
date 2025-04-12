import { StudentDashboardComponent } from '@/components/student/dashboard';
import { DashboardOverview } from '@/components/teacher/dashboard-overview';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/student/dashboard',
    },
];

export default function StudentDashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Student Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1>Here is an overview of your activites</h1>
                <Tabs defaultValue="learning">
                    <TabsList>
                        <TabsTrigger value="learning">Learning Activites</TabsTrigger>
                        <TabsTrigger value="teaching">My Postings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="learning"> 
                        <StudentDashboardComponent />
                    </TabsContent>
                    <TabsContent value="teaching">
                        <DashboardOverview />
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
