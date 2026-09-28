import React from 'react';
import { Sparkles, Droplets, Leaf } from 'lucide-react';

const benefits = [
  { text: "100% Organic", icon: <Leaf className="w-5 h-5" /> },
  { text: "Cold Pressed", icon: <Droplets className="w-5 h-5" /> },
  { text: "No Additives", icon: <Sparkles className="w-5 h-5" /> },
  { text: "Natural Extracts", icon: <Leaf className="w-5 h-5" /> },
  { text: "Premium Quality", icon: <Sparkles className="w-5 h-5" /> },
];

export default function Marquee() {
  return (
    <div className="w-full bg-brand-primary text-brand-light py-4 overflow-hidden border-y border-brand-dark/10">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-1">
          {[...benefits, ...benefits, ...benefits, ...benefits].map((item, idx) => (
            <span key={idx} className="flex items-center gap-3 text-lg font-medium tracking-wide uppercase">
              {item.icon}
              {item.text}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee whitespace-nowrap flex items-center gap-16 py-1" style={{ left: '100%' }}>
          {[...benefits, ...benefits, ...benefits, ...benefits].map((item, idx) => (
            <span key={idx} className="flex items-center gap-3 text-lg font-medium tracking-wide uppercase">
              {item.icon}
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
