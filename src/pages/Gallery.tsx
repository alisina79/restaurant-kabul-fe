import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, Camera, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Once elements are animated, they stay visible
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView]);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1464500513243-6c46d4c34d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      alt: "Elegant restaurant table setting",
      size: "large",
    },
    {
      src: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      alt: "Beautifully plated dish",
      size: "small",
    },
    {
      src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      alt: "Chefs preparing dishes in kitchen",
      size: "medium",
    },
    {
      src: "https://images.unsplash.com/photo-1560512823-829485b8bf24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      alt: "Modern restaurant interior",
      size: "medium",
    },
    {
      src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      alt: "Elaborate dessert with gold accents",
      size: "small",
    },
    {
      src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      alt: "Fine dining experience with wine",
      size: "large",
    },
  ];

  const testimonials = [
    {
      text: "The tasting menu was extraordinary. Each dish was a perfect balance of flavors and the service was impeccable.",
      author: "Ali Sina Raisi",
      position: "Food Critic",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Ali+Sina+Raisi&background=ac8d5b&color=fff&size=200"
    },
    {
      text: "An unforgettable dining experience. The attention to detail in both the food and atmosphere is unmatched anywhere else.",
      author: "Ezatullah AliZada",
      position: "Michelin Guide",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Ezatullah+AliZada&background=ac8d5b&color=fff&size=200"
    },
    {
      text: "From the moment we arrived, we were treated to exceptional hospitality and cuisine that exceeded all expectations.",
      author: "Murtaz Raisi",
      position: "Culinary Expert",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Murtaz+Raisi&background=ac8d5b&color=fff&size=200"
    },
    {
      text: "The innovative flavor combinations and impeccable presentation demonstrate true culinary mastery. A dining experience to remember.",
      author: "Hussain Raissi",
      position: "Restaurant Connoisseur",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Hussain+Raissi&background=ac8d5b&color=fff&size=200"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="gallery" 
      className="py-12 md:py-16 bg-secondary/50 mt-24 mb-24 relative w-full max-w-full"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 opacity-10">
        <Camera size={64} style={{ color: '#ac8d5b' }} />
      </div>

      <div className="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            ref={ref}
            className="relative"
          >
            <span className="uppercase tracking-[0.25em] text-xs md:text-sm font-medium inline-block mb-2" style={{ color: '#ac8d5b' }}>Experience</span>
            <h2 className="text-2xl md:text-4xl font-serif mt-2 mb-4" style={{ color: '#ac8d5b' }}>Gallery & Testimonials</h2>
            <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: '#ac8d5b' }}></div>
            <p className="max-w-xl mx-auto text-base font-light leading-relaxed" style={{ color: '#1a1e25' }}>
              Glimpses of our culinary artistry and dining spaces, alongside thoughts from those who have experienced them.
            </p>
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full opacity-50" style={{ borderColor: '#ac8d5b', borderWidth: '1px' }}></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full opacity-50" style={{ borderColor: '#ac8d5b', borderWidth: '1px' }}></div>
          </motion.div>
        </div>

        {/* Gallery Grid - Enhanced with masonry-style layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-24"
        >
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              custom={0.1 * index}
              className={`transform transition-all duration-500 hover:-translate-y-1 ${
                image.size === 'large' ? 'sm:col-span-2 lg:col-span-2 row-span-2' : 
                image.size === 'medium' ? 'sm:col-span-1 lg:col-span-1 row-span-2' : ''
              }`}
            >
              <div 
                className={`relative overflow-hidden cursor-pointer rounded-lg shadow-md group ${
                  image.size === 'large' ? 'aspect-[16/9]' : 
                  image.size === 'medium' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs md:text-sm font-medium tracking-wider uppercase bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500" style={{ color: '#ac8d5b' }}>
                    View
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className="text-base font-medium drop-shadow-md" style={{ color: '#ac8d5b' }}>{image.alt}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials - Elegant Carousel Design */}
        <div className="mb-16 relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-10">
            <Quote size={80} style={{ color: '#ac8d5b' }} />
          </div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center text-xl md:text-3xl font-serif mb-10 relative"
            style={{ color: '#ac8d5b' }}
          >
            What Our Guests Say
            <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: '#ac8d5b' }}></div>
          </motion.h3>
          
          <div className="max-w-3xl mx-auto relative">
            {/* Testimonial Carousel */}
            <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', borderColor: '#ac8d5b', borderWidth: '1px' }}>
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: 'linear-gradient(to right, transparent, #ac8d5b, transparent)' }}></div>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                  className="p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 shadow-md" style={{ borderColor: '#ac8d5b' }}>
                        <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].author} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="mb-3 flex">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} size={14} className="mr-1" style={{ color: '#ac8d5b', fill: '#ac8d5b' }} />
                        ))}
                      </div>
                      
                      <div className="text-5xl absolute top-4 right-6 opacity-5">
                        <Quote size={60} style={{ color: '#ac8d5b' }} />
                      </div>
                      
                      <p className="italic text-base md:text-lg font-light leading-relaxed mb-6" style={{ color: '#1a1e25' }}>
                        "{testimonials[currentTestimonial].text}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-px mr-3" style={{ background: '#ac8d5b' }}></div>
                        <div>
                          <p className="font-medium text-base" style={{ color: '#1a1e25' }}>{testimonials[currentTestimonial].author}</p>
                          <p className="text-xs" style={{ color: '#ac8d5b' }}>{testimonials[currentTestimonial].position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevTestimonial}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:-translate-x-1"
                style={{ backgroundColor: 'rgba(0,0,0,0.1)', backdropFilter: 'blur(4px)', borderColor: '#ac8d5b', borderWidth: '1px' }}
              >
                <ChevronLeft size={16} style={{ color: '#ac8d5b' }} />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:translate-x-1"
                style={{ backgroundColor: 'rgba(0,0,0,0.1)', backdropFilter: 'blur(4px)', borderColor: '#ac8d5b', borderWidth: '1px' }}
              >
                <ChevronRight size={16} style={{ color: '#ac8d5b' }} />
              </button>
              
              {/* Pagination Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className="w-1.5 h-1.5 rounded-full transition-all"
                    style={{ 
                      backgroundColor: currentTestimonial === index ? '#ac8d5b' : 'rgba(172, 141, 91, 0.3)',
                      transform: currentTestimonial === index ? 'scale(1.25)' : 'scale(1)',
                      opacity: currentTestimonial === index ? 1 : 0.6
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative bg-black/60 p-2 rounded-lg backdrop-blur-md max-w-4xl max-h-[85vh] overflow-hidden shadow-xl"
              style={{ borderColor: '#ac8d5b', borderWidth: '1px' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedImage} 
                  alt="Enlarged gallery image" 
                  className="max-w-full max-h-[75vh] object-contain rounded-md"
                />
                <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <button 
                className="absolute top-3 right-3 hover:bg-black/70 p-1.5 rounded-full transition-colors duration-300 backdrop-blur-md"
                style={{ color: '#ac8d5b', borderColor: '#ac8d5b', borderWidth: '1px', backgroundColor: 'rgba(0,0,0,0.5)' }}
                onClick={() => setSelectedImage(null)}
              >
                <X size={16} />
              </button>
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-xs bg-black/30 px-3 py-0.5 rounded-full backdrop-blur-sm" 
                style={{ color: '#ac8d5b', borderColor: '#ac8d5b', borderWidth: '1px' }}>
                Click anywhere to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;