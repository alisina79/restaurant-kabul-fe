'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    question: "What are your restaurant's operating hours?",
    answer: "We are open Monday through Sunday from 11:00 AM to 11:00 PM. We also offer special late-night dining on weekends until 1:00 AM.",
    category: "Hours & Reservations"
  },
  {
    question: "Do you accept reservations?",
    answer: "Yes, we accept reservations for both lunch and dinner service. You can make a reservation through our website, by phone, or in person. We recommend booking at least 24 hours in advance for weekend dining.",
    category: "Hours & Reservations"
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we offer complimentary valet parking for our guests. There is also street parking available nearby. Our valet service is available from 11:00 AM to 11:00 PM.",
    category: "Services"
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Yes, we are happy to accommodate various dietary restrictions including vegetarian, vegan, gluten-free, and halal options. Please inform your server of any dietary requirements, and our chefs will prepare your meal accordingly.",
    category: "Dietary"
  },
  {
    question: "What is your cancellation policy?",
    answer: "We kindly request that you cancel your reservation at least 2 hours before your scheduled dining time. For large groups (6 or more), we require 24 hours notice for cancellation.",
    category: "Policies"
  },
  {
    question: "Do you offer catering services?",
    answer: "Yes, we provide full-service catering for both corporate and private events. Our catering menu can be customized to meet your specific needs and preferences. Please contact our catering department for more information.",
    category: "Services"
  }
];

const categories = Array.from(new Set(faqs.map(faq => faq.category)));

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen relative bg-gradient-to-b ">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("/images/texture.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#ac8d5b] mb-6 font-serif">
            Frequently Asked Questions
          </h1>
          <p className="text-[#1a1e25] text-xl max-w-2xl mx-auto font-light">
            Discover answers to common questions about our restaurant, services, and policies.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-[#ac8d5b]/30 text-black placeholder-black-400 focus:outline-none focus:ring-2 focus:ring-[#ac8d5b]/50 transition-all duration-300"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-[#ac8d5b] text-white'
                  : 'bg-white/10 text-black-300 hover:bg-white/20'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#ac8d5b] text-white'
                    : 'bg-white/10 text-black-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs List */}
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ac8d5b]"></div>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-[#ac8d5b]/30 shadow-lg shadow-[#ac8d5b]/5 hover:shadow-[#ac8d5b]/10 transition-all duration-300"
                >
                  <button
                    className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none group"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-[#ac8d5b] font-medium text-xl group-hover:text-[#ac8d5b]/90 transition-colors duration-300">
                        {faq.question}
                      </span>
                      <span className="text-black-400 text-sm mt-1">
                        {faq.category}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#ac8d5b]"
                    >
                      <ChevronDown size={24} />
                    </motion.span>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 py-6 border-t border-[#ac8d5b]/20">
                      <p className="text-black text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-black text-xl mb-8 font-light">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-block text-[#ac8d5b] px-12 py-4 rounded-lg font-medium text-lg hover:bg-[#1a1e25]/90 hover:text-white border-2 border-[#ac8d5b] transition-all duration-300  hover:-translate-y-1 hover:shadow-[#ac8d5b]/20"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
} 