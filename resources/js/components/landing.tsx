import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Link } from "@inertiajs/react"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  rating: number
}

function TestimonialCard({ quote, author, role, company, rating }: TestimonialCardProps) {
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
          <img
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

export default function Landing() {
  const testimonials = [
    {
      quote: "This product transformed our workflow with its intuitive design and powerful features.",
      author: "Jane Doe",
      role: "CEO",
      company: "TechCorp",
      rating: 5,
    },
    {
      quote: "An exceptional tool that delivers results beyond expectations.",
      author: "John Smith",
      role: "Product Manager",
      company: "InnovateNow",
      rating: 4,
    },
    {
      quote: "Reliable, efficient, and a game-changer for our team.",
      author: "Emily Johnson",
      role: "CTO",
      company: "FutureProof",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Welcome to Our Amazing Product
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Discover how our solution can help you achieve your goals with ease and efficiency.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <Button size="lg" asChild>
              <Link href={route("/login")}>Get Started</Link>

            </Button>
            <Button size="lg" variant="outline">
              <Link href={route("/login")}>Login</Link>
            </Button>
          </div>
        </div>
      </section>
{/* 
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Experience?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Join thousands of satisfied users and start your journey today.
          </p>
          <Button size="lg" id="get-started">
            Sign Up Now
          </Button>
        </div>
      </section> */}
    </div>
  )
}