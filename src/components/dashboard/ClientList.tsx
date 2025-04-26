
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { clientsData } from "@/data/clients";
import { useNavigate } from "react-router-dom";

export const ClientList = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'active' | 'new'>('all');
  
  const filteredClients = clientsData.filter((client) => {
    if (filter === 'all') return true;
    if (filter === 'active') return client.status === 'active';
    if (filter === 'new') return client.isNew;
    return true;
  }).slice(0, 5);

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Recent Clients</CardTitle>
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
              variant={filter === 'active' ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilter('active')}
              className="text-xs h-7"
            >
              Active
            </Button>
            <Button 
              variant={filter === 'new' ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilter('new')}
              className="text-xs h-7"
            >
              New
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-6">
        <div className="space-y-3">
          {filteredClients.map((client) => (
            <div 
              key={client.id} 
              className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <div className="bg-reva-teal text-white flex items-center justify-center h-full w-full rounded-full text-sm font-medium">
                    {client.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </Avatar>
                <div className="ml-3">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-gray-900">{client.name}</p>
                    {client.isNew && (
                      <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 border-blue-200 text-[10px] h-5">
                        New
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">
                    {client.lookingFor}, {client.budget}
                  </p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => navigate(`/clients/${client.id}`)}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <Button 
          variant="outline" 
          className="w-full mt-3 text-reva-teal border-reva-teal/20 hover:bg-reva-teal/10"
          onClick={() => navigate('/clients')}
        >
          View All Clients
        </Button>
      </CardContent>
    </Card>
  );
};
