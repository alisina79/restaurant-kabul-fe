import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

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

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1464500513243-6c46d4c34d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      alt: "Elegant restaurant table setting",
    },
    {
      src: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      alt: "Beautifully plated dish",
    },
    {
      src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      alt: "Chefs preparing dishes in kitchen",
    },
    {
      src: "https://images.unsplash.com/photo-1560512823-829485b8bf24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      alt: "Modern restaurant interior",
    },
    {
      src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      alt: "Elaborate dessert with gold accents",
    },
    {
      src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      alt: "Fine dining experience with wine",
    },
  ];

  const testimonials = [
    {
      text: "The tasting menu was extraordinary. Each dish was a perfect balance of flavors and the service was impeccable.",
      author: "James Mitchell",
      position: "Food Critic",
    },
    {
      text: "An unforgettable dining experience. The attention to detail in both the food and atmosphere is unmatched anywhere else.",
      author: "Sarah Williams",
      position: "Michelin Guide",
    },
    {
      text: "From the moment we arrived, we were treated to exceptional hospitality and cuisine that exceeded all expectations.",
      author: "Michael Chen",
      position: "Culinary Expert",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            ref={ref}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm">Experience</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-2 mb-6">Gallery & Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Glimpses of our culinary artistry and dining spaces, alongside thoughts from those who have experienced them.
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              custom={0.1 * index}
            >
              <div 
                className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium tracking-wider uppercase">
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              custom={0.2 * index}
            >
              <div className="bg-white dark:bg-black p-8 rounded-sm shadow-md relative">
                <div className="text-gold text-6xl absolute -top-4 -left-4 opacity-20">"</div>
                <p className="text-muted-foreground italic mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-px bg-gold mr-3"></div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute top-6 right-6">
            <button 
              className="text-white hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
          </div>
          <div className="max-w-4xl max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt="Enlarged gallery image" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;