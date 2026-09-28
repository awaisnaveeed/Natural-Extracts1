'use client';
import Link from 'next/link';
import { Instagram, Facebook, Leaf, ShieldCheck, Droplet } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#7f8D63] rounded-t-[3rem] pt-12 pb-10 px-4 md:px-8 mt-24 w-full overflow-hidden">
      {/* Main White Container */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[1400px] mx-auto bg-brand-light rounded-[3rem] p-10 md:p-16 mb-16 shadow-xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Newsletter Section 
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight lowercase mb-6 text-brand-dark">get 15% off your order!</h2>
            <p className="text-[13px] font-semibold lowercase mb-6 text-brand-dark max-w-sm leading-snug">
              sign up for email and get 15% off your first natural extracts order + free shipping over rs. 3,000*.
            </p>
            <p className="text-[10px] text-brand-dark/60 lowercase leading-tight max-w-sm">
              15% off is valid for new purchasers & on first purchase only. offer not valid on gift cards, shipping, or tax. by entering your email address, you consent to receive marketing and promotional communications and confirm that you have read and acknowledged our privacy policy.
            </p>
          </div>
          */}

          {/* Links Section */}
          <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 w-full max-w-4xl mx-auto">
            <div>
              <h4 className="font-bold text-xl mb-6 uppercase tracking-tight text-brand-dark">shop</h4>
              <ul className="space-y-4 text-[15px] text-brand-dark/70 font-medium lowercase">
                <li><Link href="#" className="hover:text-brand-primary transition-colors">all products</Link></li>
                <li><Link href="#" className="hover:text-brand-primary transition-colors">canola oil</Link></li>
                <li><Link href="#" className="hover:text-brand-primary transition-colors">mustard oil</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6 uppercase tracking-tight text-brand-dark">about us</h4>
              <ul className="space-y-4 text-[15px] text-brand-dark/70 font-medium lowercase">
                <li><Link href="#" className="hover:text-brand-primary transition-colors">our story</Link></li>
                <li><Link href="#" className="hover:text-brand-primary transition-colors">store locator</Link></li>
                <li><Link href="#" className="hover:text-brand-primary transition-colors">affiliate</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6 uppercase tracking-tight text-brand-dark">support</h4>
              <ul className="space-y-4 text-[15px] text-brand-dark/70 font-medium lowercase">
                <li><Link href="#" className="hover:text-brand-primary transition-colors">help & faq</Link></li>
                <li><Link href="#" className="hover:text-brand-primary transition-colors">contact</Link></li>
              </ul>
            </div>
            {/* 
            <div>
              <h4 className="font-bold text-xl mb-6 lowercase tracking-tight text-brand-dark">account</h4>
              <ul className="space-y-4 text-[15px] text-brand-dark/70 font-medium lowercase">
                <li><Link href="#" className="hover:text-brand-primary transition-colors">register</Link></li>
                <li><Link href="#" className="hover:text-brand-primary transition-colors">login</Link></li>
              </ul>
            </div>
            */}
            <div>
              <h4 className="font-bold text-xl mb-6 uppercase tracking-tight text-brand-dark">legal</h4>
              <ul className="space-y-4 text-[15px] text-brand-dark/70 font-medium lowercase">
                <li><Link href="/terms-of-use" className="hover:text-brand-primary transition-colors">terms of use</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-brand-primary transition-colors">privacy policy</Link></li>
                <li><Link href="/accessibility" className="hover:text-brand-primary transition-colors">accessibility</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Bottom Footer Section */}
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 pb-4">
        
        {/* Social Icons */}
        <div className="flex gap-2.5 w-full md:w-auto justify-center md:justify-start">
          <Link href="https://www.instagram.com/naturallextracts/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#F3E4CD] text-[#3A4726] rounded-full hover:bg-brand-light transition-colors shadow-md">
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
          <Link href="https://www.facebook.com/naturallextracts" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#F3E4CD] text-[#3A4726] rounded-full hover:bg-brand-light transition-colors shadow-md">
            <Facebook className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
          <Link href="https://wa.me/923362127999" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#F3E4CD] text-[#3A4726] rounded-full hover:bg-brand-light transition-colors shadow-md">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>
          </Link>
          <Link href="https://www.tiktok.com/@naturalextracts.pk" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#F3E4CD] text-[#3A4726] rounded-full hover:bg-brand-light transition-colors shadow-md">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </Link>
        </div>

        {/* Logo */}
        <div className="w-full md:flex-1 flex justify-center items-center pb-2 shrink-0 my-4 md:my-0">
          <Link href="/" className="relative w-36 h-10 md:w-56 md:h-12 lg:w-64 lg:h-12 flex items-center justify-center z-10">
            {/* Absolute oversized container prevents CSS scaling blur while keeping header height untouched */}
            <div className="absolute w-[400px] h-[140px] md:w-[420px] md:h-[140px] lg:w-[480px] lg:h-[160px] pointer-events-none">
              <Image 
                src="/Image_20260730_005603_946-removebg-preview.png" 
                alt="Natural Extracts Logo" 
                fill 
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Certifications & Copyright */}
        <div className="flex flex-col items-center md:items-end text-white w-full md:w-auto">
          <div className="flex flex-wrap justify-center md:justify-end gap-2.5 mb-4 items-center">
            <div className="px-3.5 py-1.5 border border-white/20 bg-white/5 rounded-full flex items-center gap-1.5 font-bold text-[9px] uppercase tracking-widest text-white shadow-sm backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
              <Droplet className="w-3 h-3 text-white fill-current" />
              pure
            </div>
            <div className="px-3.5 py-1.5 border border-white/20 bg-white/5 rounded-full flex items-center gap-1.5 font-bold text-[9px] uppercase tracking-widest text-white shadow-sm backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
              <Leaf className="w-3 h-3 text-white" />
              organic
            </div>
            <div className="px-3.5 py-1.5 border border-white/20 bg-white/5 rounded-full flex items-center gap-1.5 font-bold text-[9px] uppercase tracking-widest text-white shadow-sm backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
              <ShieldCheck className="w-3 h-3 text-white" />
              non-gmo
            </div>
          </div>
          <p className="text-[10px] font-bold tracking-widest lowercase opacity-80 mt-1 text-center md:text-right">&copy;natural extracts llc. 2020</p>
        </div>
      </div>
    </footer>
  );
}
