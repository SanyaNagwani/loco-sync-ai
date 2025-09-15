import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { AlertTriangle, Clock, Route, CheckCircle } from "lucide-react";

interface ConflictAlertProps {
  id: string;
  type: "track" | "platform" | "signal";
  severity: "low" | "medium" | "high";
  trains: string[];
  location: string;
  detectedAt: string;
  aiSuggestion: string;
  confidence: number;
}

export function ConflictAlert({
  id,
  type,
  severity,
  trains,
  location,
  detectedAt,
  aiSuggestion,
  confidence,
}: ConflictAlertProps) {
  const getSeverityVariant = () => {
    switch (severity) {
      case "high": return "emergency";
      case "medium": return "warning";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case "track": return <Route className="h-4 w-4" />;
      case "platform": return <CheckCircle className="h-4 w-4" />;
      case "signal": return <AlertTriangle className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  return (
    <Card className="border-destructive/20 bg-gradient-to-br from-destructive/5 to-destructive/10 animate-slide-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            {getTypeIcon()}
            {type.charAt(0).toUpperCase() + type.slice(1)} Conflict
          </CardTitle>
          <StatusBadge variant={getSeverityVariant()}>
            {severity.toUpperCase()}
          </StatusBadge>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          Detected {detectedAt}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium">Affected Trains:</p>
          <p className="text-sm text-muted-foreground">{trains.join(", ")}</p>
        </div>
        <div>
          <p className="text-sm font-medium">Location:</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
        <div className="border-t pt-4">
          <p className="text-sm font-medium text-primary mb-2">AI Recommendation:</p>
          <p className="text-sm text-muted-foreground mb-2">{aiSuggestion}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Confidence: {confidence}%
            </span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Modify
              </Button>
              <Button size="sm" className="bg-gradient-primary">
                Apply Solution
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}