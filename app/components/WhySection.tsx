'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Droplet, Heart, Shield, Leaf, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CardData {
  id: number;
  category: string;
  title: string;
  description: string;
  bullets: string[];
  buttonText: string;
  buttonLink: string;
  icon: any;
  image?: string;
}

const CARDS: CardData[] = [
  {
    id: 0,
    category: 'extraction',
    title: 'cold pressed',
    description: 'traditionally extracted using the kachi ghani method without heat or friction to preserve 100% of the natural nutrients, enzymes, and original rich flavor.',
    bullets: ['zero heat extraction', 'preserves raw nutrients', 'authentic rich flavor'],
    buttonText: 'explore products',
    buttonLink: '#products',
    icon: Droplet,
    image: '/12.png',
  },
  {
    id: 1,
    category: 'wellness',
    title: 'heart healthy',
    description: 'our cold-pressed oils are packed with essential monounsaturated fats and high levels of omega-3/omega-6, promoting overall cardiovascular wellness.',
    bullets: ['rich in omega-3 & 6', 'lowers bad cholesterol', 'essential fatty acids'],
    buttonText: 'explore wellness',
    buttonLink: '#products',
    icon: Heart,
    image: '/12.png',
  },
  {
    id: 2,
    category: 'purity',
    title: 'no preservatives',
    description: 'completely pure and unadulterated. we strictly enforce zero usage of chemical solvents, artificial coloring, additives, or preservatives in our production.',
    bullets: ['no chemical solvents', 'zero artificial colors', '100% pure extraction'],
    buttonText: 'explore purity',
    buttonLink: '#products',
    icon: Shield,
    image: '/12.png',
  },
  {
    id: 3,
    category: 'sourcing',
    title: '100% vegan',
    description: 'sustainably sourced and purely plant-based. our extraction process is entirely cruelty-free and fits seamlessly into any conscious, healthy lifestyle.',
    bullets: ['purely plant-based', 'sustainably sourced', 'cruelty-free process'],
    buttonText: 'explore sourcing',
    buttonLink: '#products',
    icon: Leaf,
    image: '/12.png',
  },
];

export default function WhySection() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to center card (Canola)
  const [expandedIndex, setExpandedIndex] = useState(0); // For mobile accordion
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CARDS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
  };

  return (
    <section className="relative w-full py-20 md:py-24 bg-[#7f8D63] overflow-hidden flex flex-col items-center justify-center">
      
      {/* Curved Top SVG to match Noka layout */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 translate-y-[-1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px] fill-[#F3E4CD]">
          <path d="M0,0 C150,90 350,120 600,120 C850,120 1050,90 1200,0 L1200,120 L0,120 Z" transform="rotate(180 600 60)"></path>
        </svg>
      </div>

      {/* Giant Background Text for premium depth */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[140px] font-black text-white/5 uppercase select-none tracking-widest pointer-events-none hidden lg:block select-none">
        purity
      </div>

      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 left-[-10%] w-[350px] h-[350px] bg-[#3A4726]/30 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] bg-[#f3e4cd]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-[1400px] w-full mx-auto px-6 text-center mb-10 z-10 mt-6">
        {/* Top Tag */}
        <div className="inline-block bg-[#F3E4CD] text-[#3A4726] px-5 py-1.5 rounded-full font-black text-[13px] tracking-widest lowercase mb-4 shadow-sm">
          why choose us
        </div>
        
        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] lowercase text-white max-w-3xl mx-auto">
          pure oils engineered by nature
        </h2>
      </div>

      {/* 3D Stacked Carousel Container (Desktop Only) */}
      <div className="hidden md:flex relative w-full max-w-[1200px] h-[490px] items-center justify-center z-10 px-4">
        {CARDS.map((card, index) => {
          // Calculate relative offset of card from active card
          let offset = index - activeIndex;
          
          // Handle loop wrapping
          if (offset < -1) offset += CARDS.length;
          if (offset > 1) offset -= CARDS.length;
 
          const isActive = offset === 0;
          const isLeft = offset === -1;
          const isRight = offset === 1;
 
          // Don't render cards that are outside our visible scope
          if (!isActive && !isLeft && !isRight) return null;
 
          return (
            <motion.div
              key={card.id}
              onClick={() => {
                if (isLeft) handlePrev();
                if (isRight) handleNext();
              }}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -50) {
                  handleNext();
                } else if (swipe > 50) {
                  handlePrev();
                }
              }}
              style={{ originX: 0.5, originY: 0.5 }}
              animate={{
                x: isLeft ? (isMobile ? '-105%' : '-34%') : isRight ? (isMobile ? '105%' : '34%') : '0%',
                scale: isActive ? 1.0 : (isMobile ? 0.8 : 0.85),
                zIndex: isActive ? 30 : 10,
                opacity: isActive ? 1 : (isMobile ? 0 : 0.4),
                rotateY: isLeft ? 15 : isRight ? -15 : 0,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              className={`absolute w-full max-w-[92%] md:max-w-[900px] bg-[#F3E4CD] rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(58,71,38,0.12)] border border-[#3a4726]/5 overflow-hidden cursor-pointer transition-shadow ${
                isActive ? 'shadow-[0_30px_70px_rgba(58,71,38,0.18)] pointer-events-auto cursor-grab active:cursor-grabbing' : 'pointer-events-auto md:hover:opacity-80 md:hover:scale-[0.87]'
              }`}
            >
              <div className="grid grid-cols-12 w-full h-full">
                
                {/* Left Side: Photo/Graphic (Hidden on Mobile) */}
                <div className="hidden md:flex col-span-5 bg-gradient-to-b from-[#FAF6EE] to-[#EFEADF] relative overflow-hidden group items-center justify-center min-h-[420px]">
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3A4726_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  
                  {/* Glowing background fluid mesh (premium design) */}
                  <div className="absolute w-64 h-64 rounded-full bg-yellow-500/15 blur-3xl pointer-events-none top-0 left-0 group-hover:translate-x-4 transition-transform duration-1000" />
                  <div className="absolute w-64 h-64 rounded-full bg-[#7f8D63]/20 blur-3xl pointer-events-none bottom-0 right-0 group-hover:-translate-x-4 transition-transform duration-1000" />
 
                  <div className="relative w-full h-full flex items-center justify-center z-10 pt-4 pb-4">
                    {card.image && (
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="absolute inset-0 w-full h-full object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-700" 
                      />
                    )}
                  </div>
                </div>
 
                {/* Right Side: Details */}
                <div className="col-span-12 md:col-span-7 p-5 md:p-12 flex flex-col justify-between text-left min-h-[300px] md:min-h-[420px]">
                  <div>
                    {/* Category Title */}
                    <span className="text-[10px] md:text-xs font-black text-[#7f8D63] uppercase tracking-widest">{card.category}</span>
                    
                    {/* Card Title */}
                    <h3 className="text-2xl md:text-4xl font-black tracking-tighter leading-none lowercase text-brand-dark mt-1.5 md:mt-2 mb-3 md:mb-4">
                      {card.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-500 font-medium text-[13px] md:text-base leading-snug lowercase mb-5 md:mb-6">
                      {card.description}
                    </p>
 
                    {/* Bullet Points - Upgraded to Dynamic Panels */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {card.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-1.5 md:gap-2.5 text-[11px] md:text-sm font-bold text-[#3A4726] bg-[#7f8D63]/5 px-3 md:px-4 py-2 md:py-3 rounded-[1rem] border border-[#7f8D63]/10 hover:bg-[#7f8D63]/10 transition-colors duration-200 group/bullet">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7f8D63] group-hover/bullet:scale-125 transition-transform shrink-0" />
                          <span className="lowercase leading-none">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
 
                  {/* CTA Button - Upgraded to Solid Premium Button */}
                  <div className="pt-5 md:pt-8">
                    <Link
                      href={card.buttonLink}
                      className="inline-flex items-center gap-2 bg-[#3A4726] hover:bg-[#1A2217] text-white px-6 md:px-7 py-2.5 md:py-3 rounded-full font-black text-[12px] md:text-[13px] lowercase tracking-tight transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {card.buttonText} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
 
                </div>
 
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Vertical Accordion */}
      <div className="flex md:hidden flex-col w-full max-w-[500px] px-5 z-10 gap-3">
        {CARDS.map((card, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div 
              key={card.id} 
              className={`w-full bg-[#F3E4CD] rounded-[2rem] overflow-hidden transition-all duration-300 border border-[#3a4726]/5 ${isExpanded ? 'shadow-[0_15px_40px_rgba(58,71,38,0.15)]' : 'shadow-sm'}`}
            >
              {/* Accordion Header */}
              <button 
                onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/60 flex items-center justify-center shadow-sm text-[#3A4726]">
                    <card.icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-[#7f8D63] uppercase tracking-widest block">{card.category}</span>
                    <h3 className="text-[22px] font-black lowercase tracking-tight text-brand-dark leading-none mt-1">{card.title}</h3>
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full bg-white/40 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-90 bg-white/80 shadow-sm' : ''}`}>
                  <ChevronRight className="w-4 h-4 text-brand-dark" />
                </div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-6"
                  >
                    <p className="text-gray-600 font-medium text-[13px] lowercase mb-4 leading-snug">
                      {card.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {card.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-1.5 text-[11px] font-bold text-[#3A4726] bg-[#7f8D63]/5 px-3 py-2 rounded-full border border-[#7f8D63]/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7f8D63] shrink-0" />
                          <span className="lowercase leading-none">{bullet}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={card.buttonLink}
                      className="inline-flex items-center gap-2 bg-[#3A4726] hover:bg-[#1A2217] text-white px-6 py-3 rounded-full font-black text-[12px] lowercase tracking-tight transition-all duration-300 shadow-md"
                    >
                      {card.buttonText} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Control Deck: Arrow Nav + Centered Progress Dots (Desktop Only) */}
      <div className="hidden md:flex items-center gap-6 mt-8 z-10">
        <button
          onClick={handlePrev}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#F3E4CD] hover:text-[#3A4726] hover:border-[#F3E4CD] transition-all duration-300 hover:scale-110 active:scale-95 shadow-md"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        
        {/* Page Indicators */}
        <div className="flex gap-2">
          {CARDS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'w-8 bg-[#F3E4CD]' : 'w-2 bg-[#F3E4CD]/40 hover:bg-[#F3E4CD]/70'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#F3E4CD] hover:text-[#3A4726] hover:border-[#F3E4CD] transition-all duration-300 hover:scale-110 active:scale-95 shadow-md"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* Curved Bottom SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px] fill-[#F3E4CD]">
          <path d="M0,0 C150,90 350,120 600,120 C850,120 1050,90 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
}
