import { Link } from "@inertiajs/react"
import { AlertCircle, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

type StatusCode = 503 | 500 | 404 | 403;

interface ErrorPageProps {
  status: StatusCode;
}

export function ErrorPage({ status }: ErrorPageProps) {
    const title = {
        503: '503: Service Unavailable',
        500: '500: Server Error',
        404: '404: Page Not Found',
        403: '403: Forbidden',
      }[status]
    
      const description = {
        503: 'Sorry, we are doing some maintenance. Please check back soon.',
        500: 'Whoops, something went wrong on our servers.',
        404: 'Sorry, the page you are looking for could not be found.',
        403: 'Sorry, you are forbidden from accessing this page.',
      }[status]
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="rounded-full bg-red-100 p-6">
          <AlertCircle className="h-16 w-16 text-red-600" />
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Oops! Something went wrong
        </h1>

        <p className="mt-4 text-base text-muted-foreground">
          We apologize for the inconvenience. The page you were trying to access encountered an error.
        </p>

        <div className="mt-8">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
