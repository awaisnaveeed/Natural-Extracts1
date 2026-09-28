'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Droplet, Heart, ShieldCheck, Flame, Utensils, Leaf, CheckCircle2 } from 'lucide-react';

export default function ProductFeatures() {
  return (
    <div className="w-full bg-[#F3E4CD] flex flex-col py-32 gap-40 overflow-hidden">
      
      {/* SECTION 1: Mustard Oil */}
      <section className="max-w-[1400px] w-full mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">
        {/* Decorative Editorial Section Number */}
        <div className="absolute left-6 top-0 text-[100px] font-black text-brand-dark/5 leading-none select-none pointer-events-none hidden xl:block">
          01 / primary
        </div>

        {/* Text Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 lg:pl-12 z-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#F3E4CD] text-[#3A4726] px-4.5 py-1.5 rounded-full font-black text-[11px] tracking-widest lowercase border border-[#3A4726]/10 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7f8D63] animate-pulse shrink-0" />
            100% pure & natural
          </div>
          <h2 className="text-5xl md:text-[5rem] font-black tracking-tighter leading-[0.8] lowercase text-brand-dark">
            traditional<br />
            mustard<br />
            oil
          </h2>
          <p className="text-gray-500 font-medium text-lg leading-snug lowercase max-w-[28rem] pt-2">
            our cold-pressed kachi ghani mustard oil brings authentic flavor and numerous health benefits to your kitchen. extracted without heat to preserve its natural goodness and pungent aroma. easy squeezy!
          </p>
        </motion.div>
        
        {/* Image & Bullets Column */}
        <div className="flex-[1.2] w-full relative md:h-[580px] flex flex-col md:flex-row items-center justify-end z-10 mt-12 md:mt-0">
          
          {/* Desktop-only Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block absolute md:left-[2%] lg:left-[-2%] xl:left-[2%] top-0 w-[220px] lg:w-[280px] xl:w-[320px] h-full z-30 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              <Image
                src="/WhatsApp_Image_2026-09-26_at_6.56.02_PM-removebg-preview.png"
                alt="Traditional Mustard Oil"
                fill
                className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)]"
              />
            </motion.div>
          </motion.div>

          {/* Square Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full md:absolute md:right-0 md:w-[75%] lg:w-[70%] md:h-full rounded-[2.5rem] md:rounded-[3rem] bg-[#3A4726] overflow-hidden shadow-[0_25px_60px_rgba(58,71,38,0.25)] border border-white/10 flex flex-col pt-8 pb-10 md:pt-0 md:pb-0"
          >
            {/* Subtle background overlays */}
            <div className="absolute inset-0 bg-[#7f8D63] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

            {/* Mobile-only Bottle Image (Flows inside the card naturally) */}
            <div className="relative w-full h-[320px] md:hidden z-10 mb-8 mt-4">
              <Image
                src="/WhatsApp_Image_2026-09-26_at_6.56.02_PM-removebg-preview.png"
                alt="Traditional Mustard Oil"
                fill
                className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)]"
              />
            </div>

            {/* Bullets container */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.5 } }
              }}
              className="relative z-20 flex flex-col justify-center h-full w-full px-8 sm:px-12 md:px-0 md:w-[85%] lg:w-[80%] mx-auto md:ml-auto md:mr-10"
            >
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 border-b border-white/10 pb-5 mb-5 group cursor-pointer transition-colors hover:border-white/30"
              >
                <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center bg-orange-500 shadow-[0_4px_15px_rgba(249,115,22,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-6 h-6 text-white stroke-[2]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/50 tracking-wider uppercase leading-none mb-0.5">aroma standard</span>
                  <span className="text-white font-bold text-sm md:text-base tracking-tight lowercase">rich, authentic aroma</span>
                </div>
              </motion.div>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 border-b border-white/10 pb-5 mb-5 group cursor-pointer transition-colors hover:border-white/30"
              >
                <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center bg-blue-500 shadow-[0_4px_15px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <Droplet className="w-6 h-6 text-white fill-current stroke-[2]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/50 tracking-wider uppercase leading-none mb-0.5">extraction method</span>
                  <span className="text-white font-bold text-sm md:text-base tracking-tight lowercase">kachi ghani extracted</span>
                </div>
              </motion.div>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 border-b border-white/10 pb-5 mb-5 group cursor-pointer transition-colors hover:border-white/30"
              >
                <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center bg-[#7f8D63] shadow-[0_4px_15px_rgba(127,141,99,0.3)] group-hover:scale-110 transition-transform duration-300 border border-white/15">
                  <Heart className="w-6 h-6 text-white stroke-[2]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/50 tracking-wider uppercase leading-none mb-0.5">health profile</span>
                  <span className="text-white font-bold text-sm md:text-base tracking-tight lowercase">heart healthy & nutritious</span>
                </div>
              </motion.div>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 group cursor-pointer transition-colors"
              >
                <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center bg-pink-500 shadow-[0_4px_15px_rgba(236,72,153,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-6 h-6 text-white stroke-[2]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/50 tracking-wider uppercase leading-none mb-0.5">purity standard</span>
                  <span className="text-white font-bold text-sm md:text-base tracking-tight lowercase">preserves natural antioxidants</span>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Canola Oil (Reversed Layout) */}
      <section className="max-w-[1400px] w-full mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 relative">
        {/* Decorative Editorial Section Number */}
        <div className="absolute right-6 top-0 text-[100px] font-black text-brand-dark/5 leading-none select-none pointer-events-none hidden xl:block">
          02 / secondary
        </div>

        {/* Text Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 lg:pr-12 z-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#F3E4CD] text-[#3A4726] px-4.5 py-1.5 rounded-full font-black text-[11px] tracking-widest lowercase border border-[#3A4726]/10 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7f8D63] animate-pulse shrink-0" />
            light & versatile
          </div>
          <h2 className="text-5xl md:text-[5rem] font-black tracking-tighter leading-[0.8] lowercase text-brand-dark">
            premium<br />
            canola<br />
            oil
          </h2>
          <p className="text-gray-500 font-medium text-lg leading-snug lowercase max-w-[28rem] pt-2">
            a heart-healthy cooking essential. our cold-pressed canola oil offers a mild flavor and high smoke point, making it perfect for everyday frying, baking, and sautéing without overpowering your food.
          </p>
        </motion.div>
        
        {/* Image & Bullets Column */}
        <div className="flex-[1.2] w-full relative md:h-[580px] flex flex-col md:flex-row items-center justify-start z-10 mt-12 md:mt-0">
          
          {/* Desktop-only Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block absolute md:right-[2%] lg:right-[-2%] xl:right-[2%] top-0 w-[220px] lg:w-[280px] xl:w-[320px] h-full z-30 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-full h-full relative"
            >
              <Image
                src="/2-removebg-preview.png"
                alt="Premium Canola Oil"
                fill
                className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)]"
              />
            </motion.div>
          </motion.div>

          {/* Square Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full md:absolute md:left-0 md:w-[75%] lg:w-[70%] md:h-full rounded-[2.5rem] md:rounded-[3rem] bg-[#1A2217] overflow-hidden shadow-[0_25px_60px_rgba(26,34,23,0.25)] border border-white/10 flex flex-col pt-8 pb-10 md:pt-0 md:pb-0"
          >
            {/* Subtle background overlays */}
            <div className="absolute inset-0 bg-[#7f8D63] opacity-15 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

            {/* Mobile-only Bottle Image (Flows inside the card naturally) */}
            <div className="relative w-full h-[320px] md:hidden z-10 mb-8 mt-4">
              <Image
                src="/2-removebg-preview.png"
                alt="Premium Canola Oil"
                fill
                className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)]"
              />
            </div>

            {/* Bullets container */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.5 } }
              }}
              className="relative z-20 flex flex-col justify-center h-full w-full px-8 sm:px-12 md:px-0 md:w-[85%] lg:w-[80%] mx-auto md:mr-auto md:ml-10"
            >
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ x: -6 }}
                className="flex items-center gap-4 border-b border-white/10 pb-5 mb-5 group cursor-pointer transition-colors hover:border-white/30"
              >
                <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center bg-orange-400 shadow-[0_4px_15px_rgba(251,146,60,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <Utensils className="w-6 h-6 text-white stroke-[2]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/50 tracking-wider uppercase leading-none mb-0.5">culinary profile</span>
                  <span className="text-white font-bold text-sm md:text-base tracking-tight lowercase">light, neutral flavor</span>
                </div>
              </motion.div>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ x: -6 }}
                className="flex items-center gap-4 border-b border-white/10 pb-5 mb-5 group cursor-pointer transition-colors hover:border-white/30"
              >
                <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center bg-red-500 shadow-[0_4px_15px_rgba(239,68,68,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-6 h-6 text-white fill-current stroke-[2]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/50 tracking-wider uppercase leading-none mb-0.5">cooking performance</span>
                  <span className="text-white font-bold text-sm md:text-base tracking-tight lowercase">high smoke point for frying</span>
                </div>
              </motion.div>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ x: -6 }}
                className="flex items-center gap-4 border-b border-white/10 pb-5 mb-5 group cursor-pointer transition-colors hover:border-white/30"
              >
                <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center bg-[#7f8D63] shadow-[0_4px_15px_rgba(127,141,99,0.3)] group-hover:scale-110 transition-transform duration-300 border border-white/15">
                  <Leaf className="w-6 h-6 text-white stroke-[2]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/50 tracking-wider uppercase leading-none mb-0.5">fatty acids</span>
                  <span className="text-white font-bold text-sm md:text-base tracking-tight lowercase">rich in omega-3 & omega-6</span>
                </div>
              </motion.div>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ x: -6 }}
                className="flex items-center gap-4 group cursor-pointer transition-colors"
              >
                <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center bg-blue-500 shadow-[0_4px_15px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-6 h-6 text-white stroke-[2]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/50 tracking-wider uppercase leading-none mb-0.5">lipid values</span>
                  <span className="text-white font-bold text-sm md:text-base tracking-tight lowercase">low in saturated fat</span>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
