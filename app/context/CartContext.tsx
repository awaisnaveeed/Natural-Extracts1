'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';

export interface CartItem {
  id: number;
  name: string;
  price: string; // e.g. "Rs 1,250"
  priceNum: number; // e.g. 1250
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addToCart: (item: { id: number; name: string; price: string; image: string }) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, amount: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);
  const router = useRouter();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  const addToCart = (product: { id: number; name: string; price: string; image: string }) => {
    // Parse numeric price from string e.g. "Rs 1,250" -> 1250
    const priceNum = parseInt(product.price.replace(/[^\d]/g, ''), 10) || 0;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, priceNum, quantity: 1 }];
    });

    // Add toast notification
    const toastId = Date.now();
    setToasts((prev) => [...prev, { id: toastId, message: `added ${product.name} to cart!` }]);

    // Auto dismiss toast
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toastId));
    }, 3000);

    // Open Cart drawer automatically on add for visual feedback
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => {
      const newItems = prev.filter((item) => item.id !== id);
      if (newItems.length === 0) setIsCartOpen(false);
      return newItems;
    });
  };

  const updateQuantity = (id: number, amount: number) => {
    setCartItems((prevItems) => {
      const newItems = prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + amount;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
      
      if (newItems.length === 0) setIsCartOpen(false);
      return newItems;
    });
  };

  const calculateSubtotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.priceNum * item.quantity, 0);
    return total.toLocaleString();
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, isCartOpen, setIsCartOpen, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
      
      {/* Toast Notifications */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 pointer-events-none select-none max-w-sm">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="bg-[#1A2217] text-white border border-white/10 px-6 py-4 rounded-[1.25rem] shadow-xl flex items-center gap-3 pointer-events-auto"
            >
              <div className="w-5 h-5 rounded-full bg-[#7f8D63] flex items-center justify-center text-[10px] font-black text-white">✓</div>
              <span className="text-sm font-bold lowercase tracking-tight">{toast.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Cart Drawer Modal */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black z-50 pointer-events-auto"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-full max-w-[420px] bg-[#FAF9F6] shadow-2xl z-50 flex flex-col justify-between text-left border-l border-[#3a4726]/10 pointer-events-auto"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-[#3a4726]/10 flex items-center justify-between bg-[#F3E4CD]">
                <div className="flex items-center gap-2 text-[#3A4726]">
                  <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
                  <span className="font-black text-lg lowercase tracking-tight">your cart ({cartCount})</span>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#FAF9F6] hover:bg-[#EFEADF] flex items-center justify-center text-[#3A4726] transition-colors"
                >
                  <X className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

              {/* Drawer Body - Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-20">
                    <div className="w-16 h-16 rounded-full bg-[#7f8D63]/10 flex items-center justify-center text-[#7f8D63]">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-brand-dark lowercase">your cart is empty</h4>
                      <p className="text-xs text-gray-500 font-medium lowercase">add some premium cold pressed oils to get started!</p>
                    </div>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex items-center gap-4 bg-[#F3E4CD] p-4 rounded-[1.5rem] border border-[#3a4726]/5 shadow-sm"
                    >
                      {/* Product Image Box */}
                      <div className="relative w-20 h-20 bg-[#FAF9F6] rounded-[1rem] flex items-center justify-center shrink-0 border border-[#3a4726]/5 p-2">
                        <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
                      </div>

                      {/* Product details */}
                      <div className="flex-grow flex flex-col justify-between h-full min-w-0">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-black text-sm text-brand-dark lowercase leading-tight truncate">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity Selector */}
                          <div className="flex items-center bg-[#FAF9F6] rounded-full border border-[#3a4726]/10 px-2.5 py-1 gap-3">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="text-[#3A4726] hover:text-[#7f8D63] transition-colors"
                            >
                              <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                            </button>
                            <span className="text-xs font-black text-[#3A4726]">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="text-[#3A4726] hover:text-[#7f8D63] transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                            </button>
                          </div>
                          
                          {/* Price */}
                          <span className="font-black text-sm text-[#3A4726]">{item.price}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Drawer Footer - Checkout info */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-[#3a4726]/10 bg-[#F3E4CD] space-y-4">
                  <div className="flex justify-between items-center text-brand-dark">
                    <span className="font-bold text-sm lowercase">subtotal</span>
                    <span className="font-black text-xl text-[#3A4726]">Rs {calculateSubtotal()}</span>
                  </div>
                  
                  <button 
                    onClick={() => {
                      setIsCartOpen(false);
                      router.push('/checkout');
                    }}
                    className="w-full bg-[#3A4726] hover:bg-[#1A2217] text-white py-3.5 rounded-full font-black text-sm lowercase tracking-tight transition-colors shadow-md hover:shadow-lg text-center flex items-center justify-center gap-2"
                  >
                    proceed to checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
