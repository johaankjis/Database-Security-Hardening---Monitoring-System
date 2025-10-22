"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, XCircle, Clock, Eye, Ban } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const anomalies = [
  {
    id: 1,
    type: "Unauthorized Access Attempt",
    severity: "high",
    database: "MySQL Production",
    timestamp: "2 minutes ago",
    status: "blocked",
    details: "Failed login from IP 192.168.1.45",
    source: "192.168.1.45",
  },
  {
    id: 2,
    type: "Unusual Query Pattern",
    severity: "medium",
    database: "Cassandra Cluster",
    timestamp: "8 minutes ago",
    status: "investigating",
    details: "High volume of SELECT queries detected",
    source: "app-server-03",
  },
  {
    id: 3,
    type: "Privilege Escalation",
    severity: "high",
    database: "MySQL Production",
    timestamp: "15 minutes ago",
    status: "blocked",
    details: "Attempted GRANT ALL PRIVILEGES",
    source: "192.168.1.78",
  },
  {
    id: 4,
    type: "Data Exfiltration",
    severity: "critical",
    database: "MySQL Production",
    timestamp: "23 minutes ago",
    status: "blocked",
    details: "Large data export attempt detected",
    source: "192.168.1.99",
  },
  {
    id: 5,
    type: "Schema Modification",
    severity: "low",
    database: "MySQL Staging",
    timestamp: "45 minutes ago",
    status: "resolved",
    details: "Authorized ALTER TABLE operation",
    source: "admin-console",
  },
]

const severityConfig = {
  critical: { color: "text-destructive", bg: "bg-destructive/10", icon: XCircle, count: 1 },
  high: { color: "text-orange-500", bg: "bg-orange-500/10", icon: AlertTriangle, count: 2 },
  medium: { color: "text-yellow-500", bg: "bg-yellow-500/10", icon: AlertTriangle, count: 1 },
  low: { color: "text-blue-500", bg: "bg-blue-500/10", icon: CheckCircle, count: 1 },
}

const statusConfig = {
  blocked: { label: "Blocked", variant: "default" as const },
  investigating: { label: "Investigating", variant: "secondary" as const },
  resolved: { label: "Resolved", variant: "outline" as const },
}

export function AnomalyDetection() {
  const [selectedSeverity, setSelectedSeverity] = useState<string>("all")

  const filteredAnomalies =
    selectedSeverity === "all" ? anomalies : anomalies.filter((a) => a.severity === selectedSeverity)

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Anomaly Detection</h2>
          <p className="text-sm text-muted-foreground">Real-time threat monitoring</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Avg: 12m</span>
        </div>
      </div>

      <Tabs value={selectedSeverity} onValueChange={setSelectedSeverity} className="w-full">
        <TabsList className="w-full grid grid-cols-5">
          <TabsTrigger value="all">All ({anomalies.length})</TabsTrigger>
          <TabsTrigger value="critical" className="text-destructive data-[state=active]:text-destructive">
            Critical ({severityConfig.critical.count})
          </TabsTrigger>
          <TabsTrigger value="high" className="text-orange-500 data-[state=active]:text-orange-500">
            High ({severityConfig.high.count})
          </TabsTrigger>
          <TabsTrigger value="medium" className="text-yellow-500 data-[state=active]:text-yellow-500">
            Medium ({severityConfig.medium.count})
          </TabsTrigger>
          <TabsTrigger value="low" className="text-blue-500 data-[state=active]:text-blue-500">
            Low ({severityConfig.low.count})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedSeverity} className="mt-4">
          <ScrollArea className="h-[350px] pr-4">
            <div className="space-y-3">
              {filteredAnomalies.map((anomaly) => {
                const severityStyle = severityConfig[anomaly.severity as keyof typeof severityConfig]
                const statusStyle = statusConfig[anomaly.status as keyof typeof statusConfig]
                const SeverityIcon = severityStyle.icon

                return (
                  <div
                    key={anomaly.id}
                    className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex items-center justify-center w-8 h-8 rounded ${severityStyle.bg}`}>
                        <SeverityIcon className={`w-4 h-4 ${severityStyle.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-sm font-medium text-foreground">{anomaly.type}</h4>
                          <Badge variant={statusStyle.variant} className="text-xs">
                            {statusStyle.label}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{anomaly.details}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span>{anomaly.database}</span>
                            <span>•</span>
                            <span>{anomaly.timestamp}</span>
                            <span>•</span>
                            <span className="font-mono">{anomaly.source}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon-sm">
                              <Eye className="w-3.5 h-3.5" />
                            </Button>
                            <Button variant="ghost" size="icon-sm">
                              <Ban className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xl font-bold text-destructive">{severityConfig.critical.count}</p>
            <p className="text-xs text-muted-foreground">Critical Threats</p>
          </div>
          <div>
            <p className="text-xl font-bold text-accent">{anomalies.filter((a) => a.status === "blocked").length}</p>
            <p className="text-xs text-muted-foreground">Blocked</p>
          </div>
          <div>
            <p className="text-xl font-bold text-foreground">12m</p>
            <p className="text-xs text-muted-foreground">Avg Detection</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
