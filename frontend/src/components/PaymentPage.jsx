import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Copy, Upload, CheckCircle, AlertCircle, Wallet, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useNavigate, useParams } from 'react-router-dom';
import { botPacks, cryptoWallets } from './mock';
import { useToast } from '../hooks/use-toast';

const PaymentPage = () => {
  const { packId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCrypto, setSelectedCrypto] = useState('btc');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Find the selected pack or handle bundle
  const selectedPack = packId === 'bundle' 
    ? {
        id: 'bundle',
        name: 'Complete Bundle - All 5 Packs',
        price: 1367,
        description: 'Ultimate collection of all Quantum FX trading bots'
      }
    : botPacks.find(pack => pack.id === parseInt(packId));

  if (!selectedPack) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Pack not found</h2>
          <Button onClick={() => navigate('/')}>Go Back</Button>
        </div>
      </div>
    );
  }

  const cryptoOptions = [
    { key: 'btc', name: 'Bitcoin', symbol: 'BTC', icon: '₿', color: 'from-orange-500 to-yellow-500' },
    { key: 'eth', name: 'Ethereum', symbol: 'ETH', icon: 'Ξ', color: 'from-blue-500 to-purple-500' },
    { key: 'sol', name: 'Solana', symbol: 'SOL', icon: '◎', color: 'from-purple-500 to-pink-500' }
  ];

  const handleCopyAddress = (address) => {
    navigator.clipboard.writeText(address);
    toast({
      title: "Address Copied!",
      description: "Wallet address has been copied to your clipboard.",
      duration: 2000,
    });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setUploadedFile(file);
        toast({
          title: "Screenshot Uploaded!",
          description: "Payment screenshot has been uploaded successfully.",
          duration: 2000,
        });
      } else {
        toast({
          title: "Invalid File",
          description: "Please upload an image file only.",
          duration: 3000,
        });
      }
    }
  };

  const handleSubmitPayment = async () => {
    if (!uploadedFile) {
      toast({
        title: "Upload Required",
        description: "Please upload your payment screenshot first.",
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Payment Submitted!",
      description: "Your payment verification is in progress. We'll contact you within 24 hours.",
      duration: 5000,
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="py-6 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-cyan-400 hover:text-cyan-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Packs
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Secure Payment</h1>
            <p className="text-gray-400">Complete your purchase with cryptocurrency</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-xl text-cyan-400">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-white">{selectedPack.name}</h3>
                      <p className="text-sm text-gray-400 mt-1">{selectedPack.description}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold text-green-400">${selectedPack.price}</span>
                    </div>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mt-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="text-blue-300 font-medium mb-1">Digital Delivery</p>
                        <p className="text-blue-200">
                          After payment verification, you'll receive download links within 24 hours via email.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Crypto Selection */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-xl text-purple-400 flex items-center gap-2">
                  <Wallet className="h-5 w-5" />
                  Select Cryptocurrency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {cryptoOptions.map((crypto) => (
                    <motion.button
                      key={crypto.key}
                      onClick={() => setSelectedCrypto(crypto.key)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedCrypto === crypto.key
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`text-2xl font-bold bg-gradient-to-r ${crypto.color} bg-clip-text text-transparent mb-2`}>
                        {crypto.icon}
                      </div>
                      <div className="text-sm font-medium text-white">{crypto.symbol}</div>
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Wallet Address */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-xl text-green-400">Payment Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">
                        {cryptoOptions.find(c => c.key === selectedCrypto)?.name} Address
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopyAddress(cryptoWallets[selectedCrypto])}
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </Button>
                    </div>
                    <p className="text-white font-mono text-sm break-all">
                      {cryptoWallets[selectedCrypto]}
                    </p>
                  </div>
                  
                  <div className="text-sm text-gray-300">
                    <p className="mb-2">
                      💰 <strong>Amount:</strong> ${selectedPack.price} USD worth of {cryptoOptions.find(c => c.key === selectedCrypto)?.symbol}
                    </p>
                    <p className="text-yellow-400">
                      ⚠️ Send the exact USD equivalent in crypto to avoid delays
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Screenshot Upload */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-xl text-orange-400">Upload Payment Proof</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="screenshot-upload"
                    />
                    <label 
                      htmlFor="screenshot-upload"
                      className="cursor-pointer flex flex-col items-center gap-2"
                    >
                      <Upload className="h-12 w-12 text-orange-400" />
                      <p className="text-white font-medium">Click to upload screenshot</p>
                      <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
                    </label>
                  </div>

                  {uploadedFile && (
                    <motion.div 
                      className="flex items-center gap-3 bg-green-900/20 border border-green-500/30 rounded-lg p-3"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <div>
                        <p className="text-green-300 font-medium">Screenshot uploaded</p>
                        <p className="text-green-200 text-sm">{uploadedFile.name}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <Button
              onClick={handleSubmitPayment}
              disabled={!uploadedFile || isSubmitting}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 text-white py-6 text-lg font-bold rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Submit Payment for Verification
                </>
              )}
            </Button>

            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-xl text-cyan-400 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  After Payment - Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    📱 <strong>After completing your payment, please DM us on any of our platforms:</strong>
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <motion.a
                      href="https://telegram.me/quantumfx_support"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 hover:border-blue-400 transition-all duration-200 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">TG</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Telegram</p>
                        <p className="text-blue-300 text-xs">@quantumfx_support</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30 hover:border-green-400 transition-all duration-200 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">WA</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">WhatsApp</p>
                        <p className="text-green-300 text-xs">+1 234 567 890</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://discord.gg/quantumfx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 hover:border-purple-400 transition-all duration-200 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">DC</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Discord</p>
                        <p className="text-purple-300 text-xs">QuantumFX Server</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="mailto:support@quantumfx.com"
                      className="flex items-center gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/30 hover:border-red-400 transition-all duration-200 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">@</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Email</p>
                        <p className="text-red-300 text-xs">support@quantumfx.com</p>
                      </div>
                    </motion.a>
                  </div>

                  <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4 mt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="text-cyan-300 font-medium mb-1">Quick Response Guarantee</p>
                        <p className="text-cyan-200">
                          We respond within <strong>2-4 hours</strong> and deliver your bots within <strong>24 hours</strong> after payment verification.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;