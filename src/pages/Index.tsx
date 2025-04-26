
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "./Dashboard";

// This is just a wrapper component that redirects to the Dashboard component
const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Just ensure we're at the root path for the dashboard
    if (window.location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, [navigate]);
  
  return <Dashboard />;
};

export default Index;
