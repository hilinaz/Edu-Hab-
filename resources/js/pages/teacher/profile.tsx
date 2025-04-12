import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Student Profile',
        href: '/student/profile',
    },
];

export default function StudentProfile() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Student Profile" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div>Student Dashboard Description (Enalbe editing)</div>
                <div>Course Information</div>
                <div>Learning Progress</div>
                <div>Upcoming Deadlines</div>
                <div>Achievements and certifications</div>
            </div>
        </AppLayout>
    );
}
