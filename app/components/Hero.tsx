'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Droplet, Leaf, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimKey(prev => prev + 1);
    }, 4000); // Restarts the animation every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-[#1a2217] via-[#222e1f] to-[#3a4e35] pt-40 pb-20 px-6 overflow-hidden">
      
      {/* Decorative background blobs to mimic depth */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-[#f3e4cd]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center w-full z-10">
        
        {/* Left Copy Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 text-white flex flex-col items-start pl-2"
        >
          {/* Review Stars */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 text-[10px] md:text-[11px] font-black tracking-widest uppercase text-white mb-4"
          >
            <span className="text-yellow-400">★★★★★</span>
            <span>17,000+ 5 star reviews on amazon</span>
          </motion.div>
          
          {/* Bold Lowercase Headline */}
          <h1 className="text-[3.25rem] sm:text-6xl md:text-[5.5rem] font-black tracking-tighter leading-[0.85] lowercase">
            cold-pressed<br />
            oils<br />
            made{" "}
            <span key={animKey}>
              {"pure.".split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.5 + index * 0.15 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>
          
          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white text-base md:text-lg font-medium tracking-tight lowercase max-w-[22rem] mt-6 leading-tight"
          >
            nutritious & delicious oils that blend effortlessly into your kitchen and cooking.
          </motion.p>
          
          {/* Pill CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8"
          >
            <Link 
              href="#products" 
              className="bg-[#F3E4CD] text-brand-dark hover:bg-gray-100 px-8 py-3.5 rounded-full font-black text-[15px] uppercase tracking-tight shadow-md hover:scale-105 transition-all inline-block"
            >
              shop oils
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Floating Product Section */}
        <div className="lg:col-span-6 relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none z-0" />

          {/* Crisp, Simple Floating Elements (Noka Style) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-[10%] left-[10%] text-[#EFEADF] z-0 pointer-events-none"
          >
            <div className="animate-float-1">
              <Leaf className="w-10 h-10 drop-shadow-md" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-[15%] right-[10%] text-brand-primary z-0 pointer-events-none"
          >
            <div className="animate-float-2">
              <Leaf className="w-12 h-12 drop-shadow-md" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute top-[20%] right-[15%] z-0 pointer-events-none"
          >
            <div className="animate-float-3 flex items-center justify-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-full opacity-90 flex items-center justify-center shadow-md">
                <Droplet className="w-4 h-4 text-[#1a2217] fill-current" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="absolute bottom-[25%] left-[5%] z-0 pointer-events-none"
          >
            <div className="animate-float-1 flex items-center justify-center">
              <div className="w-10 h-10 bg-yellow-400 rounded-full opacity-90 flex items-center justify-center shadow-md">
                <Droplet className="w-5 h-5 text-[#1a2217] fill-current" />
              </div>
            </div>
          </motion.div>

          {/* Small Sparkles */}
          <div className="absolute top-[40%] right-[5%] text-[#f3e4cd] z-0 pointer-events-none">
            <div className="animate-pulse-glow">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>

          <div className="absolute top-[30%] left-[25%] text-yellow-400 z-0 pointer-events-none"
            style={{ animationDelay: '1s' }}
          >
            <div className="animate-pulse-glow">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>

          {/* Main Hero Image */}
          <div className="relative w-full h-full flex items-center justify-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative w-[320px] h-[440px] md:w-[400px] md:h-[540px]"
            >
              <div className="w-full h-full relative animate-float-3">
                <Image
                  src="/12.png"
                  alt="Cold Pressed Canola and Mustard Oils"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

      </div>
      
    </section>
  );
}
