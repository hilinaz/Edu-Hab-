// import type { Metadata } from "next"
// import { DashboardHeader } from "@/components/dashboard-header"
// import { DashboardShell } from "@/components/dashboard-shell"
import CourseForm from "@/components/course/course-form"
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Course',
        href: '/teacher/dashboard',
    },
];

export default function CreateCoursePage() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Course" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-25 pt-4">
                <h1>Create a new course here</h1>
                <CourseForm />
            </div>
        </AppLayout>
    );
}
