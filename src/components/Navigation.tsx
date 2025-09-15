import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Train, 
  LayoutDashboard, 
  Route, 
  AlertTriangle, 
  Brain, 
  BarChart3, 
  Settings,
  Bell,
  User
} from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentPage?: string;
  onPageChange?: (page: string) => void;
}

export function Navigation({ currentPage = "dashboard", onPageChange }: NavigationProps) {
  const [notifications] = useState(3);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "trains", label: "Train Control", icon: Train },
    { id: "routing", label: "AI Routing", icon: Route },
    { id: "conflicts", label: "Conflicts", icon: AlertTriangle, badge: 3 },
    { id: "ai", label: "AI Analytics", icon: Brain },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav className="w-64 h-screen bg-card border-r border-border p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-8 p-2">
        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
          <Train className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-bold text-lg">RailControl AI</h1>
          <p className="text-xs text-muted-foreground">Traffic Management</p>
        </div>
      </div>

      <div className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "secondary" : "ghost"}
              className={`w-full justify-start gap-3 ${
                isActive ? "bg-primary/10 text-primary border-primary/20" : ""
              }`}
              onClick={() => onPageChange?.(item.id)}
            >
              <Icon className="h-4 w-4" />
              {item.label}
              {item.badge && (
                <Badge variant="destructive" className="ml-auto">
                  {item.badge}
                </Badge>
              )}
            </Button>
          );
        })}
      </div>

      <div className="border-t pt-4 space-y-2">
        <Button variant="ghost" className="w-full justify-start gap-3">
          <Bell className="h-4 w-4" />
          Notifications
          {notifications > 0 && (
            <Badge variant="destructive" className="ml-auto">
              {notifications}
            </Badge>
          )}
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3">
          <User className="h-4 w-4" />
          Profile
        </Button>
      </div>
    </nav>
  );
}