import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "./dashboard/DashboardLayout";
import { StatCard } from "./dashboard/StatCard";
import { OverviewChart } from "./dashboard/OverviewChart";
import { RecentActivity } from "./dashboard/RecentActivity";
import mockData from "@/data/mockCrmData.json";

export function DashboardShowcase() {
  const { overview, chartData, recentActivity } = mockData;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-foreground/70 mb-8">
            Momentum helps businesses automate workflows, improve customer experience, and grow faster.
          </p>
          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6 font-semibold" asChild>
            <a href="https://calendly.com/momentumai18/30min" target="_blank" rel="noopener noreferrer">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="max-w-6xl mx-auto rounded-2xl border border-border/50 shadow-2xl overflow-hidden bg-white h-[800px] flex transform perspective-1000 rotateX-0 scale-100 transition-all hover:shadow-3xl">
          <div className="flex-1 w-full h-full text-left pointer-events-none select-none">
            {/* We reuse the Dashboard Layout but ensure it fills this container, not the screen */}
            <DashboardLayout>
              <div className="space-y-6">
                {/* Top Stat Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <StatCard
                    title="Total Calls"
                    value={overview.totalCalls.value}
                    trend={overview.totalCalls.trend}
                    isPositive={overview.totalCalls.isPositive}
                  />
                  <StatCard
                    title="Avg Resolution Time"
                    value={overview.averageResolutionTime.value}
                    trend={overview.averageResolutionTime.trend}
                    isPositive={overview.averageResolutionTime.isPositive}
                  />
                  <StatCard
                    title="Customers"
                    value={overview.customers.value}
                    trend={overview.customers.trend}
                    isPositive={overview.customers.isPositive}
                  />
                  <StatCard
                    title="Success Rate"
                    value={overview.successRate.value}
                    trend={overview.successRate.trend}
                    isPositive={overview.successRate.isPositive}
                  />
                </div>

                {/* Middle Section: Chart & Recent Activity */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                  <OverviewChart data={chartData} />
                  <RecentActivity activities={recentActivity} />
                </div>
              </div>
            </DashboardLayout>
          </div>
        </div>
      </div>
    </section>
  );
}
