import React from "react";
import { Card, CardContent } from "./ui/card";
import { Trophy, Calendar, Users, DollarSign } from "lucide-react";

const MetricCard: React.FC<{
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  className?: string;
}> = ({ icon: Icon, title, value, className = "" }) => (
  <Card className="relative overflow-hidden">
    <CardContent className="p-6">
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-lg ${className}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
      </div>
    </CardContent>
  </Card>
);

const MetricsDashboard = () => {
  const metrics = [
    {
      icon: DollarSign,
      title: "Total Spends",
      value: "$3,447,570",
      className: "bg-blue-500",
    },
    {
      icon: Calendar,
      title: "Total Events",
      value: "79",
      className: "bg-indigo-500",
    },
    {
      icon: Users,
      title: "Total Sponsors",
      value: "147",
      className: "bg-violet-500",
    },
    {
      icon: Trophy,
      title: "Total Winners",
      value: "2625 out of 9910",
      className: "bg-purple-500",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Statssss</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            icon={metric.icon}
            title={metric.title}
            value={metric.value}
            className={metric.className}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricsDashboard;
