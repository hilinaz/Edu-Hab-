import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Courses',
        href: '/student/courses',
    },
];

export default function Courses() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Course List" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div>Course List</div>
                <div>Course Information</div>
                <div>Learning Progress</div>
                <div>Upcoming Deadlines</div>
                <div>Achievements and certifications</div>
            </div>
        </AppLayout>
    );
}
