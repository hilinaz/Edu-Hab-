"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Eye, MoreHorizontal, Users } from "lucide-react"

// Sample course data
const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    targetAudience: "Beginners",
    status: "Published",
    lastUpdated: "2023-04-10",
    enrolledLearners: 42,
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    targetAudience: "Intermediate",
    status: "Published",
    lastUpdated: "2023-03-22",
    enrolledLearners: 38,
  },
  {
    id: 3,
    title: "UX Design Fundamentals",
    targetAudience: "Beginners",
    status: "Published",
    lastUpdated: "2023-04-05",
    enrolledLearners: 56,
  },
  {
    id: 4,
    title: "Data Analysis with Python",
    targetAudience: "Advanced",
    status: "Draft",
    lastUpdated: "2023-04-08",
    enrolledLearners: 0,
  },
  {
    id: 5,
    title: "Mobile App Development",
    targetAudience: "Intermediate",
    status: "Published",
    lastUpdated: "2023-03-15",
    enrolledLearners: 27,
  },
]

export function CourseList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter courses based on search query and status filter
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || course.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Input
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Title</TableHead>
              <TableHead className="hidden md:table-cell">Target Audience</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Last Updated</TableHead>
              <TableHead>Learners</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCourses.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No courses found.
                </TableCell>
              </TableRow>
            ) : (
              filteredCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell className="hidden md:table-cell">{course.targetAudience}</TableCell>
                  <TableCell>
                    <StatusBadge status={course.status} />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{formatDate(course.lastUpdated)}</TableCell>
                  <TableCell>{course.enrolledLearners}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          <span>View</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="mr-2 h-4 w-4" />
                          <span>View Learners</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {course.status === "Published" ? (
                          <DropdownMenuItem>Archive</DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem>Publish</DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "Published":
      return (
        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
          Published
        </Badge>
      )
    case "Draft":
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">
          Draft
        </Badge>
      )
    case "Archived":
      return (
        <Badge variant="outline" className="bg-slate-100 text-slate-700 hover:bg-slate-100">
          Archived
        </Badge>
      )
    default:
      return null
  }
}

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
