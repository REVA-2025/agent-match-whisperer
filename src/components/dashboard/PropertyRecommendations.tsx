
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { recommendationsData } from "@/data/recommendations";
import { formatCurrency } from "@/lib/utils";

export const PropertyRecommendations = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">
          AI Property Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6">
        <Tabs defaultValue="trending">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="trending">Trending Properties</TabsTrigger>
            <TabsTrigger value="matches">Client Matches</TabsTrigger>
          </TabsList>
          
          <TabsContent value="trending" className="mt-4">
            <div className="space-y-4">
              {recommendationsData.trending.map((property) => (
                <div 
                  key={property.id} 
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white flex flex-col sm:flex-row"
                >
                  <div className="w-full sm:w-1/3">
                    <div 
                      className="h-48 sm:h-full bg-center bg-cover" 
                      style={{ backgroundImage: `url(${property.image})` }}
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{property.address}</h4>
                          <p className="text-sm text-gray-500">{property.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-reva-navy">{formatCurrency(property.price)}</p>
                          <div className="flex space-x-1 mt-1 justify-end">
                            {property.features.map((feature, i) => (
                              <Badge key={i} variant="outline" className="text-[10px]">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        {property.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-xs text-gray-500">
                        <span className="font-medium text-reva-teal">{property.viewsCount}</span> views last 24h
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">View Details</Button>
                        <Button size="sm">Share</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="matches" className="mt-4">
            <div className="space-y-4">
              {recommendationsData.matches.map((match) => (
                <div 
                  key={match.id} 
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-reva-teal/20 flex items-center justify-center text-reva-teal font-medium">
                          {match.clientName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-gray-900">{match.clientName}</h4>
                          <p className="text-xs text-gray-500">Match score: <span className="text-reva-teal font-medium">{match.matchScore}%</span></p>
                        </div>
                      </div>
                      <Badge 
                        className={
                          match.matchScore > 85 
                            ? "bg-green-100 text-green-800 hover:bg-green-100" 
                            : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                        }
                      >
                        {match.matchScore > 85 ? "High Match" : "Good Match"}
                      </Badge>
                    </div>
                    
                    <div className="mt-3 text-sm">
                      <p className="font-medium text-gray-700">Why this match:</p>
                      <ul className="mt-1 text-gray-600 list-disc list-inside">
                        {match.reasons.map((reason, i) => (
                          <li key={i} className="text-xs py-0.5">{reason}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 border-t border-gray-100 pt-3">
                      <div className="flex-1 sm:border-r border-gray-100 pr-0 sm:pr-4">
                        <p className="text-xs text-gray-500">Property</p>
                        <div className="flex mt-1">
                          <div className="h-12 w-12 bg-gray-200 rounded-md flex-shrink-0" style={{ backgroundImage: `url(${match.property.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                          <div className="ml-2">
                            <p className="text-sm font-medium text-gray-900">{match.property.address}</p>
                            <p className="text-xs text-gray-500">{formatCurrency(match.property.price)} • {match.property.features.join(' • ')}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <Button size="sm" variant="outline" className="flex-1">View Property</Button>
                        <Button size="sm" className="flex-1">Contact Client</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
