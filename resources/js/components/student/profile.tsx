import type React from "react"
import { Facebook, Github, Instagram, MessageCircle, Edit, Share2, Trophy, Twitter } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Link } from "@inertiajs/react"

// Custom TikTok icon since it's not in Lucide
function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
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
  )
}

// Sample user data
const user = {
  name: "Alex Johnson",
  username: "alexcode",
  avatar: "/placeholder.svg?height=128&width=128",
  title: "Code Wizard",
  level: 42,
  xp: 8750,
  xpToNextLevel: 10000,
  bio: "Full-stack developer passionate about solving complex problems and building cool stuff.",
  location: "San Francisco, CA",
  joinedDate: "Joined March 2022",
  badges: ["Top Contributor", "100 Day Streak", "Problem Solver"],
  socialLinks: {
    github: "https://github.com/alexcode",
    twitter: "https://twitter.com/alexcode",
    instagram: "https://instagram.com/alexcode",
    facebook: "https://facebook.com/alexcode",
    tiktok: "https://tiktok.com/@alexcode",
  },
}

export function UserProfile() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Profile</CardTitle>
          <Button variant="ghost" size="icon">
            <Link href="/student/profile/edit">
              <Edit className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center">
        <div className="relative">
          <Avatar className="h-24 w-24 border-4 border-primary/10">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 rounded-full bg-primary p-1">
            <Trophy className="h-5 w-5 text-primary-foreground" />
          </div>
        </div>

        <h2 className="mt-4 text-xl font-bold">{user.name}</h2>
        <p className="text-sm text-muted-foreground">@{user.username}</p>

        <div className="mt-2 flex flex-wrap justify-center gap-2">
          {user.badges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="px-2 py-1">
              {badge}
            </Badge>
          ))}
        </div>

        <div className="mt-4 w-full space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">{user.title}</span>
            <span>Level {user.level}</span>
          </div>
          <Progress value={(user.xp / user.xpToNextLevel) * 100} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{user.xp} XP</span>
            <span>{user.xpToNextLevel} XP</span>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">{user.bio}</p>

        <div className="mt-4 flex justify-center space-x-2">
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
            <a href={user.socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
            <a href={user.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
            <a href={user.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
            <a href={user.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
            <a href={user.socialLinks.tiktok} target="_blank" rel="noopener noreferrer">
              <TiktokIcon className="h-4 w-4" />
              <span className="sr-only">TikTok</span>
            </a>
          </Button>
        </div>

        <div className="mt-4 flex w-full gap-2">
          <Button variant="default" className="flex-1">
            <MessageCircle className="mr-2 h-4 w-4" />
            Message
          </Button>
          <Button variant="outline" className="flex-1">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}






