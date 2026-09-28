'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function TermsOfUse() {
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
            terms of<br />
            <span className="text-[#F3E4CD]">use.</span>
          </h1>
          <p className="text-gray-300 font-medium text-lg leading-relaxed lowercase max-w-2xl mx-auto">
            last updated: september 2026. please read these terms carefully before using our website.
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
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">1. acceptance of terms</h2>
            <p>
              by accessing and using the natural extracts website, you agree to be bound by these terms of use. if you do not agree to these terms, please do not use our website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">2. use of website</h2>
            <p>
              you agree to use our website for lawful purposes only and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">3. intellectual property</h2>
            <p>
              all content included on this site, such as text, graphics, logos, images, and software, is the property of natural extracts or its content suppliers and protected by international copyright laws.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">4. product information</h2>
            <p>
              we attempt to be as accurate as possible. however, natural extracts does not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">5. limitation of liability</h2>
            <p>
              natural extracts shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our products or website.
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
