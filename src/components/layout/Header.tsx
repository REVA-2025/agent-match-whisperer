
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Bell, Menu } from "lucide-react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-reva-teal rounded-md flex items-center justify-center">
                  <div className="w-4 h-4 bg-reva-amber grid grid-cols-2 gap-[2px]">
                    <div className="bg-reva-amber"></div>
                    <div className="bg-reva-amber"></div>
                    <div className="bg-reva-amber"></div>
                    <div className="bg-reva-amber"></div>
                  </div>
                </div>
                <span className="ml-2 text-xl font-bold text-reva-navy">REVA</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-reva-teal focus:border-reva-teal sm:text-sm"
                  placeholder="Search clients or properties"
                  type="search"
                />
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <Button variant="ghost" size="icon" className="ml-2">
              <Bell className="h-5 w-5 text-gray-500" />
            </Button>
            <Button variant="ghost" size="icon" className="ml-2">
              <User className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-3 border-b border-gray-200">
          <div className="px-4 space-y-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="mobile-search"
                name="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-reva-teal focus:border-reva-teal sm:text-sm"
                placeholder="Search clients or properties"
                type="search"
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="w-1/2">
                <Bell className="h-4 w-4 mr-2" /> Notifications
              </Button>
              <Button variant="outline" size="sm" className="w-1/2">
                <User className="h-4 w-4 mr-2" /> Profile
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
