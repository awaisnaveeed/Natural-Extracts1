'use client';
import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Review = {
  id?: string;
  name: string;
  rating: number;
  review: string;
  role: string;
  timestamp: number;
};

export default function Features() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Fetch reviews on load
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch('https://natural-extracts-default-rtdb.firebaseio.com/reviews.json');
      const data = await res.json();
      if (data) {
        const parsedReviews = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }))
        .filter(review => review.rating >= 4)
        .sort((a, b) => b.timestamp - a.timestamp);
        setReviews(parsedReviews);
      }
    } catch (err) {
      console.error('Error fetching reviews:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !reviewText) return;
    
    setIsSubmitting(true);
    
    const newReview = {
      name,
      rating,
      review: reviewText,
      role: "verified buyer",
      timestamp: Date.now()
    };

    try {
      await fetch('https://natural-extracts-default-rtdb.firebaseio.com/reviews.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview)
      });
      
      setSubmitSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitSuccess(false);
        setIsSubmitting(false);
        setName('');
        setReviewText('');
        setRating(5);
        fetchReviews(); // Refresh list
      }, 2000);
    } catch (err) {
      console.error('Error submitting review:', err);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#1A2217] text-white py-8 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#7f8D63]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-yellow-600/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <div className="text-center mb-4">
          <div className="inline-block bg-[#7f8D63]/20 text-white/90 px-5 py-1.5 rounded-full text-[11px] md:text-xs font-black tracking-widest uppercase mb-4 md:mb-6 border border-[#7f8D63]/30 shadow-sm">
            our community
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none lowercase mb-4 md:mb-6 text-[#F9F8F4]">customer reviews</h2>
          <p className="text-[15px] md:text-lg text-white/60 max-w-2xl mx-auto lowercase font-medium leading-relaxed">
            see why thousands of families trust natural extracts cold-pressed oils for their daily cooking.
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-brand-primary" />
        </div>
      ) : reviews.length > 0 ? (
        <div className="relative w-full overflow-hidden py-4 select-none z-10 flex flex-col items-center">
          <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-brand-dark to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-brand-dark to-transparent z-20 pointer-events-none" />
          
          <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap hover:[animation-play-state:paused] w-max">
            {[...reviews, ...reviews, ...reviews, ...reviews].map((item, idx) => (
              <div 
                key={idx} 
                className="w-[320px] md:w-[420px] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 flex flex-col justify-between hover:border-[#7f8D63]/50 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group whitespace-normal shrink-0 cursor-pointer shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {Array(item.rating || 5).fill(null).map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/95 font-medium text-sm md:text-base leading-snug lowercase">
                    "{item.review}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center font-black text-white text-sm uppercase">
                    {item.name ? item.name[0] : 'U'}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm lowercase">{item.name || 'Anonymous User'}</h4>
                    <div className="flex items-center gap-1 text-[10px] text-brand-primary font-bold uppercase tracking-wider mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{item.role || 'verified buyer'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-12 inline-flex items-center gap-2 bg-brand-primary hover:bg-[#6c7853] text-white px-8 py-3.5 rounded-full font-black text-[13px] lowercase tracking-tight transition-all duration-300 shadow-md hover:-translate-y-0.5"
          >
            write a review
          </button>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden py-2 z-10 flex flex-col items-center justify-center px-4 md:px-6">
          <div className="w-full max-w-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col items-center justify-center text-center mx-auto shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl hover:border-[#7f8D63]/40 transition-colors duration-500">
            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-full flex items-center justify-center mb-4 md:mb-6 border border-white/10 shadow-inner">
              <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-xl animate-pulse" />
              <Star className="w-8 h-8 md:w-10 md:h-10 text-yellow-400/80 relative z-10" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black lowercase tracking-tighter mb-3 md:mb-4 text-[#F9F8F4]">no reviews yet</h3>
            <p className="text-white/60 font-medium text-[14px] md:text-[16px] lowercase mb-5 md:mb-6 leading-relaxed max-w-md">
              we recently launched and our community is currently trying out our pure cold-pressed oils. be the first to share your original experience with natural extracts!
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-[#7f8D63] hover:bg-[#F3E4CD] hover:text-[#1A2217] text-white px-8 md:px-10 py-4 rounded-full font-black text-[13px] md:text-[14px] lowercase tracking-tight transition-all duration-300 shadow-md hover:shadow-[0_10px_30px_rgba(127,141,99,0.3)] hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto"
            >
              write a review
            </button>
          </div>
        </div>
      )}

      {/* Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white text-black w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>

              <h3 className="text-2xl font-black lowercase tracking-tight mb-2 text-brand-dark">write a review</h3>
              <p className="text-gray-500 text-sm lowercase mb-6">share your experience with our pure cold-pressed oils.</p>

              {submitSuccess ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold lowercase text-brand-dark">thank you!</h4>
                  <p className="text-gray-500 text-sm lowercase mt-2">your review has been successfully published.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-brand-dark/70 mb-2">rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className={`p-1 transition-transform hover:scale-110 ${rating >= star ? 'text-yellow-400' : 'text-gray-200'}`}
                        >
                          <Star className={`w-8 h-8 ${rating >= star ? 'fill-current' : ''}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-brand-dark/70 mb-2">your name</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. sarah m."
                      className="w-full bg-[#f8f7f5] border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-brand-primary transition-colors text-sm lowercase"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-brand-dark/70 mb-2">your review</label>
                    <textarea 
                      required
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="tell us what you loved..."
                      rows={4}
                      className="w-full bg-[#f8f7f5] border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-brand-primary transition-colors text-sm lowercase resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full bg-brand-primary hover:bg-[#6c7853] text-white py-4 rounded-full font-black text-[15px] lowercase tracking-tight transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'publish review'}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
