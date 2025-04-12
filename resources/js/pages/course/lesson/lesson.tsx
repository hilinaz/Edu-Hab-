import LessonContent from "@/components/course/lesson/lesson";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { getLessonById } from "@/types/lesson";
import { Head } from "@inertiajs/react";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Course',
        href: '/teacher/dashboard',
    },
];

export default function QuizPage() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Course" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-25 pt-4">
                <h1>Create a new course by filling all the required details</h1>
                <LessonContent lesson={getLessonById(1)} />
            </div>
        </AppLayout>
    );
}
