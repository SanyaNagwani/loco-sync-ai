import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { Train, Clock, MapPin, Users } from "lucide-react";

interface TrainStatusCardProps {
  trainId: string;
  route: string;
  status: "on-time" | "delayed" | "emergency";
  currentLocation: string;
  nextStation: string;
  eta: string;
  passengers?: number;
  delay?: number;
}

export function TrainStatusCard({
  trainId,
  route,
  status,
  currentLocation,
  nextStation,
  eta,
  passengers,
  delay,
}: TrainStatusCardProps) {
  const getStatusText = () => {
    switch (status) {
      case "on-time": return "On Time";
      case "delayed": return `Delayed ${delay}min`;
      case "emergency": return "Emergency";
      default: return "Unknown";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-200 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Train className="h-5 w-5 text-primary" />
            {trainId}
          </CardTitle>
          <StatusBadge variant={status}>{getStatusText()}</StatusBadge>
        </div>
        <p className="text-sm text-muted-foreground">{route}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Current:</span>
          <span className="font-medium">{currentLocation}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Next:</span>
          <span className="font-medium">{nextStation}</span>
          <span className="text-muted-foreground">• ETA {eta}</span>
        </div>
        {passengers && (
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Passengers:</span>
            <span className="font-medium">{passengers}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}