'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What are your restaurant's operating hours?",
    answer: "We are open Monday through Sunday from 11:00 AM to 11:00 PM. We also offer special late-night dining on weekends until 1:00 AM."
  },
  {
    question: "Do you accept reservations?",
    answer: "Yes, we accept reservations for both lunch and dinner service. You can make a reservation through our website, by phone, or in person. We recommend booking at least 24 hours in advance for weekend dining."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we offer complimentary valet parking for our guests. There is also street parking available nearby. Our valet service is available from 11:00 AM to 11:00 PM."
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Yes, we are happy to accommodate various dietary restrictions including vegetarian, vegan, gluten-free, and halal options. Please inform your server of any dietary requirements, and our chefs will prepare your meal accordingly."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We kindly request that you cancel your reservation at least 2 hours before your scheduled dining time. For large groups (6 or more), we require 24 hours notice for cancellation."
  },
  {
    question: "Do you offer catering services?",
    answer: "Yes, we provide full-service catering for both corporate and private events. Our catering menu can be customized to meet your specific needs and preferences. Please contact our catering department for more information."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("/images/texture.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-[#ac8d5b] mb-6 font-serif">
            Frequently Asked Questions
          </h1>
          <p className="text-black text-xl max-w-2xl mx-auto font-light">
            Discover answers to common questions about our restaurant, services, and policies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1a1e25]/90 backdrop-blur-md rounded-xl overflow-hidden border border-[#ac8d5b]/30 shadow-lg shadow-[#ac8d5b]/5 hover:shadow-[#ac8d5b]/10 transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-[#ac8d5b] font-medium text-xl group-hover:text-[#ac8d5b]/90 transition-colors duration-300">
                  {faq.question}
                </span>
                <span className="text-[#ac8d5b] text-2xl transform transition-all duration-300 group-hover:scale-110">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div
                className={`px-8 transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100 py-6 border-t border-[#ac8d5b]/20'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[#ffffff] text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-24 text-center">
          <p className="text-[#1a1e25] text-xl mb-8 font-light">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-block  text-[#ac8d5b] px-12 py-4 rounded-lg font-medium text-lg hover:bg-[#ac8d5b]/90 hover:text-[#ffffff] border-2 border-[#ac8d5b] transition-all duration-300 shadow-lg  hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
} 