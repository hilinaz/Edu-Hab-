import { useState } from "react";
import { useForm, router, Head } from "@inertiajs/react";
import { Facebook, Github, Instagram, Twitter, Upload, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";

// Custom TikTok icon since it's not in Lucide
function TiktokIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            <path d="M15 8h.01" />
            <path d="M20 12a8 8 0 1 0-8 8" />
            <path d="M9 15v-3h3v3" />
            <path d="M13 15V9h3v6" />
        </svg>
    );
}

// Sample user data - in a real app, this would come from props passed by Inertia
const defaultUser = {
    name: "Alex Johnson",
    username: "alexcode",
    avatar: "/placeholder.svg?height=128&width=128",
    title: "Code Wizard",
    bio: "Full-stack developer passionate about solving complex problems and building cool stuff.",
    location: "San Francisco, CA",
    socialLinks: {
        github: "https://github.com/alexcode",
        twitter: "https://twitter.com/alexcode",
        instagram: "https://instagram.com/alexcode",
        facebook: "https://facebook.com/alexcode",
        tiktok: "https://tiktok.com/@alexcode",
    },
};

function EditUserProfile({ user = defaultUser }) {
    const [avatar, setAvatar] = useState(user.avatar);

    // Initialize Inertia form with user data
    const { data, setData, post, errors, processing } = useForm({
        name: user.name || "",
        username: user.username || "",
        title: user.title || "",
        bio: user.bio || "",
        location: user.location || "",
        github: user.socialLinks.github || "",
        twitter: user.socialLinks.twitter || "",
        instagram: user.socialLinks.instagram || "",
        facebook: user.socialLinks.facebook || "",
        tiktok: user.socialLinks.tiktok || "",
        avatar: null, // For file upload
    });

    // Handle avatar upload
    const handleAvatarChange = (e: any) => {
        const file = e.target.files?.[0];
        if (file) {
            setData("avatar", file); // Store file in form data for submission
            const reader = new FileReader();
            reader.onload = (event) => {
                const result = event.target?.result;
                let avator = "";
                if (result) {
                    avator = result.toString();
                }
                setAvatar(avator); // Update preview

            };
            reader.readAsDataURL(file);
        }
    };

    // Reset avatar to original
    const resetAvatar = () => {
        setAvatar(user.avatar);
        setData("avatar", null);
    };

    // Form submission handler
    const onSubmit = (e: any) => {
        e.preventDefault();
        post("/profile/update", {
            preserveScroll: true,
            onSuccess: () => {
                toast("Your profile has been successfully updated");
                router.visit("/profile"); // Navigate to profile page
            },
            onError: () => {
                toast.error("Failed to update profile. Please check the form.");
            },
        });
    };

    return (
        <div className="container max-w-2xl py-10">
            <Card>
                <CardHeader>
                    <CardTitle>Edit Profile</CardTitle>
                    <CardDescription>Update your profile information and social media links.</CardDescription>
                </CardHeader>
                <form onSubmit={onSubmit}>
                    <CardContent className="space-y-6">
                        {/* Avatar Upload Section */}
                        <div className="flex flex-col items-center space-y-4">
                            <Avatar className="h-24 w-24 border-4 border-primary/10">
                                <AvatarImage src={avatar || ""} alt="Profile picture" />
                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>

                            <div className="flex items-center gap-2">
                                <Label htmlFor="avatar" className="cursor-pointer">
                                    <div className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium">
                                        <Upload className="h-4 w-4" />
                                        Upload Avatar
                                    </div>
                                    <Input
                                        id="avatar"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleAvatarChange}
                                    />
                                </Label>
                                {avatar !== user.avatar && (
                                    <Button variant="outline" size="sm" type="button" onClick={resetAvatar}>
                                        <X className="mr-2 h-4 w-4" />
                                        Reset
                                    </Button>
                                )}
                            </div>
                            {errors.avatar && <p className="text-sm text-destructive">{errors.avatar}</p>}
                        </div>

                        <Separator />

                        {/* Personal Information */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Personal Information</h3>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Your name"
                                        value={data.name}
                                        onChange={(e) => setData("name", e.target.value)}
                                    />
                                    {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        id="username"
                                        placeholder="username"
                                        value={data.username}
                                        onChange={(e) => setData("username", e.target.value)}
                                    />
                                    <p className="text-sm text-muted-foreground">This is your public display name.</p>
                                    {errors.username && <p className="text-sm text-destructive">{errors.username}</p>}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    placeholder="Your title or role"
                                    value={data.title}
                                    onChange={(e) => setData("title", e.target.value)}
                                />
                                {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
                            </div>

                            <div className="flex flex-col gap-4">
                                <Label htmlFor="bio">Bio</Label>
                                <Textarea
                                    id="bio"
                                    placeholder="Tell us about yourself"
                                    className="resize-none"
                                    value={data.bio}
                                    onChange={(e) => setData("bio", e.target.value)}
                                />
                                <p className="text-sm text-muted-foreground">{data.bio.length || 0}/160 characters</p>
                                {errors.bio && <p className="text-sm text-destructive">{errors.bio}</p>}
                            </div>

                            <div className="flex flex-col gap-4">
                                <Label htmlFor="location">Location</Label>
                                <Input
                                    id="location"
                                    placeholder="City, Country"
                                    value={data.location}
                                    onChange={(e) => setData("location", e.target.value)}
                                />
                                {errors.location && <p className="text-sm text-destructive">{errors.location}</p>}
                            </div>
                        </div>

                        <Separator />

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Social Links</h3>

                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="github" className="flex items-center gap-2">
                                        <Github className="h-4 w-4" />
                                        GitHub
                                    </Label>
                                    <Input
                                        id="github"
                                        placeholder="https://github.com/username"
                                        value={data.github}
                                        onChange={(e) => setData("github", e.target.value)}
                                    />
                                    {errors.github && <p className="text-sm text-destructive">{errors.github}</p>}
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="twitter" className="flex items-center gap-2">
                                        <Twitter className="h-4 w-4" />
                                        Twitter
                                    </Label>
                                    <Input
                                        id="twitter"
                                        placeholder="https://twitter.com/username"
                                        value={data.twitter}
                                        onChange={(e) => setData("twitter", e.target.value)}
                                    />
                                    {errors.twitter && <p className="text-sm text-destructive">{errors.twitter}</p>}
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="instagram" className="flex items-center gap-2">
                                        <Instagram className="h-4 w-4" />
                                        Instagram
                                    </Label>
                                    <Input
                                        id="instagram"
                                        placeholder="https://instagram.com/username"
                                        value={data.instagram}
                                        onChange={(e) => setData("instagram", e.target.value)}
                                    />
                                    {errors.instagram && <p className="text-sm text-destructive">{errors.instagram}</p>}
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="facebook" className="flex items-center gap-2">
                                        <Facebook className="h-4 w-4" />
                                        Facebook
                                    </Label>
                                    <Input
                                        id="facebook"
                                        placeholder="https://facebook.com/username"
                                        value={data.facebook}
                                        onChange={(e) => setData("facebook", e.target.value)}
                                    />
                                    {errors.facebook && <p className="text-sm text-destructive">{errors.facebook}</p>}
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="tiktok" className="flex items-center gap-2">
                                        <TiktokIcon className="h-4 w-4" />
                                        TikTok
                                    </Label>
                                    <Input
                                        id="tiktok"
                                        placeholder="https://tiktok.com/@username"
                                        value={data.tiktok}
                                        onChange={(e) => setData("tiktok", e.target.value)}
                                    />
                                    {errors.tiktok && <p className="text-sm text-destructive">{errors.tiktok}</p>}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="mt-5 flex justify-between">
                        <Button
                            variant="outline"
                            type="button"
                            onClick={() => router.visit("/profile", { preserveState: true })}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? "Saving..." : "Save Changes"}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit Profile',
        href: '/student/profile',
    },
];

export default function EditProfilePage() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Student Profile" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 items-center justify-center">
                <EditUserProfile />
            </div>
        </AppLayout>

    );
}