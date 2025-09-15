import { DashboardStats } from "@/components/DashboardStats";
import { TrainStatusCard } from "@/components/TrainStatusCard";
import { ConflictAlert } from "@/components/ConflictAlert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Zap, RefreshCw } from "lucide-react";

export function Dashboard() {
  const mockTrains = [
    {
      trainId: "EXP-001",
      route: "Mumbai Central → Delhi Junction",
      status: "on-time" as const,
      currentLocation: "Vadodara Junction",
      nextStation: "Ahmedabad Junction",
      eta: "14:30",
      passengers: 342,
    },
    {
      trainId: "RAJ-205",
      route: "Chennai Central → Bangalore City",
      status: "delayed" as const,
      currentLocation: "Katpadi Junction",
      nextStation: "Bangalore East",
      eta: "16:45",
      passengers: 287,
      delay: 15,
    },
    {
      trainId: "SHT-089",
      route: "Kolkata → Patna Junction",
      status: "emergency" as const,
      currentLocation: "Danapur",
      nextStation: "Patna Junction",
      eta: "18:20",
      passengers: 198,
    },
  ];

  const mockConflicts = [
    {
      id: "CONF-001",
      type: "track" as const,
      severity: "high" as const,
      trains: ["EXP-007", "RAJ-143"],
      location: "Track 3, Platform 2 - New Delhi",
      detectedAt: "2 minutes ago",
      aiSuggestion: "Reroute EXP-007 to Platform 4. Delay estimated: 3 minutes.",
      confidence: 94,
    },
  ];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Control Center Dashboard</h1>
          <p className="text-muted-foreground">Real-time railway traffic management system</p>
        </div>
        <Button variant="outline" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh Data
        </Button>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Map Placeholder */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Live Railway Network
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive railway map</p>
                <p className="text-sm text-muted-foreground">Real-time train positions and routes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              AI Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
              <p className="text-sm font-medium text-success">Optimal Performance</p>
              <p className="text-xs text-muted-foreground mt-1">
                System efficiency at 94%. All major routes operating smoothly.
              </p>
            </div>
            <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
              <p className="text-sm font-medium text-warning">Weather Alert</p>
              <p className="text-xs text-muted-foreground mt-1">
                Heavy rainfall expected on Mumbai-Pune route. Adjust schedules accordingly.
              </p>
            </div>
            <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm font-medium text-primary">Predictive Maintenance</p>
              <p className="text-xs text-muted-foreground mt-1">
                Track 7 requires inspection within 48 hours.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Conflicts */}
      {mockConflicts.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Active Conflicts</h2>
          <div className="grid gap-4">
            {mockConflicts.map((conflict) => (
              <ConflictAlert key={conflict.id} {...conflict} />
            ))}
          </div>
        </div>
      )}

      {/* Train Status Cards */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Recent Train Updates</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockTrains.map((train) => (
            <TrainStatusCard key={train.trainId} {...train} />
          ))}
        </div>
      </div>
    </div>
  );
}