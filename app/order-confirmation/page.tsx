'use client';
import { useState, useEffect, Suspense, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Copy, Image as ImageIcon, MessageCircle, Home, Clock, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import Tesseract from 'tesseract.js';
import Header from '../components/Header';
import Footer from '../components/Footer';

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('id') || "NE" + Math.floor(1000000000 + Math.random() * 9000000000);
  
  const [copied, setCopied] = useState(false);
  const [waLink, setWaLink] = useState('https://wa.me/923362127999');
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setVerifyError('');
      setIsVerifying(true);
      setReceiptFile(null);

      try {
        const result = await Tesseract.recognize(file, 'eng');
        const text = result.data.text.toLowerCase();
        
        const keywords = ['rs', 'pkr', 'amount', 'transaction', 'sent', 'successful', 'meezan', 'easypaisa', 'jazzcash', 'transfer', 'payment', 'tr', 'id', 'ref'];
        const isReceipt = keywords.some(keyword => text.includes(keyword));

        if (isReceipt) {
          setReceiptFile(file);
        } else {
          setVerifyError("We couldn't detect any payment details in this image. Please upload a valid bank or EasyPaisa/JazzCash screenshot.");
        }
      } catch (err) {
        console.error(err);
        setVerifyError("Error scanning image. Please try another one.");
      } finally {
        setIsVerifying(false);
      }
    }
  };

  useEffect(() => {
    const summary = sessionStorage.getItem('lastOrderSummary');
    if (summary) {
      setWaLink(`https://wa.me/923362127999?text=${encodeURIComponent(summary)}`);
    }
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col">
      <Header />

      <main className="max-w-5xl mx-auto px-4 md:px-8 pt-[180px] md:pt-[200px] pb-24 flex-1 w-full">
        
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          
          {/* Left Column - Success Message & Upload */}
          <div className="flex flex-col items-center bg-white p-6 md:p-10 rounded-[2rem] border border-[#3a4726]/10 shadow-sm text-center">
            
            <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-brand-primary" />
            </div>
            
            <h1 className="text-3xl font-black text-brand-dark lowercase tracking-tight mb-2">
              your order has been placed!
            </h1>
            <p className="text-gray-500 font-medium text-sm lowercase mb-8">
              your checkout completed successfully
            </p>

            {/* Order ID Box */}
            <div className="w-full bg-[#f8f7f5] border border-gray-200 rounded-2xl p-6 mb-6">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">your order id</p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl font-black text-brand-dark tracking-wider">{orderId}</span>
                <button 
                  onClick={() => handleCopy(orderId)}
                  className="p-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-500 hover:text-brand-primary"
                  title="Copy Order ID"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4 lowercase">include this ID in your payment screenshot</p>
            </div>

            {/* Upload Receipt Box */}
            <div className="w-full bg-[#f8f7f5] border border-brand-primary/20 rounded-2xl p-6 mb-8 relative overflow-hidden group border-dashed">
              <div className="absolute top-4 left-4 flex items-center gap-2 text-brand-primary">
                <ImageIcon className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">upload payment receipt</span>
              </div>
              <input 
                type="file" 
                accept="image/png, image/jpeg, image/jpg" 
                className="hidden" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
              />
              <div className="mt-10 flex flex-col items-center justify-center gap-2">
                <p className="text-sm text-gray-500 lowercase max-w-[250px] mb-2">
                  upload your transfer screenshot to automatically attach it to your whatsapp confirmation message.
                </p>
                
                {verifyError && (
                  <div className="text-xs font-bold text-red-500 bg-red-50 p-3 rounded-xl border border-red-200 mb-2 w-full">
                    {verifyError}
                  </div>
                )}

                {isVerifying ? (
                  <div className="mt-4 flex flex-col items-center justify-center gap-3 bg-[#f8f7f5] w-full py-6 rounded-xl border border-gray-200">
                    <Loader2 className="w-6 h-6 text-brand-primary animate-spin" />
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">verifying receipt...</span>
                  </div>
                ) : receiptFile ? (
                  <div className="mt-4 flex flex-col items-center justify-center gap-2 bg-green-50 w-full py-4 rounded-xl border border-green-200">
                    <div className="flex items-center gap-2 text-green-700">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm font-bold truncate max-w-[150px]">{receiptFile.name}</span>
                    </div>
                    <button onClick={() => fileInputRef.current?.click()} className="text-[10px] text-green-600 font-bold uppercase tracking-widest underline hover:text-green-800">
                      change receipt
                    </button>
                  </div>
                ) : (
                  <button onClick={() => fileInputRef.current?.click()} className="mt-4 flex flex-col items-center justify-center gap-1 text-brand-primary hover:text-[#6c7853] transition-colors">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                      <span className="text-xl font-light">+</span>
                    </div>
                    <span className="text-sm font-bold lowercase mt-2">choose receipt photo</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">png, jpg up to 10 mb</span>
                  </button>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full">
              {!receiptFile ? (
                <button disabled className="flex-1 min-w-[140px] bg-gray-300 text-gray-500 py-3.5 rounded-full font-bold text-sm lowercase shadow-sm flex items-center justify-center gap-2 cursor-not-allowed">
                  <MessageCircle className="w-4 h-4" /> confirm whatsapp
                </button>
              ) : (
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-full font-bold text-sm lowercase transition-colors shadow-sm flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" /> confirm whatsapp
                </a>
              )}
              <Link href="/" className="flex-1 min-w-[140px] bg-gray-200 hover:bg-gray-300 text-gray-700 py-3.5 rounded-full font-bold text-sm lowercase transition-colors shadow-sm flex items-center justify-center gap-2">
                <Home className="w-4 h-4" /> return home
              </Link>
            </div>

          </div>

          {/* Right Column - Payment Instructions */}
          <div className="bg-[#F3E4CD]/30 p-6 md:p-10 rounded-[2rem] border border-[#3a4726]/10 shadow-sm h-full flex flex-col">
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-brand-primary" />
              </div>
              <div>
                <h2 className="text-lg font-black text-brand-dark uppercase tracking-tight">advance payment instructions</h2>
                <p className="text-sm text-gray-500 lowercase">Natural Extracts bank account details</p>
              </div>
            </div>

            <p className="text-sm text-center font-medium text-gray-600 leading-relaxed lowercase mb-8">
              natural extracts is a premium wellness brand. we prepare and dispatch your cold-pressed oils immediately upon receiving advance payment.
            </p>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">bank name</p>
                  <p className="font-bold text-brand-dark lowercase">Meezan Bank</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">account title</p>
                  <p className="font-bold text-brand-dark lowercase">Natural Extracts</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">iban / account number</p>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-sm text-brand-dark">Pk123</p>
                    <button onClick={() => handleCopy('PK32MEZN001234567890123')} className="text-gray-400 hover:text-brand-primary">
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">easypaisa / jazzcash</p>
                  <div className="flex items-center justify-end gap-2">
                    <p className="font-bold text-sm text-brand-dark">0300</p>
                    <button onClick={() => handleCopy('0300-1234567')} className="text-gray-400 hover:text-brand-primary">
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Rules Cards */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="bg-[#f8f7f5] p-4 rounded-2xl border border-yellow-200/50">
                <Clock className="w-4 h-4 text-yellow-600 mb-2" />
                <p className="text-xs font-medium text-gray-600 lowercase leading-snug">
                  <span className="font-bold text-brand-dark">Payment valid for 24h.</span> Unpaid orders may be cancelled after this window.
                </p>
              </div>
              <div className="bg-[#f8f7f5] p-4 rounded-2xl border border-blue-200/50">
                <ShieldCheck className="w-4 h-4 text-blue-600 mb-2" />
                <p className="text-xs font-medium text-gray-600 lowercase leading-snug">
                  <span className="font-bold text-brand-dark">Verify info</span> via instagram bio @naturalextracts to avoid scams.
                </p>
              </div>
              <div className="bg-[#f8f7f5] p-4 rounded-2xl border border-red-200/50">
                <AlertCircle className="w-4 h-4 text-red-500 mb-2" />
                <p className="text-xs font-medium text-gray-600 lowercase leading-snug">
                  <span className="font-bold text-brand-dark">Cancellation:</span> Advance payments are non-refundable but transferable.
                </p>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-[#3a4726]/10 text-center">
              <p className="text-xs text-gray-500 lowercase bold mb-3">
                Transfer the total amount and send your payment screenshot along with Order ID #{orderId} via WhatsApp or Instagram to confirm your booking.
              </p>
              <p className="text-[10px] font-bold text-brand-dark lowercase tracking-widest">
               naturallextracts@gmail.com • +92 336 2127999
              </p>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center font-bold text-brand-dark lowercase">loading order...</div>}>
      <OrderConfirmationContent />
    </Suspense>
  );
}
