import { UserProfile } from '@/components/student/profile';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { UserStats } from "@/components/student/user-stats"
import { UserActivity } from "@/components/student/user-activity"
import { UserAchievements } from "@/components/student/user-achievements"
import { UserRankings } from "@/components/student/user-rankings"
import { UserChallenges } from "@/components/student/user-challenges"


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Student Profile',
        href: '/student/profile',
    },
];

function StudentProfileDashboard() {
    return (
        // <div>Hello World</div>
        <div className="container mx-auto py-6 max-w-7xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Left Column */}
                <div className="space-y-6">
                    <UserProfile />
                    <UserStats />
                    <UserRankings />
                </div>

                {/* //     Right Column (2/3 width on medium screens and up) */}
                <div className="space-y-6 md:col-span-2">
                    <UserActivity />
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <UserAchievements />
                        <UserChallenges />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function StudentProfile() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Student Profile" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <StudentProfileDashboard />
            </div>
        </AppLayout>
    );
}
