import { DashboardHeader } from "@/components/dashboard-header"
import { KpiMetrics } from "@/components/kpi-metrics"
import { DatabaseHardening } from "@/components/database-hardening"
import { AnomalyDetection } from "@/components/anomaly-detection"
import { ComplianceOverview } from "@/components/compliance-overview"
import { VulnerabilityAssessment } from "@/components/vulnerability-assessment"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <KpiMetrics />
        <div className="grid gap-6 lg:grid-cols-2">
          <DatabaseHardening />
          <AnomalyDetection />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <ComplianceOverview />
          <VulnerabilityAssessment />
        </div>
      </main>
    </div>
  )
}
