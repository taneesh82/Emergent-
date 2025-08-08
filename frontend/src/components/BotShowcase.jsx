import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const BotShowcase = ({ botPacks, onBuyPack }) => {
  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Medium-High': return 'text-orange-400';
      case 'High': return 'text-red-400';
      case 'Very High': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  const PerformanceChart = ({ data, color }) => {
    const maxValue = Math.max(...data);
    
    return (
      <div className="h-16 flex items-end gap-1 mb-4">
        {data.map((value, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-t ${color} rounded-sm flex-1 opacity-80`}
            initial={{ height: 0 }}
            whileInView={{ height: `${(value / maxValue) * 100}%` }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="showcase" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Premium Bot Collection
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our professionally crafted trading algorithms, each optimized for different risk profiles and trading styles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {botPacks.map((pack, index) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${pack.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
                
                {/* Popular Badge for Elite Pack */}
                {pack.name.includes('Elite') && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-3 py-1 text-xs">
                      🔥 MOST POPULAR
                    </Badge>
                  </div>
                )}

                <CardContent className="p-6 relative">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {pack.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">${pack.price}</div>
                        <div className="text-xs text-gray-400">One-time</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{pack.description}</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-black/30 rounded-lg p-3">
                        <div className="text-xs text-gray-400 mb-1">Win Rate</div>
                        <div className="text-lg font-bold text-green-400">{pack.winRate}%</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-3">
                        <div className="text-xs text-gray-400 mb-1">Monthly Return</div>
                        <div className="text-lg font-bold text-blue-400">{pack.monthlyReturn}</div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Chart */}
                  <div className="mb-6">
                    <div className="text-xs text-gray-400 mb-2 flex items-center gap-2">
                      <TrendingUp className="h-3 w-3" />
                      6-Month Performance
                    </div>
                    <PerformanceChart data={pack.performance} color={pack.color} />
                  </div>

                  {/* Strategy & Risk */}
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Strategy:</span>
                      <span className="text-sm text-cyan-400 font-medium">{pack.strategy}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Risk Level:</span>
                      <span className={`text-sm font-medium ${getRiskColor(pack.riskLevel)}`}>
                        {pack.riskLevel}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-sm text-gray-400 mb-3 flex items-center gap-2">
                      <Star className="h-3 w-3" />
                      Features
                    </div>
                    <ul className="space-y-2">
                      {pack.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-xs text-gray-300 flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Buy Button */}
                  <Button 
                    onClick={() => onBuyPack(pack.id)}
                    className={`w-full bg-gradient-to-r ${pack.color} hover:scale-105 text-white font-semibold py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group`}
                  >
                    <Zap className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                    Buy Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bundle Offer */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-purple-900/30 border border-purple-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              💎 Complete Collection Bundle
            </h3>
            <p className="text-gray-300 mb-6">
              Get all 5 premium bot packs for the ultimate trading advantage. 
              <span className="text-green-400 font-semibold"> Save $500!</span>
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-3xl font-bold text-red-400 line-through">$1,867</span>
              <span className="text-4xl font-bold text-green-400">$1,367</span>
              <Badge className="bg-red-500 text-white">27% OFF</Badge>
            </div>
            <Button 
              onClick={() => onBuyPack('bundle')}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-12 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <Star className="mr-2 h-5 w-5" />
              Get Complete Bundle
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BotShowcase;