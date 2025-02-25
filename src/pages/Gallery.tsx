import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import afghan from "../assets/afghan.jpg";
import first from "../photo/first.jpg";

const galleryImages = [
  { src: afghan, alt: "Signature Dish" },
  { src: first, alt: "Delicious Afghan Cuisine" },
  { src: afghan, alt: "Signature Dish" },
  { src: first, alt: "Delicious Afghan Cuisine" },
  { src: afghan, alt: "Signature Dish" },
  { src: first, alt: "Delicious Afghan Cuisine" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  return (
    <section className="gallery-container">
      <h2 className="section-title">Our Gallery</h2>

      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation, Pagination]}
        className="carousel"
        loop={true}
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.img
              src={image.src}
              alt={image.alt}
              className="carousel-image"
              whileHover={{ scale: 1.05 }}
              loading="lazy"
              onClick={() => setSelectedImage(image.src)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Responsive Grid Gallery */}
      <div className="grid-gallery">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="grid-item"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="grid-image"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage("")}
        className="lightbox-modal"
        overlayClassName="lightbox-overlay"
      >
        <motion.img
          src={selectedImage}
          alt="Expanded View"
          className="lightbox-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <button className="close-btn" onClick={() => setSelectedImage("")}>
          ✕
        </button>
      </Modal>
    </section>
  );
};

export default Gallery;
