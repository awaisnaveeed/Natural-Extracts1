'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Accessibility() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#FAF9F6] overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-24 px-6 md:px-12 flex flex-col items-center text-center z-10 bg-gradient-to-br from-[#1a2217] via-[#222e1f] to-[#3a4e35] rounded-b-[3rem] shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-[5rem] font-black tracking-tighter leading-[0.9] lowercase text-white mb-6">
            digital<br />
            <span className="text-[#F3E4CD]">accessibility.</span>
          </h1>
          <p className="text-gray-300 font-medium text-lg leading-relaxed lowercase max-w-2xl mx-auto">
            we are committed to ensuring digital accessibility for people with disabilities.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="w-full max-w-[900px] mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12 text-brand-dark/80 font-medium text-base md:text-lg lowercase leading-relaxed"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">1. our commitment</h2>
            <p>
              natural extracts is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. we are actively working to increase the accessibility and usability of our website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">2. guidelines and standards</h2>
            <p>
              we aim to comply with all applicable standards, including wcag 2.1 accessibility standards up to level aa. these guidelines explain how to make web content more accessible for people with disabilities.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">3. continuous improvement</h2>
            <p>
              we view accessibility as an ongoing effort. we continually evaluate our website and implement changes to improve accessibility for all users, including those relying on screen readers and keyboard navigation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">4. contact us</h2>
            <p>
              if you experience any difficulty in accessing any part of this website, please feel free to contact us. we will work with you to provide the information, item, or transaction you seek through an alternate communication method.
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
