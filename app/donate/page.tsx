"use client";

import PageBanner from "@/components/PageBanner";
import { useState, useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    PaystackPop: any;
  }
}

export default function DonatePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    purpose: "general",
    message: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [paystackLoaded, setPaystackLoaded] = useState(false);

  // Quick amount options
  const quickAmounts = [1000, 5000, 10000, 25000, 50000, 100000];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuickAmount = (amount: number) => {
    setFormData({
      ...formData,
      amount: amount.toString(),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.amount) {
      alert("Please fill in all required fields");
      return;
    }

    const amountInKobo = parseFloat(formData.amount) * 100; // Convert to kobo (Paystack uses kobo)

    if (isNaN(amountInKobo) || amountInKobo < 100) {
      alert("Please enter a valid amount (minimum ₦1)");
      return;
    }

    if (!paystackLoaded || !window.PaystackPop) {
      alert("Payment gateway is loading. Please wait a moment and try again.");
      return;
    }

    setIsProcessing(true);

    try {
      // Get Paystack key from environment variable
      const paystackKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || 'pk_test_cc175e3fe8c1d72fbe3d01b68c6ee74626f1e79f';
      
      if (!paystackKey) {
        alert('Paystack key is not configured. Please check your environment variables.');
        setIsProcessing(false);
        return;
      }

      // Initialize Paystack payment
      const handler = window.PaystackPop.setup({
        key: paystackKey,
        email: formData.email,
        amount: amountInKobo,
        currency: 'NGN',
        ref: `DONATION_${Date.now()}_${Math.random().toString(36).substring(7)}`,
        metadata: {
          custom_fields: [
            {
              display_name: "Donor Name",
              variable_name: "donor_name",
              value: formData.name,
            },
            {
              display_name: "Phone",
              variable_name: "phone",
              value: formData.phone,
            },
            {
              display_name: "Purpose",
              variable_name: "purpose",
              value: formData.purpose,
            },
            {
              display_name: "Message",
              variable_name: "message",
              value: formData.message,
            },
          ],
        },
        callback: function(response: any) {
          // Payment successful
          alert(`Payment successful! Reference: ${response.reference}`);
          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            amount: "",
            purpose: "general",
            message: "",
          });
          setIsProcessing(false);
          // You can redirect to a success page or show a success message
        },
        onClose: function() {
          // User closed the payment modal
          setIsProcessing(false);
          alert("Payment was not completed. You can try again.");
        },
      });

      handler.openIframe();
    } catch (error) {
      console.error("Payment error:", error);
      alert("An error occurred. Please try again.");
      setIsProcessing(false);
    }
  };

  // Islamic texts about charity
  const charityTexts = [
    {
      arabic: "مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِّائَةُ حَبَّةٍ",
      text: "The example of those who spend their wealth in the way of Allah is like a seed [of grain] which grows seven spikes; in each spike is a hundred grains.",
      source: "Quran 2:261"
    },
    {
      arabic: "وَمَا تُنفِقُوا مِنْ خَيْرٍ فَلِأَنفُسِكُمْ",
      text: "And whatever you spend of good - it will be fully repaid to you, and you will not be wronged.",
      source: "Quran 2:272"
    },
    {
      arabic: "مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً",
      text: "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?",
      source: "Quran 2:245"
    }
  ];

  const hadith = {
    arabic: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ",
    text: "Charity does not decrease wealth.",
    source: "Sahih Muslim"
  };

  return (
    <>
      <Script
        src="https://js.paystack.co/v1/inline.js"
        strategy="lazyOnload"
        onLoad={() => setPaystackLoaded(true)}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary-light/8">
        <PageBanner
          badge="Make a Difference"
          title="Donate Now"
          description="Your generous contribution helps us continue our mission of serving communities through Islamic values, education, and compassion"
          imageUrl="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
        />

        <div className="section-padding py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column - Islamic Texts */}
              <div className="lg:col-span-1 space-y-6">
                {/* Quran Verses */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-primary/10 p-6 fade-in">
                  <h3 className="text-2xl font-heading font-bold text-text mb-6 flex items-center gap-3">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <span>Quranic Guidance</span>
                  </h3>
                  <div className="space-y-6">
                    {charityTexts.map((verse, index) => (
                      <div key={index} className="bg-gradient-to-r from-primary/5 to-transparent rounded-xl p-4 border-l-4 border-primary">
                        <p className="text-lg sm:text-xl text-gray-900 leading-loose mb-3 text-right font-arabic" dir="rtl">
                          {verse.arabic}
                        </p>
                        <p className="text-sm text-gray-700 italic leading-relaxed mb-2 font-serif">
                          "{verse.text}"
                        </p>
                        <p className="text-xs text-primary font-semibold">
                          — {verse.source}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hadith */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-primary-light/10 p-6 fade-in-delay-1">
                  <h3 className="text-2xl font-heading font-bold text-text mb-6 flex items-center gap-3">
                    <svg className="w-8 h-8 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span>Hadith</span>
                  </h3>
                  <div className="bg-gradient-to-r from-primary-light/5 to-transparent rounded-xl p-4 border-l-4 border-primary-light">
                    <p className="text-lg sm:text-xl text-gray-900 leading-loose mb-3 text-right font-arabic" dir="rtl">
                      {hadith.arabic}
                    </p>
                    <p className="text-sm text-gray-700 italic leading-relaxed mb-2 font-serif">
                      "{hadith.text}"
                    </p>
                    <p className="text-xs text-primary-light font-semibold">
                      — {hadith.source}
                    </p>
                  </div>
                </div>

                {/* Impact Info */}
                <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-2xl p-6 border border-primary/20 fade-in-delay-2">
                  <h4 className="font-heading font-bold text-text mb-4 text-lg">Your Impact</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Support orphaned children's education</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Provide essential care for widows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Spread authentic Islamic knowledge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Build stronger communities</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Donation Form */}
              <div className="lg:col-span-2">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-primary/10 p-6 sm:p-8 md:p-10 fade-in-delay-2">
                  <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text mb-3">
                      Make Your Donation
                    </h2>
                    <p className="text-gray-600">
                      Fill in your details below to proceed with your donation
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                        placeholder="+234 800 000 0000"
                      />
                    </div>

                    {/* Purpose */}
                    <div>
                      <label htmlFor="purpose" className="block text-sm font-medium text-text mb-2">
                        Donation Purpose
                      </label>
                      <select
                        id="purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white"
                      >
                        <option value="general">General Donation</option>
                        <option value="orphanage">Orphanage Support</option>
                        <option value="dawah">Dawah Programs</option>
                        <option value="school">School Education</option>
                        <option value="widow">Widow Support</option>
                        <option value="emergency">Emergency Relief</option>
                      </select>
                    </div>

                    {/* Amount */}
                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-text mb-2">
                        Donation Amount (₦) <span className="text-primary">*</span>
                      </label>
                      
                      {/* Quick Amount Buttons */}
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
                        {quickAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => handleQuickAmount(amount)}
                            className={`px-3 py-2 rounded-lg border-2 font-semibold text-sm transition-all duration-300 ${
                              formData.amount === amount.toString()
                                ? "bg-primary text-white border-primary shadow-lg"
                                : "bg-white text-gray-700 border-gray-200 hover:border-primary hover:text-primary"
                            }`}
                          >
                            ₦{(amount / 1000).toFixed(0)}K
                          </button>
                        ))}
                      </div>

                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                        required
                        min="1"
                        step="1"
                        placeholder="Enter custom amount"
                      />
                      <p className="text-xs text-gray-500 mt-2">Minimum donation: ₦1</p>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                        placeholder="Any message you'd like to include with your donation..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isProcessing || !paystackLoaded}
                      className="w-full bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                    >
                      {isProcessing ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                          Proceed to Payment
                        </>
                      )}
                    </button>

                    {!paystackLoaded && (
                      <p className="text-sm text-gray-500 text-center">
                        Loading payment gateway...
                      </p>
                    )}
                  </form>

                  {/* Security Notice */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">Secure Payment</p>
                        <p className="text-xs text-gray-600">
                          Your payment is processed securely through Paystack. We do not store your card details.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

