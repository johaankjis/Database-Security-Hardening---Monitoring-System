"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lock, Key, Shield, FileCheck, Clock, CheckCircle, AlertTriangle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const hardeningControls = [
  {
    name: "RBAC Enforcement",
    status: "active",
    coverage: 98,
    icon: Key,
    description: "Role-based access control",
    lastUpdated: "2 hours ago",
    recommendation: "Review 2 legacy accounts with elevated privileges",
  },
  {
    name: "Encryption at Rest",
    status: "active",
    coverage: 100,
    icon: Lock,
    description: "AES-256 encryption",
    lastUpdated: "1 day ago",
    recommendation: "All databases encrypted",
  },
  {
    name: "Encryption in Transit",
    status: "active",
    coverage: 100,
    icon: Shield,
    description: "TLS 1.3 enforced",
    lastUpdated: "3 hours ago",
    recommendation: "Configuration optimal",
  },
  {
    name: "Parameterized Queries",
    status: "active",
    coverage: 92,
    icon: FileCheck,
    description: "SQL injection prevention",
    lastUpdated: "30 minutes ago",
    recommendation: "Update 3 legacy stored procedures",
  },
]

const recentActivity = [
  {
    action: "RBAC Policy Updated",
    timestamp: "2 hours ago",
    status: "success",
    details: "Removed admin access for 2 inactive users",
  },
  {
    action: "TLS Certificate Renewed",
    timestamp: "3 hours ago",
    status: "success",
    details: "Production database TLS cert renewed",
  },
  {
    action: "Query Audit Completed",
    timestamp: "5 hours ago",
    status: "warning",
    details: "Found 3 non-parameterized queries",
  },
  {
    action: "Encryption Scan",
    timestamp: "1 day ago",
    status: "success",
    details: "All data at rest encrypted with AES-256",
  },
]

export function DatabaseHardening() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Database Hardening</h2>
          <p className="text-sm text-muted-foreground">Security controls & configuration</p>
        </div>
        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
          All Systems Active
        </Badge>
      </div>

      <Tabs defaultValue="controls" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="controls" className="flex-1">
            Security Controls
          </TabsTrigger>
          <TabsTrigger value="activity" className="flex-1">
            Recent Activity
          </TabsTrigger>
        </TabsList>

        <TabsContent value="controls" className="space-y-4 mt-4">
          {hardeningControls.map((control) => {
            const Icon = control.icon
            return (
              <div key={control.name} className="space-y-2 p-3 rounded-lg border border-border/50 bg-card/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded bg-secondary">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{control.name}</p>
                      <p className="text-xs text-muted-foreground">{control.description}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-foreground">{control.coverage}%</span>
                </div>
                <Progress value={control.coverage} className="h-1.5" />
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {control.lastUpdated}
                  </span>
                  {control.coverage < 100 && (
                    <span className="text-yellow-500 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {control.recommendation}
                    </span>
                  )}
                  {control.coverage === 100 && (
                    <span className="text-accent flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {control.recommendation}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </TabsContent>

        <TabsContent value="activity" className="space-y-3 mt-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-border/50 bg-card/30">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded ${
                  activity.status === "success" ? "bg-accent/10" : "bg-yellow-500/10"
                }`}
              >
                {activity.status === "success" ? (
                  <CheckCircle className="w-4 h-4 text-accent" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-medium text-foreground">{activity.action}</h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.timestamp}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{activity.details}</p>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="text-muted-foreground">Overall Security Posture: </span>
            <span className="font-semibold text-accent">Excellent</span>
          </div>
          <Button variant="outline" size="sm">
            View Full Report
          </Button>
        </div>
      </div>
    </Card>
  )
}
