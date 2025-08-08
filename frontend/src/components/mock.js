// Mock data for Quantum FX bot packs
export const botPacks = [
  {
    id: 1,
    name: "Quantum FX Starter Pack",
    description: "Perfect for beginners entering the forex market",
    strategy: "Conservative Scalping",
    winRate: 78,
    monthlyReturn: "8-15%",
    riskLevel: "Low",
    price: 89,
    features: [
      "2 Premium EA Bots",
      "Basic Risk Management",
      "MT4/MT5 Compatible",
      "Email Support",
      "Setup Guide"
    ],
    performance: [65, 72, 78, 82, 78, 85],
    color: "from-cyan-400 to-blue-600"
  },
  {
    id: 2,
    name: "Quantum FX Pro Pack", 
    description: "Advanced strategies for experienced traders",
    strategy: "Trend Following + Grid",
    winRate: 85,
    monthlyReturn: "15-25%",
    riskLevel: "Medium",
    price: 189,
    features: [
      "5 Advanced EA Bots",
      "Dynamic Risk Management",
      "Multi-Timeframe Analysis",
      "Priority Support",
      "Live Training Session"
    ],
    performance: [78, 85, 88, 92, 89, 94],
    color: "from-purple-400 to-pink-600"
  },
  {
    id: 3,
    name: "Quantum FX Elite Pack",
    description: "Professional-grade bots for serious traders",
    strategy: "AI Neural Network",
    winRate: 92,
    monthlyReturn: "25-40%", 
    riskLevel: "Medium-High",
    price: 349,
    features: [
      "8 Elite EA Bots",
      "AI-Powered Signals",
      "News Filter Integration",
      "24/7 VIP Support",
      "Custom Optimization"
    ],
    performance: [88, 92, 95, 98, 94, 97],
    color: "from-emerald-400 to-teal-600"
  },
  {
    id: 4,
    name: "Quantum FX Master Pack",
    description: "Institutional-level trading algorithms",
    strategy: "Multi-Strategy Fusion",
    winRate: 95,
    monthlyReturn: "30-50%",
    riskLevel: "High",
    price: 499,
    features: [
      "12 Master EA Bots",
      "Prop Firm Optimized",
      "Advanced Money Management",
      "Dedicated Account Manager",
      "Monthly Strategy Updates"
    ],
    performance: [92, 95, 97, 99, 96, 98],
    color: "from-orange-400 to-red-600"
  },
  {
    id: 5,
    name: "Quantum FX Ultimate Pack",
    description: "Complete arsenal for professional traders",
    strategy: "Quantum Algorithm Suite",
    winRate: 97,
    monthlyReturn: "40-65%",
    riskLevel: "Very High",
    price: 750,
    features: [
      "15+ Premium EA Bots",
      "Quantum Signal System",
      "Risk-Free Guarantee",
      "White Glove Setup",
      "Lifetime Updates"
    ],
    performance: [94, 97, 98, 99, 98, 99],
    color: "from-violet-400 to-purple-600"
  }
];

export const cryptoWallets = {
  btc: "bc1q6je5ckrcvrr330hpcr6cjxcna9hn8cu2vvgyw8",
  eth: "0x66613185B54ddF4906369C688D6025560E244adA", 
  sol: "4zboUsvyeiJ3tfvn7mBN63W4ZuLebJ8YQGE5ZWmgXT8L"
};

export const saleEndTime = new Date(Date.now() + 28 * 60 * 60 * 1000); // 28 hours from now