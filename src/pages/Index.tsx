import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Dashboard } from "@/pages/Dashboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Train, Zap, Brain, Shield, BarChart3, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const [currentView, setCurrentView] = useState<"landing" | "dashboard">("landing");
  const [currentPage, setCurrentPage] = useState("dashboard");

  if (currentView === "dashboard") {
    return (
      <div className="flex min-h-screen bg-background">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="flex-1 overflow-auto">
          <Dashboard />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Railway Control Center" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Train className="h-7 w-7 text-primary-foreground" />
            </div>
            <Badge variant="outline" className="text-primary border-primary/30">
              AI-Powered
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            RailControl AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Maximizing section throughput with AI-powered precise train traffic control
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-lg px-8 py-6 group"
              onClick={() => setCurrentView("dashboard")}
            >
              Enter Control Center
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-4 text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Real-time Control</h3>
                <p className="text-sm text-muted-foreground">Instant train monitoring and control</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-4 text-center">
                <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">AI Optimization</h3>
                <p className="text-sm text-muted-foreground">Smart scheduling and routing</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-4 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Conflict Prevention</h3>
                <p className="text-sm text-muted-foreground">Proactive safety management</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Railway Management Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive suite of tools for modern railway operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Dashboard",
                description: "Monitor all trains, tracks, and stations in real-time with interactive maps and status indicators.",
                icon: BarChart3,
              },
              {
                title: "AI Scheduling",
                description: "Intelligent train sequencing and routing optimization powered by machine learning algorithms.",
                icon: Brain,
              },
              {
                title: "Conflict Resolution",
                description: "Proactive detection and resolution of track conflicts, signal overlaps, and platform issues.",
                icon: Shield,
              },
              {
                title: "Predictive Analytics",
                description: "Forecast delays, maintenance needs, and operational bottlenecks before they occur.",
                icon: Zap,
              },
              {
                title: "Emergency Management",
                description: "Rapid incident response with automated emergency protocols and real-time coordination.",
                icon: Train,
              },
              {
                title: "Performance Reports",
                description: "Comprehensive analytics and reporting for operational efficiency and compliance.",
                icon: BarChart3,
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-200 animate-fade-in">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Railway Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the future of intelligent railway management
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary text-lg px-8 py-6"
            onClick={() => setCurrentView("dashboard")}
          >
            Access Control Center
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
