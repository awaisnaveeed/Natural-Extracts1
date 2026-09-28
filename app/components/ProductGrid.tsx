'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: "cold pressed canola oil",
    description: "light, versatile, and perfect for everyday cooking. extracted traditionally without heat to retain complete nutrients.",
    price: "Rs 1100",
    image: "/4.jpeg",
    tag: "best seller"
  },
  {
    id: 2,
    name: "cold pressed mustard oil",
    description: "bold, aromatic, and rich in healthy monounsaturated fats. traditional kachi ghani extraction for authentic flavor.",
    price: "Rs 900",
    image: "/7.jpeg",
    tag: "premium"
  }
];

export default function ProductGrid() {
  const { addToCart } = useCart();

  return (
    <section id="products" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-brand-dark mb-4 lowercase">our premium products</h2>
        <p className="text-base md:text-lg text-brand-dark/60 max-w-2xl mx-auto lowercase font-medium">
          crafted with care, our cold-pressed oils bring the authentic taste and nutrition of nature right to your kitchen.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
      >
        {products.map((product) => (
          <motion.div 
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            whileHover={{ y: -12 }}
            className="group flex flex-col bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-md hover:shadow-[0_35px_80px_rgba(58,71,38,0.15)] border border-[#3a4726]/5 transition-all duration-500 cursor-pointer"
          >
            {/* Card Graphic Top Section */}
            <div className="relative w-full bg-gradient-to-b from-[#F9F8F4] to-[#EFEADF] border-b border-[#3a4726]/5 overflow-hidden group-hover:bg-gradient-to-b group-hover:from-[#F3E4CD] group-hover:to-[#EFEADF] transition-colors duration-500 flex flex-col">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-yellow-600/10 rounded-full blur-[40px] group-hover:scale-110 transition-transform duration-500 pointer-events-none z-10" />
              
              <div className="relative w-full z-20 flex leading-none">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={1000}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

            </div>
            
            {/* Card Info Bottom Section */}
            <div className="p-6 md:p-10 flex flex-col flex-grow text-left bg-white relative z-20">
              <h3 className="text-2xl md:text-[32px] font-black text-brand-dark tracking-tighter leading-none lowercase mb-3 md:mb-4">{product.name}</h3>
              <p className="text-gray-500 font-medium text-[13px] md:text-base leading-relaxed lowercase mb-6 md:mb-8 flex-grow">{product.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-5 md:pt-6 border-t border-gray-100">
                <span className="text-2xl md:text-[28px] font-black text-[#3A4726] tracking-tight">{product.price}</span>
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-brand-primary hover:bg-[#1A2217] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full font-black text-[12px] md:text-[14px] lowercase tracking-tight transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center gap-1.5 md:gap-2"
                >
                  add to cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
    </section>
  );
}
