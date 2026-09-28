import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductFeatures from './components/ProductFeatures';
import WhySection from './components/WhySection';
import Features from './components/Features';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#F3E4CD]">
      <Header />
      <Hero />
      <ProductFeatures />
      <WhySection />
      <ProductGrid />
      <Features />
      <Footer />
    </main>
  );
}
