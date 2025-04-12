import { StudentsTable } from '@/components/course/course-table';
import { StudentDashboardComponent } from '@/components/student/dashboard';
import { DashboardOverview } from '@/components/teacher/dashboard-overview';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/students',
    },
];

export default function AllUsers() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="All Users" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1>Here is the list of all students your activites</h1>
                <StudentsTable />
            </div>
        </AppLayout>
    );
}
