import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Shield, Clock, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { botPacks, saleEndTime } from './mock';
import CountdownTimer from './CountdownTimer';
import BotShowcase from './BotShowcase';
import HeroSection from './HeroSection';

const Home = () => {
  const navigate = useNavigate();

  const handleBuyPack = (packId) => {
    navigate(`/payment/${packId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Urgency Banner */}
      <motion.div 
        className="bg-gradient-to-r from-red-600/20 via-pink-500/20 to-red-600/20 border border-red-500/30 py-4"
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(239, 68, 68, 0.3)",
            "0 0 40px rgba(239, 68, 68, 0.6)", 
            "0 0 20px rgba(239, 68, 68, 0.3)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-4">
          <Zap className="h-6 w-6 text-red-400 animate-pulse" />
          <div className="text-center">
            <p className="text-red-300 font-bold text-lg">
              🔥 URGENT SALE: Limited Time Offer Ends In
            </p>
            <CountdownTimer targetDate={saleEndTime} />
          </div>
          <Zap className="h-6 w-6 text-red-400 animate-pulse" />
        </div>
      </motion.div>

      {/* Bot Showcase */}
      <BotShowcase botPacks={botPacks} onBuyPack={handleBuyPack} />

      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              3 Years of Trading Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Engineered and battle-tested over thousands of market hours. Our Quantum FX algorithms 
              adapt to changing market conditions with precision and reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <TrendingUp className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">MetaTrader Ready</h3>
              <p className="text-gray-300">Compatible with MT4/MT5 platforms. Easy installation and setup.</p>
            </motion.div>

            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Shield className="h-16 w-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Prop Firm Compatible</h3>
              <p className="text-gray-300">Designed to work with major prop firms and their risk management rules.</p>
            </motion.div>

            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Clock className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Instant Transfer</h3>
              <p className="text-gray-300">Digital delivery within 24 hours after payment verification.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <motion.h3 
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Quantum FX
            </motion.h3>
            <p className="text-gray-400 mb-6">Professional Forex Trading Solutions</p>
            
            <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-4">
              <Star className="h-4 w-4" />
              <span>© 2025 Quantum FX. Digital assets only.</span>
              <Star className="h-4 w-4" />
            </div>
            
            <p className="text-xs text-red-400 max-w-2xl mx-auto">
              ⚠️ Disclaimer: Trading involves risk. Past performance does not guarantee future results. 
              No refunds after digital delivery. Please trade responsibly.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;