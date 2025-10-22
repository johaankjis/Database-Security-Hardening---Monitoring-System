"use client"

import { Card } from "@/components/ui/card"
import { TrendingDown, Clock, Zap, Shield } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const metrics = [
  {
    label: "Injection Risk Reduction",
    value: "92%",
    target: "≥90%",
    status: "success",
    icon: Shield,
    trend: "+2%",
    data: [
      { time: "00:00", value: 88 },
      { time: "04:00", value: 89 },
      { time: "08:00", value: 90 },
      { time: "12:00", value: 91 },
      { time: "16:00", value: 91 },
      { time: "20:00", value: 92 },
    ],
    color: "hsl(var(--chart-2))",
  },
  {
    label: "Detection Time",
    value: "12m",
    target: "≤15m",
    status: "success",
    icon: Clock,
    trend: "-3m",
    data: [
      { time: "00:00", value: 15 },
      { time: "04:00", value: 14 },
      { time: "08:00", value: 13 },
      { time: "12:00", value: 13 },
      { time: "16:00", value: 12 },
      { time: "20:00", value: 12 },
    ],
    color: "hsl(var(--chart-1))",
  },
  {
    label: "Incident Response",
    value: "58%",
    target: "≥50%",
    status: "success",
    icon: Zap,
    trend: "+8%",
    data: [
      { time: "00:00", value: 50 },
      { time: "04:00", value: 52 },
      { time: "08:00", value: 54 },
      { time: "12:00", value: 55 },
      { time: "16:00", value: 57 },
      { time: "20:00", value: 58 },
    ],
    color: "hsl(var(--chart-3))",
  },
  {
    label: "Compliance Score",
    value: "96%",
    target: "≥95%",
    status: "success",
    icon: TrendingDown,
    trend: "+4%",
    data: [
      { time: "00:00", value: 92 },
      { time: "04:00", value: 93 },
      { time: "08:00", value: 94 },
      { time: "12:00", value: 95 },
      { time: "16:00", value: 95 },
      { time: "20:00", value: 96 },
    ],
    color: "hsl(var(--chart-2))",
  },
]

export function KpiMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.label} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-bold text-foreground">{metric.value}</h3>
                  <span className="text-sm text-accent font-medium">{metric.trend}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Target: {metric.target}</p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <Icon className="w-5 h-5 text-primary" />
              </div>
            </div>

            <div className="h-16 -mx-2">
              <ChartContainer
                config={{
                  value: {
                    label: metric.label,
                    color: metric.color,
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={metric.data}>
                    <defs>
                      <linearGradient id={`gradient-${metric.label}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={metric.color} stopOpacity={0.3} />
                        <stop offset="100%" stopColor={metric.color} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="time" hide />
                    <YAxis hide domain={["dataMin - 5", "dataMax + 5"]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={metric.color}
                      fill={`url(#gradient-${metric.label})`}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
