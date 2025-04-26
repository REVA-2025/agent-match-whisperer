
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-reva-cream">
      <div className="text-center max-w-md px-4">
        <div className="w-16 h-16 bg-reva-teal rounded-md mx-auto flex items-center justify-center mb-4">
          <div className="w-8 h-8 bg-reva-amber grid grid-cols-2 gap-[2px]">
            <div className="bg-reva-amber"></div>
            <div className="bg-reva-amber"></div>
            <div className="bg-reva-amber"></div>
            <div className="bg-reva-amber"></div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-reva-navy">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-6">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Button onClick={() => navigate("/")} className="bg-reva-teal hover:bg-reva-teal/90">
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
