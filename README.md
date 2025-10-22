# Database Security Hardening & Monitoring Dashboard

A Next.js dashboard that showcases real-time database security hardening controls, anomaly detection, compliance posture, and vulnerability management insights. The interface is built with modern React 19 features, Tailwind CSS v4 tokens, and shadcn-inspired UI primitives to provide a dark-themed command center for security teams.

## Features

- **Executive header** with quick database and time-range selectors plus alert indicators for at-a-glance monitoring. 【F:components/dashboard-header.tsx†L1-L60】
- **KPI metrics grid** that renders sparkline area charts via Recharts to track injection risk, mean-time-to-detect, incident response readiness, and compliance scores. 【F:components/kpi-metrics.tsx†L1-L120】
- **Security control drilldowns** describing hardening coverage, recent activity, and remediation recommendations with status-aware progress indicators. 【F:components/database-hardening.tsx†L1-L136】
- **Anomaly investigation workflow** using severity filters, scrollable event feeds, and quick actions for triage. 【F:components/anomaly-detection.tsx†L1-L144】
- **Compliance overview** that compares adherence across frameworks and highlights remediation gaps. 【F:components/compliance-overview.tsx†L1-L132】
- **Vulnerability assessment tabs** prioritizing findings with severity cues, CVE references, and follow-up controls. 【F:components/vulnerability-assessment.tsx†L1-L168】

## Tech Stack

- [Next.js 16](https://nextjs.org/) App Router with React 19 and TypeScript. 【F:package.json†L1-L54】
- Tailwind CSS v4 with design tokens defined in `app/globals.css`, including OKLCH color palette and radius utilities. 【F:app/globals.css†L1-L92】
- Radix UI primitives (dropdowns, tabs, dialogs) and lucide-react iconography for accessible interactions. 【F:package.json†L13-L46】
- Recharts for chart visualizations within KPI cards. 【F:components/kpi-metrics.tsx†L1-L120】

## Project Structure

```text
app/
  layout.tsx         # Root layout composition and theme provider usage
  page.tsx           # Dashboard page assembling feature sections
  globals.css        # Tailwind and theme token definitions
components/
  *.tsx              # Feature modules (KPI, hardening, compliance, etc.)
  ui/                # Reusable UI primitives from shadcn/tailwind
hooks/
  use-mobile.ts      # Responsive breakpoint helpers
  use-toast.ts       # Toast notification hook
public/
  ...                # Static assets served by Next.js
```

## Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Run the development server**

   ```bash
   pnpm dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000). Edits to files in `app/` or `components/` trigger hot reloads.

3. **Type check & lint**

   ```bash
   pnpm lint
   ```

4. **Build for production**

   ```bash
   pnpm build
   pnpm start
   ```

## Customization Notes

- Modify the static data arrays in the feature components to connect to real APIs or telemetry sources.
- Update `app/globals.css` to adjust the color system, typography, or motion tokens for branding needs. 【F:app/globals.css†L1-L92】
- Extend the UI kit under `components/ui/` to add new primitives consistent with the dashboard’s design language.

## License

This project does not currently include an explicit license. Add one if you plan to distribute or open-source the application.
