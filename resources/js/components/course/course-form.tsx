import { useState } from "react"
import { BookOpen, Clock, File, Grip, MoreVertical, Plus, Save, Trash, Video } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useRemember } from "@inertiajs/react"


// Types
interface Lesson {
  id: string
  title: string
  type: "video" | "text" | "quiz"
  content: string
  duration: string
}

interface Module {
  id: string
  title: string
  description: string
  lessons: Lesson[]
}

interface Course {
  id: string
  title: string
  description: string
  instructor: string
  price: string
  thumbnail: string
  category: string
  level: string
  duration: string
  isPublished: boolean
  modules: Module[]
}

// Default course data
const defaultCourse: Course = {
  id: `course-${Date.now()}`,
  title: "",
  description: "",
  instructor: "",
  price: "",
  thumbnail: "",
  category: "",
  level: "beginner",
  duration: "",
  isPublished: false,
  modules: [],
}

// Course preview component
function CoursePreview({ course }: { course: Course }) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img
            src={course.thumbnail || "/placeholder.svg?height=300&width=500"}
            alt={course.title}
            className="w-full aspect-video object-cover rounded-lg"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=300&width=500"
            }}
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h1 className="text-2xl font-bold">{course.title || "Course Title"}</h1>
          <p className="text-muted-foreground">{course.description || "No description provided."}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {course.category && (
              <Badge variant="outline" className="px-2 py-1">
                {course.category}
              </Badge>
            )}
            {course.level && (
              <Badge variant="secondary" className="px-2 py-1">
                {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
              </Badge>
            )}
            {course.duration && (
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                {course.duration}
              </div>
            )}
          </div>

          <div className="flex items-center mt-4">
            <p className="text-lg font-bold">{course.price ? `$${course.price}` : "Free"}</p>
            {course.isPublished ? (
              <Badge className="ml-4 bg-green-100 text-green-800 hover:bg-green-100">Published</Badge>
            ) : (
              <Badge variant="outline" className="ml-4">
                Draft
              </Badge>
            )}
          </div>

          {course.instructor && <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Course Content</h2>
        {course.modules.length === 0 ? (
          <p className="text-muted-foreground">No modules added yet.</p>
        ) : (
          <div className="space-y-4">
            {course.modules.map((module, index) => (
              <Card key={module.id}>
                <CardHeader className="py-3">
                  <div className="font-medium">
                    Module {index + 1}: {module.title}
                  </div>
                </CardHeader>
                <CardContent className="py-0">
                  {module.description && <p className="text-sm text-muted-foreground mb-4">{module.description}</p>}
                  {module.lessons.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No lessons added yet.</p>
                  ) : (
                    <ul className="space-y-2">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lesson.id} className="flex items-center gap-2 text-sm p-2 rounded-md hover:bg-muted">
                          {lesson.type === "video" && <Video className="h-4 w-4 text-blue-500" />}
                          {lesson.type === "text" && <File className="h-4 w-4 text-green-500" />}
                          {lesson.type === "quiz" && <BookOpen className="h-4 w-4 text-amber-500" />}
                          <span>
                            {lessonIndex + 1}. {lesson.title}
                          </span>
                          {lesson.duration && (
                            <span className="ml-auto text-xs text-muted-foreground">{lesson.duration}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Lesson form component
function LessonForm({
  lesson,
  onUpdate,
  onDelete,
}: {
  lesson: Lesson
  onUpdate: (updatedLesson: Partial<Lesson>) => void
  onDelete: () => void
}) {
  return (
    <div className="space-y-4 p-4 border rounded-md relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {lesson.type === "video" && <Video className="h-4 w-4 text-blue-500" />}
          {lesson.type === "text" && <File className="h-4 w-4 text-green-500" />}
          {lesson.type === "quiz" && <BookOpen className="h-4 w-4 text-amber-500" />}
          <h4 className="font-medium">Lesson</h4>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onDelete} className="text-destructive">
              <Trash className="h-4 w-4 mr-2" />
              Delete Lesson
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid gap-3">
        <Label htmlFor={`lesson-title-${lesson.id}`}>Lesson Title</Label>
        <Input
          id={`lesson-title-${lesson.id}`}
          value={lesson.title}
          onChange={(e) => onUpdate({ title: e.target.value })}
          placeholder="Enter lesson title"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-3">
          <Label htmlFor={`lesson-type-${lesson.id}`}>Type</Label>
          <Select value={lesson.type} onValueChange={(value) => onUpdate({ type: value as "video" | "text" | "quiz" })}>
            <SelectTrigger id={`lesson-type-${lesson.id}`}>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="video">Video</SelectItem>
              <SelectItem value="text">Text</SelectItem>
              <SelectItem value="quiz">Quiz</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-3">
          <Label htmlFor={`lesson-duration-${lesson.id}`}>Duration</Label>
          <Input
            id={`lesson-duration-${lesson.id}`}
            value={lesson.duration}
            onChange={(e) => onUpdate({ duration: e.target.value })}
            placeholder="e.g. 10 min"
          />
        </div>
      </div>

      <div className="grid gap-3">
        <Label htmlFor={`lesson-content-${lesson.id}`}>Content</Label>
        <Textarea
          id={`lesson-content-${lesson.id}`}
          value={lesson.content}
          onChange={(e) => onUpdate({ content: e.target.value })}
          placeholder="Enter lesson content or URL"
          rows={3}
        />
      </div>
    </div>
  )
}

// Module form component
function ModuleForm({
  module,
  onUpdate,
  onDelete,
  onAddLesson,
}: {
  module: Module
  onUpdate: (updatedModule: Partial<Module>) => void
  onDelete: () => void
  onAddLesson: () => void
}) {
  const updateLesson = (lessonId: string, updatedLesson: Partial<Lesson>) => {
    const updatedLessons = module.lessons.map((lesson) =>
      lesson.id === lessonId ? { ...lesson, ...updatedLesson } : lesson,
    )
    onUpdate({ lessons: updatedLessons })
  }

  const deleteLesson = (lessonId: string) => {
    const updatedLessons = module.lessons.filter((lesson) => lesson.id !== lessonId)
    onUpdate({ lessons: updatedLessons })
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Grip className="h-5 w-5 text-muted-foreground" />
            <div className="grid gap-1">
              <Input
                value={module.title}
                onChange={(e) => onUpdate({ title: e.target.value })}
                placeholder="Module Title"
                className="h-auto text-base font-medium p-0 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={onDelete} className="text-destructive">
                <Trash className="h-4 w-4 mr-2" />
                Delete Module
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          <Label htmlFor={`module-description-${module.id}`}>Module Description</Label>
          <Textarea
            id={`module-description-${module.id}`}
            value={module.description}
            onChange={(e) => onUpdate({ description: e.target.value })}
            placeholder="Enter module description"
            rows={2}
          />
        </div>

        {module.lessons.length > 0 && (
          <div className="space-y-4">
            <Label>Lessons</Label>
            {module.lessons.map((lesson) => (
              <LessonForm
                key={lesson.id}
                lesson={lesson}
                onUpdate={(updatedLesson) => updateLesson(lesson.id, updatedLesson)}
                onDelete={() => deleteLesson(lesson.id)}
              />
            ))}
          </div>
        )}

        <Button onClick={onAddLesson} variant="outline" size="sm" className="mt-2">
          <Plus className="h-4 w-4 mr-2" />
          Add Lesson
        </Button>
      </CardContent>
    </Card>
  )
}

export default function CourseForm() {
  const [course, setCourse] = useState<Course>(defaultCourse)
  const [activeTab, setActiveTab] = useState("edit")

  const handleCourseChange = (field: keyof Course, value: string | boolean) => {
    setCourse((prev) => ({ ...prev, [field]: value }))
  }

  const addModule = () => {
    const newModule: Module = {
      id: `module-${Date.now()}`,
      title: "New Module",
      description: "",
      lessons: [],
    }
    setCourse((prev) => ({
      ...prev,
      modules: [...prev.modules, newModule],
    }))
  }

  const updateModule = (moduleId: string, updatedModule: Partial<Module>) => {
    setCourse((prev) => ({
      ...prev,
      modules: prev.modules.map((module) => (module.id === moduleId ? { ...module, ...updatedModule } : module)),
    }))
  }

  const removeModule = (moduleId: string) => {
    setCourse((prev) => ({
      ...prev,
      modules: prev.modules.filter((module) => module.id !== moduleId),
    }))
  }

  const addLesson = (moduleId: string) => {
    const newLesson: Lesson = {
      id: `lesson-${Date.now()}`,
      title: "New Lesson",
      type: "video",
      content: "",
      duration: "",
    }

    setCourse((prev) => ({
      ...prev,
      modules: prev.modules.map((module) => {
        if (module.id === moduleId) {
          return {
            ...module,
            lessons: [...module.lessons, newLesson],
          }
        }
        return module
      }),
    }))
  }

  const saveCourse = () => {
    // Here you would typically save to a database
    console.log("Saving course:", course)
    toast("Your course has been saved successfully.")
  }

  return (
    <div className="grid grid-cols-1 gap-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="edit" className="space-y-6 pt-4">
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="title">Course Title</Label>
              <Input
                id="title"
                value={course.title}
                onChange={(e) => handleCourseChange("title", e.target.value)}
                placeholder="Enter course title"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Course Description</Label>
              <Textarea
                id="description"
                value={course.description}
                onChange={(e) => handleCourseChange("description", e.target.value)}
                placeholder="Enter course description"
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-3">
                <Label htmlFor="instructor">Instructor</Label>
                <Input
                  id="instructor"
                  value={course.instructor}
                  onChange={(e) => handleCourseChange("instructor", e.target.value)}
                  placeholder="Enter instructor name"
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  value={course.price}
                  onChange={(e) => handleCourseChange("price", e.target.value)}
                  placeholder="Enter course price"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-3">
                <Label htmlFor="category">Category</Label>
                <Select value={course.category} onValueChange={(value) => handleCourseChange("category", value)}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="level">Level</Label>
                <Select value={course.level} onValueChange={(value) => handleCourseChange("level", value)}>
                  <SelectTrigger id="level">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="all-levels">All Levels</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-3">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={course.duration}
                  onChange={(e) => handleCourseChange("duration", e.target.value)}
                  placeholder="e.g. 8 weeks"
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="thumbnail">Thumbnail URL</Label>
                <Input
                  id="thumbnail"
                  value={course.thumbnail}
                  onChange={(e) => handleCourseChange("thumbnail", e.target.value)}
                  placeholder="Enter thumbnail URL"
                />
              </div>
            </div>

            {course.thumbnail && (
              <div className="mt-2">
                <img
                  src={course.thumbnail || "/placeholder.svg?height=100&width=200"}
                  alt="Course thumbnail"
                  className="h-40 w-full object-cover rounded-md"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=100&width=200"
                  }}
                />
              </div>
            )}

            <div className="flex items-center space-x-2">
              <Switch
                id="published"
                checked={course.isPublished}
                onCheckedChange={(checked) => handleCourseChange("isPublished", checked)}
              />
              <Label htmlFor="published">Published</Label>
            </div>

            {/* <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Course Modules</h3>
                <Button onClick={addModule} size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Module
                </Button>
              </div>

              {course.modules.length === 0 ? (
                <div className="border rounded-md p-8 text-center">
                  <BookOpen className="h-10 w-10 mx-auto text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No modules yet</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Add your first module to start building your course content.
                  </p>
                  <Button onClick={addModule} className="mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Module
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {course.modules.map((module) => (
                    <ModuleForm
                      key={module.id}
                      module={module}
                      onUpdate={(updatedModule) => updateModule(module.id, updatedModule)}
                      onDelete={() => removeModule(module.id)}
                      onAddLesson={() => addLesson(module.id)}
                    />
                  ))}
                </div>
              )}
            </div> */}

            <div className="flex justify-end">
              <Button onClick={saveCourse}>
                <Save className="h-4 w-4 mr-2" />
                Save Course
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="preview">
          <CoursePreview course={course} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
