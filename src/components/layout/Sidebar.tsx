
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { User, MessageSquare, Home, Settings } from "lucide-react";

const navigationItems = [
  {
    name: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    name: "Clients",
    icon: User,
    href: "/clients",
  },
  {
    name: "Conversations",
    icon: MessageSquare,
    href: "/conversations",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="hidden md:flex h-screen flex-col bg-white border-r border-gray-200 w-64 fixed">
      <div className="flex-1 flex flex-col overflow-y-auto">
        <nav className="mt-8 flex-1 px-2 space-y-1">
          {navigationItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <Button
                key={item.name}
                variant="ghost"
                className={cn(
                  "w-full justify-start pl-3 mb-1",
                  isActive 
                    ? "bg-reva-teal/10 text-reva-teal font-medium" 
                    : "text-gray-600 hover:bg-gray-100"
                )}
                onClick={() => navigate(item.href)}
              >
                <item.icon className={cn("mr-3 h-5 w-5", isActive ? "text-reva-teal" : "text-gray-500")} />
                {item.name}
              </Button>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-reva-teal to-reva-amber flex items-center justify-center text-white font-semibold">
              JD
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Jane Doe</p>
            <p className="text-xs font-medium text-gray-500">Premium Agent</p>
          </div>
        </div>
      </div>
    </div>
  );
};
