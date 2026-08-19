import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  isPositive?: boolean;
}

export function StatCard({ title, value, trend, isPositive }: StatCardProps) {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <span className="text-muted-foreground">...</span>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <div className="text-3xl font-bold">{value}</div>
          {trend && (
            <div className={`text-xs font-medium px-1.5 py-0.5 rounded-full ${
              isPositive ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
            }`}>
              {trend}
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-1.5 font-medium">vs last month</p>
      </CardContent>
    </Card>
  );
}
