"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, ExternalLink } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const complianceStandards = [
  {
    name: "OWASP Top 10",
    score: 98,
    status: "compliant",
    items: { passed: 10, total: 10 },
    gaps: [],
    lastAudit: "2 days ago",
  },
  {
    name: "NIST Cybersecurity Framework",
    score: 94,
    status: "compliant",
    items: { passed: 47, total: 50 },
    gaps: ["Implement continuous monitoring", "Update incident response plan", "Enhance supply chain security"],
    lastAudit: "1 week ago",
  },
  {
    name: "PCI DSS",
    score: 96,
    status: "compliant",
    items: { passed: 23, total: 24 },
    gaps: ["Complete quarterly vulnerability scans"],
    lastAudit: "3 days ago",
  },
  {
    name: "HIPAA",
    score: 89,
    status: "warning",
    items: { passed: 16, total: 18 },
    gaps: ["Implement audit controls", "Update business associate agreements"],
    lastAudit: "5 days ago",
  },
]

export function ComplianceOverview() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Compliance Overview</h2>
          <p className="text-sm text-muted-foreground">Security standards alignment</p>
        </div>
        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
          96% Overall
        </Badge>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="overview" className="flex-1">
            Overview
          </TabsTrigger>
          <TabsTrigger value="gaps" className="flex-1">
            Compliance Gaps
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-5 mt-4">
          {complianceStandards.map((standard) => (
            <div key={standard.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {standard.status === "compliant" ? (
                    <CheckCircle className="w-4 h-4 text-accent" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                  )}
                  <span className="text-sm font-medium text-foreground">{standard.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">
                    {standard.items.passed}/{standard.items.total}
                  </span>
                  <span className="text-sm font-semibold text-foreground w-12 text-right">{standard.score}%</span>
                </div>
              </div>
              <Progress value={standard.score} className="h-1.5" />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Last audit: {standard.lastAudit}</span>
                {standard.gaps.length > 0 && (
                  <span className="text-yellow-500">{standard.gaps.length} gap(s) identified</span>
                )}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="gaps" className="space-y-3 mt-4">
          {complianceStandards
            .filter((standard) => standard.gaps.length > 0)
            .map((standard) => (
              <div key={standard.name} className="p-3 rounded-lg border border-border/50 bg-card/30">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-medium text-foreground">{standard.name}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {standard.gaps.length} gap(s)
                  </Badge>
                </div>
                <ul className="space-y-1.5">
                  {standard.gaps.map((gap, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <AlertCircle className="w-3 h-3 text-yellow-500 mt-0.5 shrink-0" />
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" size="sm" className="mt-2 h-7 text-xs">
                  View Remediation Plan
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </div>
            ))}
        </TabsContent>
      </Tabs>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-accent">96</p>
            <p className="text-xs text-muted-foreground">Controls Passed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-yellow-500">6</p>
            <p className="text-xs text-muted-foreground">Items Pending</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
