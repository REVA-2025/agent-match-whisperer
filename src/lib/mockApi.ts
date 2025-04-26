
// This is a mock API service for demonstration purposes
// In a real application, this would be replaced with actual API calls

interface ConversationResult {
  needs: {
    category: string;
    confidence: number;
    details: string;
  }[];
  keywords: { text: string; relevance: number }[];
  summary: string;
}

export const mockAnalyzeConversation = (conversationText: string): Promise<ConversationResult> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // Simple keyword detection to customize the response based on input
      const lowerText = conversationText.toLowerCase();
      
      let result: ConversationResult = {
        needs: [
          {
            category: "Location Preference",
            confidence: 90,
            details: "Client strongly prefers suburban locations with easy access to downtown."
          },
          {
            category: "Property Type",
            confidence: 85,
            details: "Looking for single-family homes with modern architecture and updated features."
          },
          {
            category: "Budget Constraints",
            confidence: 95,
            details: "Budget range of $600,000 - $800,000, with some flexibility for the right property."
          }
        ],
        keywords: [
          { text: "modern", relevance: 0.92 },
          { text: "suburban", relevance: 0.88 },
          { text: "schools", relevance: 0.85 },
          { text: "commute", relevance: 0.82 },
          { text: "updated kitchen", relevance: 0.78 },
          { text: "backyard", relevance: 0.75 }
        ],
        summary: "Client is looking for a modern single-family home in a suburban area with good schools. They have a budget of $600,000 - $800,000 and prioritize updated features and easy commute to downtown."
      };
      
      // Customize based on keywords
      if (lowerText.includes("condo") || lowerText.includes("apartment")) {
        result.needs[1] = {
          category: "Property Type",
          confidence: 92,
          details: "Specifically interested in condos or apartments in secure buildings with amenities."
        };
        result.keywords = [
          { text: "condo", relevance: 0.95 },
          { text: "amenities", relevance: 0.90 },
          { text: "security", relevance: 0.87 },
          { text: "downtown", relevance: 0.85 },
          { text: "view", relevance: 0.80 },
          { text: "walkable", relevance: 0.78 }
        ];
        result.summary = "Client is interested in condos or apartments in downtown areas with good security and amenities. They prioritize views and walkability to urban attractions.";
      }
      
      if (lowerText.includes("family") || lowerText.includes("children") || lowerText.includes("kids")) {
        result.needs.push({
          category: "Family Needs",
          confidence: 88,
          details: "Family with children seeking property in good school districts with family-friendly features."
        });
        
        if (!result.keywords.find(k => k.text === "schools")) {
          result.keywords.push({ text: "schools", relevance: 0.92 });
        }
        
        result.keywords.push({ text: "family room", relevance: 0.85 });
        result.keywords.push({ text: "safe neighborhood", relevance: 0.89 });
      }
      
      if (lowerText.includes("luxury") || lowerText.includes("high-end") || lowerText.includes("premium")) {
        result.needs[2] = {
          category: "Luxury Features",
          confidence: 94,
          details: "Client is interested in luxury properties with premium finishes and amenities."
        };
        
        result.keywords = result.keywords.filter(k => k.text !== "budget constraints");
        result.keywords.push({ text: "luxury", relevance: 0.96 });
        result.keywords.push({ text: "premium", relevance: 0.92 });
        result.keywords.push({ text: "high-end", relevance: 0.90 });
        
        if (!lowerText.includes("budget")) {
          result.needs = result.needs.filter(n => n.category !== "Budget Constraints");
        }
      }
      
      resolve(result);
    }, 1500);
  });
};

export const mockFetchPropertyRecommendations = (clientId: number, keywords: string[]): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 101,
          address: "123 Example Street",
          price: 750000,
          features: ["4 bed", "3 bath", "2,400 sqft"],
          matchScore: 93,
          image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
        },
        {
          id: 102,
          address: "456 Sample Avenue",
          price: 680000,
          features: ["3 bed", "2.5 bath", "1,950 sqft"],
          matchScore: 87,
          image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
        },
        {
          id: 103,
          address: "789 Test Boulevard",
          price: 820000,
          features: ["4 bed", "3.5 bath", "2,800 sqft"],
          matchScore: 82,
          image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
        }
      ]);
    }, 1000);
  });
};
