import { Link } from "@inertiajs/react"
import { Image } from "@radix-ui/react-avatar"
import { CheckCircle, ChefHat, Clock, Globe, GraduationCap, Hotel, Menu, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import TestimonialCard from "@/components/dashboard/testimonial-card"
import FeatureCard from "@/components/dashboard/feature-card"
import PricingCard from "@/components/dashboard/pricing-card"

export default function LandingPage() {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Transform Your Hospitality Training with Our E-Learning Platform
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Elevate your staff's skills and knowledge with our comprehensive e-learning solution designed
                                    specifically for hotels, restaurants, and hospitality businesses.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button size="lg" asChild>
                                    <Link href="/demo">Request a Demo</Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/learn-more">Learn More</Link>
                                </Button>
                            </div>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-background"
                                        >
                                            <Image
                                                src={`/placeholder.svg?height=32&width=32&text=${i}`}
                                                width={32}
                                                height={32}
                                                alt="User avatar"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Trusted by <span className="font-medium">2,000+</span> hospitality businesses
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto flex items-center justify-center">
                            <Image
                                src="/placeholder.svg?height=550&width=750&text=Hospitality+E-Learning+Platform"
                                width={750}
                                height={550}
                                alt="Hospitality E-Learning Platform"
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                                Trusted by Leading Hospitality Brands
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                Join thousands of hotels, restaurants, and hospitality businesses that trust our platform for their
                                training needs.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="flex items-center justify-center">
                                    <Image
                                        src={`/placeholder.svg?height=60&width=120&text=Brand+${i}`}
                                        width={120}
                                        height={60}
                                        alt={`Brand ${i} logo`}
                                        className="grayscale transition-all hover:grayscale-0"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                                Everything You Need for Hospitality Training
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                Our platform is designed specifically for the unique challenges of hospitality training, with features
                                that make learning engaging and effective.
                            </p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
                            <FeatureCard
                                icon={<Menu className="h-10 w-10 text-primary" />}
                                title="Customizable Courses"
                                description="Create tailored learning paths for different roles in your organization, from front desk to kitchen staff."
                            />
                            <FeatureCard
                                icon={<Globe className="h-10 w-10 text-primary" />}
                                title="Multilingual Support"
                                description="Deliver training in multiple languages to support your diverse workforce and international operations."
                            />
                            <FeatureCard
                                icon={<Users className="h-10 w-10 text-primary" />}
                                title="Team Management"
                                description="Easily organize learners by department, location, or role for targeted training and reporting."
                            />
                            <FeatureCard
                                icon={<CheckCircle className="h-10 w-10 text-primary" />}
                                title="Compliance Tracking"
                                description="Ensure all staff meet regulatory requirements with automated compliance tracking and reporting."
                            />
                            <FeatureCard
                                icon={<ChefHat className="h-10 w-10 text-primary" />}
                                title="Industry-Specific Content"
                                description="Access a library of hospitality-focused courses covering food safety, customer service, and more."
                            />
                            <FeatureCard
                                icon={<Clock className="h-10 w-10 text-primary" />}
                                title="Mobile Learning"
                                description="Enable staff to learn on the go with our mobile-friendly platform, perfect for busy hospitality environments."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">How It Works</div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                                Simple, Effective Training in 3 Steps
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                Get your team up to speed quickly with our intuitive platform designed for the fast-paced hospitality
                                industry.
                            </p>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                            {[
                                {
                                    step: "1",
                                    title: "Set Up Your Academy",
                                    description: "Customize your learning environment with your branding, courses, and team structure.",
                                    icon: <Hotel className="h-12 w-12 text-primary" />,
                                },
                                {
                                    step: "2",
                                    title: "Assign Training",
                                    description:
                                        "Easily assign relevant courses to individuals or teams based on their roles and needs.",
                                    icon: <Users className="h-12 w-12 text-primary" />,
                                },
                                {
                                    step: "3",
                                    title: "Track Progress",
                                    description: "Monitor completion rates, assessment scores, and identify areas for improvement.",
                                    icon: <GraduationCap className="h-12 w-12 text-primary" />,
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <div className="inline-block rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                                            Step {item.step}
                                        </div>
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Customers Say</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                Hear from hospitality professionals who have transformed their training with our platform.
                            </p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                            <TestimonialCard
                                quote="Since implementing HospitalityLearn, our staff onboarding time has decreased by 40% and our customer satisfaction scores have improved significantly."
                                author="Sarah Johnson"
                                role="Training Manager"
                                company="Grand Hotel Group"
                                rating={5}
                            />
                            <TestimonialCard
                                quote="The industry-specific content saved us countless hours in developing our own materials. Our team loves the mobile learning option for quick refreshers before shifts."
                                author="Michael Chen"
                                role="Restaurant Owner"
                                company="Fusion Bistro"
                                rating={5}
                            />
                            <TestimonialCard
                                quote="Compliance tracking used to be a nightmare for our multi-location operation. Now we can see at a glance who needs training and ensure everyone meets requirements."
                                author="Emma Rodriguez"
                                role="HR Director"
                                company="Coastal Resorts"
                                rating={4}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                        {[
                            { value: "98%", label: "Customer Satisfaction" },
                            { value: "40%", label: "Reduced Training Time" },
                            { value: "25k+", label: "Active Learners" },
                            { value: "200+", label: "Course Modules" },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center justify-center space-y-2 text-center">
                                <div className="text-4xl font-bold md:text-5xl">{stat.value}</div>
                                <div className="text-sm font-medium md:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Pricing</div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Transparent Pricing</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                Choose the plan that works best for your hospitality business, with no hidden fees.
                            </p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                            <PricingCard
                                title="Starter"
                                price="$299"
                                description="Perfect for small hospitality businesses just getting started with e-learning."
                                features={[
                                    "Up to 25 active users",
                                    "50+ hospitality courses",
                                    "Basic reporting",
                                    "Email support",
                                    "Mobile learning",
                                ]}
                                buttonText="Get Started"
                                buttonVariant="outline"
                            />
                            <PricingCard
                                title="Professional"
                                price="$599"
                                description="Ideal for growing hospitality businesses with multiple departments or locations."
                                features={[
                                    "Up to 100 active users",
                                    "150+ hospitality courses",
                                    "Advanced reporting",
                                    "Priority support",
                                    "Custom branding",
                                    "Compliance tracking",
                                ]}
                                buttonText="Get Started"
                                buttonVariant="default"
                                popular={true}
                            />
                            <PricingCard
                                title="Enterprise"
                                price="Custom"
                                description="For large hospitality groups with complex training needs across multiple properties."
                                features={[
                                    "Unlimited users",
                                    "Full course library",
                                    "Custom course creation",
                                    "Dedicated account manager",
                                    "API access",
                                    "Advanced integrations",
                                    "Multi-language support",
                                ]}
                                buttonText="Contact Sales"
                                buttonVariant="outline"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                                Ready to Transform Your Hospitality Training?
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                Join thousands of hospitality businesses that have revolutionized their training with our platform.
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm space-y-2">
                            <form className="grid gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                                <Button type="submit" size="lg">
                                    Request a Demo
                                </Button>
                            </form>
                            <p className="text-xs text-muted-foreground">
                                By submitting this form, you agree to our{" "}
                                <Link href="/terms" className="underline underline-offset-2">
                                    Terms & Conditions
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

