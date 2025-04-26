
export const recommendationsData = {
  trending: [
    {
      id: 1,
      address: "123 Lakeside Drive",
      location: "Lakeview, Seattle",
      price: 795000,
      features: ["4 bed", "3 bath", "2,450 sqft"],
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Stunning waterfront property with panoramic lake views, modern finishes, and a private dock. Perfect for nature lovers who still want to be close to the city.",
      viewsCount: 42,
      savedCount: 15
    },
    {
      id: 2,
      address: "456 Highland Avenue",
      location: "Westridge, Seattle",
      price: 1250000,
      features: ["5 bed", "4.5 bath", "3,800 sqft"],
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Luxurious hilltop estate featuring panoramic city views, a chef's kitchen, home theater, and resort-style backyard with infinity pool.",
      viewsCount: 38,
      savedCount: 22
    }
  ],
  matches: [
    {
      id: 1,
      clientName: "Michael Johnson",
      matchScore: 92,
      reasons: [
        "Matches budget range of $600K-$800K",
        "Has the 3 bedrooms client is looking for",
        "Modern design with open floor plan as mentioned in conversations",
        "Located in good school district as required",
        "Has natural light from large windows"
      ],
      property: {
        id: 101,
        address: "567 Maple Lane, Northside",
        price: 725000,
        features: ["3 bed", "2.5 bath", "2,100 sqft"],
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      }
    },
    {
      id: 2,
      clientName: "Jennifer Lee",
      matchScore: 87,
      reasons: [
        "Luxury waterfront property matching high-end requirements",
        "Within extended budget range (client mentioned up to $1.5M)",
        "Has the premium finishes mentioned in conversations",
        "Building includes gym and spa as requested",
        "10 minute drive to financial district"
      ],
      property: {
        id: 102,
        address: "888 Harbor View, Downtown",
        price: 1395000,
        features: ["2 bed", "3 bath", "1,850 sqft"],
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      }
    },
    {
      id: 3,
      clientName: "Sarah Martinez",
      matchScore: 78,
      reasons: [
        "Modern townhouse in target suburb location",
        "Within budget at $635,000",
        "Features renovated kitchen as requested",
        "Includes private garden and terrace",
        "5 minutes walk to transit station"
      ],
      property: {
        id: 103,
        address: "425 Oak Street, Greenwood",
        price: 635000,
        features: ["2 bed", "2.5 bath", "1,750 sqft"],
        image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      }
    }
  ]
};
