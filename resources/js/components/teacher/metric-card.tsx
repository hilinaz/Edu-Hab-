import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  title: string
  value: string
  description?: string
  trend?: string
  trendType?: "positive" | "negative" | "neutral"
}

export function MetricCard({ title, value, description, trend, trendType = "neutral" }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {trend && (
          <div
            className={cn(
              "flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium",
              trendType === "positive" && "text-emerald-600 bg-emerald-50",
              trendType === "negative" && "text-rose-600 bg-rose-50",
            )}
          >
            {trendType === "positive" && <ArrowUpIcon className="mr-1 h-3 w-3" />}
            {trendType === "negative" && <ArrowDownIcon className="mr-1 h-3 w-3" />}
            {trend}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
      </CardContent>
    </Card>
  )
}
