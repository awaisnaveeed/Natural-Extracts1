'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Plus, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Force scroll to top on initial load/reload
    window.scrollTo(0, 0);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full flex flex-col">
      {/* Top Scrolling Ticker Banner */}
      <div className="w-full bg-brand-primary text-white py-1.5 overflow-hidden">
        <div className="relative flex overflow-x-hidden text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
          <div className="animate-marquee whitespace-nowrap flex gap-8">
            {Array(15).fill(null).map((_, idx) => (
              <span key={idx} className="flex gap-8">
                <span>shop now</span>
                <span>100% organic cold pressed oils</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      

      {/* Pill Navbar */}
      <motion.div 
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="max-w-[1520px] w-[92%] md:w-[98%] mx-auto bg-[#F3E4CD] rounded-2xl md:rounded-[1rem] shadow-md px-3 md:px-4 py-3 md:py-2.5 flex items-center justify-between mt-4 md:mt-6"
      >
        
        {/* Left Section */}
        <div className="flex-1 flex items-center gap-2 md:gap-5 pl-1">
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-1 cursor-pointer"
          >
            <Menu className="w-7 h-7 text-black stroke-[2.5px]" />
          </button>
          
          {/* Desktop Shop Button */}
          <a 
            href="/#products" 
            className="hidden md:flex bg-[#f4f4f4] hover:bg-[#e5e5e5] text-black px-5 py-2.5 rounded-[0.75rem] font-medium items-center gap-1.5 text-[16px] tracking-tight lowercase transition-colors cursor-pointer"
          >
            shop <Plus className="w-3.5 h-3.5 stroke-[2px]" />
          </a>
          <Link href="/our-story" className="text-black font-medium hover:text-brand-primary hover:underline text-[18px] tracking-tight lowercase hidden md:block transition-all">
            our story
          </Link>
        </div>

        {/* Center Section - Logo */}
        <div className="flex-none shrink-0 flex justify-center items-center px-2">
          <Link href="/" className="relative w-36 h-10 md:w-56 md:h-12 lg:w-64 lg:h-12 flex items-center justify-center z-10">
            {/* Absolute oversized container prevents CSS scaling blur while keeping header height untouched */}
            <div className="absolute w-[400px] h-[140px] md:w-[420px] md:h-[140px] lg:w-[480px] lg:h-[160px] pointer-events-none">
              <Image 
                src="/Image_20260730_005603_946-removebg-preview.png" 
                alt="Natural Extracts Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex items-center justify-end gap-3 md:gap-6 pr-1">

          <motion.div
            key={cartCount}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 0.3 }}
          >
            <button 
              onClick={() => setIsCartOpen(true)}
              className="bg-brand-primary hover:bg-[#6c7853] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-[0.75rem] flex items-center gap-2 font-medium text-[13px] md:text-[16px] tracking-tight transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 stroke-[2.5px]" /> {cartCount}
            </button>
          </motion.div>
        </div>
        
      </motion.div>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col px-6 py-6"
          >
            {/* Top row with Close button, Logo, Cart */}
            <div className="flex items-center justify-between w-full">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm cursor-pointer"
              >
                <X className="w-6 h-6 text-black" />
              </button>
              
              {/* Logo in center */}
              <div className="relative w-28 h-8 flex items-center justify-center">
                 <div className="absolute w-[300px] h-[100px] pointer-events-none">
                   <Image src="/Image_20260730_005603_946-removebg-preview.png" alt="Logo" fill className="object-contain" priority />
                 </div>
              </div>

              <button 
                onClick={() => { setIsMobileMenuOpen(false); setIsCartOpen(true); }}
                className="bg-brand-primary text-white px-4 py-2 rounded-xl flex items-center gap-1.5 font-bold text-sm shadow-md cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 stroke-[2.5px]" /> {cartCount}
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-4 mt-12 w-full max-w-sm mx-auto">
              <a href="/#products" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between bg-[#f4f4f4] rounded-2xl px-6 py-5 font-bold text-xl lowercase hover:bg-[#e5e5e5] transition-colors">
                shop 
                <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
                  <Plus className="w-5 h-5 text-white stroke-[3px]" />
                </div>
              </a>
              <Link href="/our-story" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between bg-[#f4f4f4] rounded-2xl px-6 py-5 font-bold text-xl lowercase hover:bg-[#e5e5e5] transition-colors">
                our story 
                <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-white stroke-[3px]" />
                </div>
              </Link>
            </div>

            {/* Bottom Buttons */}
            <div className="mt-auto flex flex-col gap-3 w-full max-w-sm mx-auto pb-8">

              <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-brand-primary hover:bg-[#6c7853] text-white text-center rounded-3xl py-4 font-bold text-[17px] lowercase transition-colors">
                find in stores
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
