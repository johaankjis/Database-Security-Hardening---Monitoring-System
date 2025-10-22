import { Shield, Database, Activity, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">Database Security Monitor</h1>
              <p className="text-sm text-muted-foreground">Real-time hardening & threat detection</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Database className="w-4 h-4" />
                  <span className="hidden sm:inline">All Databases</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Select Database</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Database className="w-4 h-4 mr-2" />
                  MySQL Production
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Database className="w-4 h-4 mr-2" />
                  Cassandra Cluster
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Database className="w-4 h-4 mr-2" />
                  MySQL Staging
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Activity className="w-4 h-4" />
                  <span className="hidden sm:inline">Last 12 hours</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Last hour</DropdownMenuItem>
                <DropdownMenuItem>Last 6 hours</DropdownMenuItem>
                <DropdownMenuItem>Last 12 hours</DropdownMenuItem>
                <DropdownMenuItem>Last 24 hours</DropdownMenuItem>
                <DropdownMenuItem>Last 7 days</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
