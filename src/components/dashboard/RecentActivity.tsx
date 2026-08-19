import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, UserCheck, Settings } from "lucide-react";

interface Activity {
  id: string;
  title: string;
  timestamp: string;
  icon: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "check-circle":
        return <CheckCircle2 className="h-5 w-5 text-emerald-500" />;
      case "alert-triangle":
        return <AlertTriangle className="h-5 w-5 text-rose-500" />;
      case "user-check":
        return <UserCheck className="h-5 w-5 text-blue-500" />;
      case "settings":
        return <Settings className="h-5 w-5 text-slate-500" />;
      default:
        return <CheckCircle2 className="h-5 w-5 text-slate-500" />;
    }
  };

  return (
    <Card className="col-span-1 border-border/50 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-4">
              <div className="mt-0.5 bg-slate-50 p-2 rounded-full h-fit">
                {getIcon(activity.icon)}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-900">{activity.title}</span>
                <span className="text-xs text-muted-foreground mt-1">{activity.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
