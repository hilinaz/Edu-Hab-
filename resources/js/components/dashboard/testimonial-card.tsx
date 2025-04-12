import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Image } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  rating: number
}

export default function TestimonialCard({ quote, author, role, company, rating }: TestimonialCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <CardHeader>
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted"}`} />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="text-lg font-medium leading-relaxed">"{quote}"</blockquote>
      </CardContent>
      <CardFooter className="flex items-center gap-4 border-t pt-4">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
          <Image
            src={`/placeholder.svg?height=40&width=40&text=${author.charAt(0)}`}
            width={40}
            height={40}
            alt={author}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <div className="font-medium">{author}</div>
          <div className="text-sm text-muted-foreground">
            {role}, {company}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
