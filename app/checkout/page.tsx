'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CheckoutPage() {
  const { cartItems, updateQuantity, clearCart } = useCart();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('advance');
  const [error, setError] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + (item.priceNum * item.quantity), 0);
  const delivery = subtotal > 0 ? 250 : 0;
  const total = subtotal + delivery;

  const handlePlaceOrder = () => {
    setError('');

    // Basic Validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.address.trim()) {
      setError('Please fill in your name, mobile number, and address.');
      // Scroll to top to show error
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Generate Order ID
    const orderId = "NE" + Math.floor(1000000000 + Math.random() * 9000000000);

    // Build order string for WhatsApp
    let orderSummaryText = `Hi Natural Extracts! I'd like to place an order.\n\n*Order ID:* #${orderId}\n*Name:* ${formData.name}\n*Phone:* 0${formData.phone}\n*Payment:* Advance Payment\n*Total:* Rs ${total.toLocaleString()}\n\n*Items:*`;
    
    cartItems.forEach(item => {
      orderSummaryText += `\n- ${item.quantity}x ${item.name} (Rs ${(item.priceNum * item.quantity).toLocaleString()})`;
    });

    if (formData.notes) {
      orderSummaryText += `\n\n*Notes:* ${formData.notes}`;
    }

    // Save to session storage for the confirmation page
    sessionStorage.setItem('lastOrderSummary', orderSummaryText);
    sessionStorage.setItem('lastOrderTotal', total.toString());
    sessionStorage.setItem('lastPaymentMethod', paymentMethod);

    // Clear cart and redirect
    clearCart();
    router.push(`/order-confirmation?id=${orderId}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 pt-[200px] md:pt-[220px] pb-24 flex-1 w-full">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-black text-brand-dark lowercase tracking-tight">secure checkout</h1>
          <Link 
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-brand-dark transition-colors font-medium text-sm lowercase"
          >
            <ChevronLeft className="w-5 h-5" /> continue shopping
          </Link>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-bold lowercase">
            {error}
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column - Forms */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Details Section */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#3a4726]/10 shadow-sm">
              <h2 className="text-xl font-bold text-brand-dark lowercase mb-6">enter your details</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">full name *</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe" 
                    className="w-full bg-[#f8f7f5] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-brand-dark placeholder-gray-400" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">mobile number *</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 bg-gray-100 border border-r-0 border-gray-200 rounded-l-xl text-gray-500 font-medium">+92</span>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="300 1234567" 
                      className="flex-1 min-w-0 bg-[#f8f7f5] border border-gray-200 rounded-r-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-brand-dark placeholder-gray-400" 
                    />
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">email address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com" 
                    className="w-full bg-[#f8f7f5] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-brand-dark placeholder-gray-400" 
                  />
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-lg font-bold text-brand-dark lowercase mb-4">shipping address *</h3>
                <textarea 
                  rows={3} 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  placeholder="Enter your complete shipping address..." 
                  className="w-full bg-[#f8f7f5] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-brand-dark placeholder-gray-400 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Customization Section */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#3a4726]/10 shadow-sm">
              <h2 className="text-lg font-bold text-brand-dark lowercase mb-4">gift customization & notes</h2>
              <textarea 
                rows={2} 
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                placeholder="Any custom packing instructions or gift messages..." 
                className="w-full bg-[#f8f7f5] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-brand-dark placeholder-gray-400 resize-none"
              ></textarea>
            </div>

          </div>

          {/* Right Column - Summary & Payment */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-3xl border border-[#3a4726]/10 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-2xl font-black text-brand-dark lowercase mb-6">order summary</h2>

            {/* Cart Items List */}
            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-sm italic">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center bg-[#f8f7f5] p-3 rounded-2xl">
                    <div className="relative w-16 h-16 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-brand-dark lowercase truncate">{item.name}</h4>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="flex items-center bg-white rounded-md border border-gray-200 px-1 py-0.5 gap-2">
                          <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-400 hover:text-brand-primary"><Minus className="w-3 h-3" /></button>
                          <span className="text-xs font-bold text-brand-dark w-3 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-400 hover:text-brand-primary"><Plus className="w-3 h-3" /></button>
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-black text-sm text-[#3A4726]">Rs {item.priceNum.toLocaleString()}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Payment Method */}
            <div className="mb-6 pt-6 border-t border-gray-100">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">payment method</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-brand-primary bg-[#F3E4CD]/30 cursor-not-allowed transition-colors">
                  <input type="radio" name="payment" value="advance" checked={true} readOnly className="w-4 h-4 text-brand-primary focus:ring-brand-primary border-gray-300" />
                  <span className="font-bold text-sm text-brand-dark lowercase">Advance Payment (Card / Bank Transfer)</span>
                </label>
              </div>
            </div>

            {/* Promo Code */}
            <div className="flex gap-2 mb-6">
              <input type="text" placeholder="Promo Code" className="flex-1 bg-[#f8f7f5] border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary text-sm text-brand-dark placeholder-gray-400 uppercase" />
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold px-6 py-2 rounded-xl text-sm transition-colors">Apply</button>
            </div>

            {/* Totals */}
            <div className="space-y-3 pt-6 border-t border-gray-100 text-sm">
              <div className="flex justify-between items-center text-gray-500 font-medium">
                <span>Subtotal</span>
                <span className="text-brand-dark">Rs {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-gray-500 font-medium">
                <span>Delivery Charges</span>
                <span className="text-brand-dark">Rs {delivery.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-gray-500 font-medium pb-4 border-b border-gray-100">
                <span>Tax</span>
                <span className="text-brand-dark">0%</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-black text-lg text-brand-dark lowercase">total</span>
                <span className="font-black text-2xl text-brand-primary">Rs {total.toLocaleString()}</span>
              </div>
            </div>

            {/* Place Order Button */}
            <button 
              disabled={cartItems.length === 0}
              onClick={handlePlaceOrder}
              className="w-full mt-8 bg-brand-primary hover:bg-[#6c7853] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-full font-black text-lg tracking-tight lowercase transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              place order <ArrowRight className="w-5 h-5 stroke-[2.5px]" />
            </button>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
