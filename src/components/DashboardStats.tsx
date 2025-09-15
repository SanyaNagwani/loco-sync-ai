import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Train, AlertTriangle, Clock, Zap } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  trend?: "up" | "down" | "stable";
  variant?: "default" | "success" | "warning" | "danger";
}

function StatCard({ title, value, description, icon, variant = "default" }: StatCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "success": return "border-success/20 bg-gradient-to-br from-success/5 to-success/10";
      case "warning": return "border-warning/20 bg-gradient-to-br from-warning/5 to-warning/10";
      case "danger": return "border-destructive/20 bg-gradient-to-br from-destructive/5 to-destructive/10";
      default: return "border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10";
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case "success": return "text-success";
      case "warning": return "text-warning";
      case "danger": return "text-destructive";
      default: return "text-primary";
    }
  };

  return (
    <Card className={`${getVariantClasses()} transition-all duration-200 hover:shadow-lg animate-fade-in`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`${getIconColor()}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Active Trains"
        value={47}
        description="Currently running"
        icon={<Train className="h-4 w-4" />}
        variant="success"
      />
      <StatCard
        title="Conflicts Detected"
        value={3}
        description="Require attention"
        icon={<AlertTriangle className="h-4 w-4" />}
        variant="warning"
      />
      <StatCard
        title="Average Delay"
        value="2.3min"
        description="System-wide"
        icon={<Clock className="h-4 w-4" />}
        variant="default"
      />
      <StatCard
        title="AI Optimization"
        value="94%"
        description="Efficiency rating"
        icon={<Zap className="h-4 w-4" />}
        variant="success"
      />
    </div>
  );
}