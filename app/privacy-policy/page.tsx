'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
            privacy<br />
            <span className="text-[#F3E4CD]">policy.</span>
          </h1>
          <p className="text-gray-300 font-medium text-lg leading-relaxed lowercase max-w-2xl mx-auto">
            last updated: september 2026. how we collect, use, and protect your information.
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
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">1. information we collect</h2>
            <p>
              we collect information that you provide directly to us, such as when you create an account, place an order, or communicate with us. this may include your name, email address, postal address, phone number, and payment information.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">2. how we use your info</h2>
            <p>
              we use the information we collect to fulfill your orders, communicate with you, improve our products and services, and send you marketing communications (if you have opted in).
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">3. data security</h2>
            <p>
              we implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. however, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">4. cookies and tracking</h2>
            <p>
              we use cookies and similar tracking technologies to track activity on our website and hold certain information, helping us enhance your experience and analyze website traffic.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">5. your rights</h2>
            <p>
              you have the right to access, correct, or delete your personal information. if you wish to exercise any of these rights, please contact our support team.
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
