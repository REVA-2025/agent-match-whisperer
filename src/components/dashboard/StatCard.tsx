
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  trend?: number;
  trendLabel?: string;
  className?: string;
}

export const StatCard = ({
  title,
  value,
  description,
  icon,
  trend,
  trendLabel,
  className,
}: StatCardProps) => {
  return (
    <Card className={cn("shadow-sm", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
            <p className="mt-1 text-xs text-gray-500">{description}</p>
            
            {trend !== undefined && (
              <div className="mt-2 flex items-center">
                <span
                  className={cn(
                    "text-xs font-medium",
                    trend > 0 ? "text-green-600" : "text-red-600"
                  )}
                >
                  {trend > 0 ? "+" : ""}{trend}%
                </span>
                <span className="ml-1 text-xs text-gray-500">{trendLabel}</span>
              </div>
            )}
          </div>
          <div className="bg-reva-teal/10 p-3 rounded-full">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
