import { useState, useEffect } from "react"
import { Link } from "@inertiajs/react"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import type { Lesson } from "@/types/lesson"

interface YoutubeEmbedProps {
  url: string
  title?: string
}

function YoutubeEmbed({ url, title = "YouTube video player" }: YoutubeEmbedProps) {
  const [videoId, setVideoId] = useState<string | null>(null)

  useEffect(() => {
    // Extract video ID from various YouTube URL formats
    const extractVideoId = (url: string) => {
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
      const match = url.match(regExp)
      return match && match[7].length === 11 ? match[7] : null
    }

    setVideoId(extractVideoId(url))
  }, [url])

  if (!videoId) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-lg bg-muted">
        <p className="text-muted-foreground">Invalid YouTube URL</p>
      </div>
    )
  }

  return (
    <div className="aspect-video w-full">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full rounded-lg"
      />
    </div>
  )
}


interface LessonContentProps {
  lesson: Lesson
}

export default function LessonContent({ lesson }: LessonContentProps) {
  const [isCompleted, setIsCompleted] = useState(false)

  const handleComplete = () => {
    setIsCompleted(true)
    // In a real app, you would save this to the user's progress
  }

  return (
    <div className="space-y-8">
      {/* Lesson Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/lessons">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Lessons
              </Button>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <span className="text-sm text-muted-foreground">
              Module {lesson.moduleNumber} • Lesson {lesson.lessonNumber}
            </span>
          </div>
          {isCompleted ? (
            <div className="flex items-center gap-1 text-sm font-medium text-green-500">
              <CheckCircle className="h-4 w-4" />
              Completed
            </div>
          ) : (
            <span className="text-sm text-muted-foreground">{lesson.duration} min</span>
          )}
        </div>

        <h1 className="text-3xl font-bold tracking-tight">{lesson.title}</h1>

        {/* Progress Bar */}
        <Progress value={isCompleted ? 100 : 0} className="h-1" />
      </div>

      {/* Video Embed (if available) */}
      {lesson.videoUrl && (
        <div className="aspect-video overflow-hidden rounded-lg">
          <YoutubeEmbed url={lesson.videoUrl} />
        </div>
      )}

      {/* Lesson Content */}
      <Card className="overflow-hidden">
        <div className="prose prose-slate max-w-none p-6 dark:prose-invert prose-headings:scroll-mt-20 prose-headings:font-semibold prose-a:font-normal prose-a:text-primary prose-pre:rounded-lg md:p-8 lg:prose-lg">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
            components={{
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "")
                return  match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-md border"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={cn("rounded-md bg-muted px-1 py-0.5", className)} {...props}>
                    {children}
                  </code>
                )
              },
              // Customize other markdown elements as needed
              h2: ({ children }) => <h2 className="mt-8 scroll-mt-20 text-2xl font-semibold">{children}</h2>,
              h3: ({ children }) => <h3 className="mt-6 scroll-mt-20 text-xl font-semibold">{children}</h3>,
              ul: ({ children }) => <ul className="my-6 ml-6 list-disc">{children}</ul>,
              ol: ({ children }) => <ol className="my-6 ml-6 list-decimal">{children}</ol>,
              li: ({ children }) => <li className="mt-2">{children}</li>,
              blockquote: ({ children }) => (
                <blockquote className="mt-6 border-l-2 border-primary pl-6 italic">{children}</blockquote>
              ),
            }}
          >
            {lesson.content}
          </ReactMarkdown>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href={lesson.prevLessonSlug || "/lessons"}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {lesson.prevLessonSlug ? "Previous Lesson" : "All Lessons"}
          </Link>
        </Button>

        {lesson.nextLessonSlug ? (
          <Button asChild>
            <Link href={`/lessons/${lesson.nextLessonSlug}`}>
              Next Lesson
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button onClick={handleComplete} disabled={isCompleted}>
            {isCompleted ? "Completed" : "Mark as Complete"}
            <CheckCircle className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
