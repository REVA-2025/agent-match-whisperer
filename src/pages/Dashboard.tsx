
import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { ClientList } from "@/components/dashboard/ClientList";
import { PropertyRecommendations } from "@/components/dashboard/PropertyRecommendations";
import { ClientConversations } from "@/components/conversations/ClientConversations";
import { User, MessageSquare, Home, Calendar } from "lucide-react";

const Dashboard = () => {
  return (
    <MainLayout>
      <div>
        <h1 className="text-2xl font-bold text-reva-navy mb-1">Real Estate AI Assistant</h1>
        <p className="text-gray-600 mb-6">Dashboard overview of client insights and property recommendations</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Active Clients"
            value="16"
            description="4 with recent activity"
            icon={<User className="h-5 w-5 text-reva-teal" />}
            trend={8}
            trendLabel="vs. last month"
          />
          <StatCard
            title="New Messages"
            value="23"
            description="5 unread conversations"
            icon={<MessageSquare className="h-5 w-5 text-reva-teal" />}
            trend={12}
            trendLabel="vs. last week"
          />
          <StatCard
            title="Property Matches"
            value="42"
            description="12 high-quality matches"
            icon={<Home className="h-5 w-5 text-reva-teal" />}
            trend={-3}
            trendLabel="vs. last week"
          />
          <StatCard
            title="Upcoming Viewings"
            value="8"
            description="Next: Tomorrow, 2:00 PM"
            icon={<Calendar className="h-5 w-5 text-reva-teal" />}
            trend={2}
            trendLabel="vs. last week"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PropertyRecommendations />
          </div>
          <div className="space-y-6">
            <ClientList />
            <ClientConversations />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
