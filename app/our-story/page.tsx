'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#FAF9F6] overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-32 px-6 md:px-12 flex flex-col items-center text-center z-10 bg-gradient-to-br from-[#1a2217] via-[#222e1f] to-[#3a4e35] rounded-b-[3rem] md:rounded-b-[5rem] shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full font-black text-[11px] tracking-widest lowercase border border-white/20 shadow-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F3E4CD] animate-pulse shrink-0" />
            the origin
          </div>
          <h1 className="text-6xl md:text-[6rem] lg:text-[8rem] font-black tracking-tighter leading-[0.8] lowercase text-white mb-8">
            rooted in<br />
            <span className="text-[#F3E4CD]">purity.</span>
          </h1>
          <p className="text-gray-300 font-medium text-lg md:text-xl leading-relaxed lowercase max-w-2xl mx-auto">
            every drop of our oil tells a story of tradition, patience, and a deep respect for the earth. we started natural extracts with a simple mission: to bring the unadulterated goodness of cold-pressed oils back into everyday kitchens.
          </p>
        </motion.div>
      </section>

      {/* Story Split Section */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Images */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] md:h-[600px] w-full rounded-[3rem] bg-[#3A4726] overflow-hidden flex items-center justify-center p-8"
          >
            <div className="absolute inset-0 bg-[#7f8D63] opacity-20 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3E4CD] opacity-10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F3E4CD] opacity-10 rounded-full blur-[80px]"></div>
            
            <div className="relative w-full h-full z-10 flex items-center justify-center">
              <Image 
                src="/12.png" 
                alt="Our Story" 
                fill 
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.9] lowercase text-brand-dark">
                the old ways<br />are the best ways.
              </h2>
              <p className="text-gray-600 font-medium text-lg leading-relaxed lowercase">
                long before modern refining stripped oils of their nutrients and natural flavor, there was the kachi ghani—the traditional wooden press. we believe that heat and chemicals have no place in food production. 
              </p>
              <p className="text-gray-600 font-medium text-lg leading-relaxed lowercase">
                our process is painfully slow, and we are proud of that. by pressing our seeds at low temperatures, we ensure that every single drop of natural extracts oil retains its rich aroma, golden color, and vital nutrients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#3a4726]/10">
              <div className="space-y-2">
                <h3 className="text-5xl font-black text-brand-primary">100%</h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">natural & organic</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-5xl font-black text-brand-primary">0%</h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">heat or chemicals</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Secondary Story Section */}
      <section className="w-full bg-[#1A2217] text-white py-32 px-6 mt-12 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-primary/20 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] lowercase">
            for the love<br />of good food.
          </h2>
          <p className="text-gray-300 font-medium text-xl leading-relaxed lowercase max-w-2xl mx-auto">
            whether you are frying, drizzling, or baking, the oil you use is the foundation of your meal. we craft oils that don't just cook your food—they elevate it. 
          </p>
          <div className="pt-8">
            <span className="inline-block border-2 border-brand-primary text-brand-primary font-black px-8 py-4 rounded-full text-lg tracking-wider lowercase hover:bg-brand-primary hover:text-white transition-colors cursor-pointer">
              join the family
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
