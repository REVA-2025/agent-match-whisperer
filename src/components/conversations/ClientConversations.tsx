
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import { clientsData } from "@/data/clients";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ClientConversations = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'unread' | 'recent'>('all');
  
  const filteredClients = clientsData
    .filter(client => {
      if (filter === 'all') return true;
      if (filter === 'unread') return client.hasUnreadMessages;
      if (filter === 'recent') return client.lastMessageDate > new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
      return true;
    })
    .slice(0, 4);
  
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Recent Conversations</CardTitle>
          <div className="flex space-x-2">
            <Button 
              variant={filter === 'all' ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilter('all')}
              className="text-xs h-7"
            >
              All
            </Button>
            <Button 
              variant={filter === 'unread' ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilter('unread')}
              className="text-xs h-7"
            >
              Unread
            </Button>
            <Button 
              variant={filter === 'recent' ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilter('recent')}
              className="text-xs h-7"
            >
              Recent
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-6">
        <div className="space-y-3">
          {filteredClients.map((client) => (
            <div 
              key={client.id}
              className={`flex items-start justify-between py-3 border-b border-gray-100 last:border-0 ${client.hasUnreadMessages ? 'bg-blue-50/50 -mx-6 px-6' : ''}`}
            >
              <div className="flex items-start">
                <Avatar className="h-10 w-10">
                  <div className="bg-reva-teal text-white flex items-center justify-center h-full w-full rounded-full text-sm font-medium">
                    {client.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </Avatar>
                <div className="ml-3">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-gray-900">{client.name}</p>
                    {client.hasUnreadMessages && (
                      <Badge className="ml-2 bg-blue-500 text-white h-5 px-1.5">New</Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {client.lastMessage && client.lastMessage.length > 50
                      ? `${client.lastMessage.substring(0, 50)}...`
                      : client.lastMessage}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {client.lastMessageDate.toLocaleDateString()} {client.lastMessageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
              <div className="flex">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0"
                  onClick={() => navigate(`/clients/${client.id}`)}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button 
          variant="outline"
          className="w-full mt-3 text-reva-teal border-reva-teal/20 hover:bg-reva-teal/10"
          onClick={() => navigate('/conversations')}
        >
          View All Conversations
        </Button>
      </CardContent>
    </Card>
  );
};
