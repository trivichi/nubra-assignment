import React from 'react';
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const BusinessImpact = () => {
  const metrics = [
    {
      metric: "Market Size",
      value: "$5.2B",
      growth: "+24% YoY",
      icon: DollarSign,
      details: "Total Addressable Market for Algo Trading in India"
    },
    {
      metric: "User Acquisition",
      value: "45K",
      growth: "+15% MoM",
      icon: Users,
      details: "Projected Monthly Active Users by 2024"
    },
    {
      metric: "Time Saved",
      value: "12.5hrs",
      growth: "per week",
      icon: Clock,
      details: "Average time saved per user through automation"
    },
    {
      metric: "Revenue Impact",
      value: "₹8.4Cr",
      growth: "Year 1",
      icon: TrendingUp,
      details: "Projected revenue from premium features"
    }
  ];

  return (
    <div className="slide-animate-in">
      <h2 className="text-2xl font-bold mb-6">Business Impact</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((item, index) => (
          <div key={index} className="roi-card roi-positive">
            <item.icon className="w-6 h-6 text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold mb-1">{item.value}</h3>
            <p className="text-green-500 text-sm mb-2">{item.growth}</p>
            <p className="text-gray-400 text-sm">{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessImpact;