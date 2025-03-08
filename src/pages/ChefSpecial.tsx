import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import styles from "../css/ChefSpecial.module.css"; // Ensure CSS module is imported
import one from "../chef/one.jpg";
import eight from "../chef/eight.jpg";
import seven from "../chef/seven.jpg";

const carouselData = [
  {
    image: one,
    title: "Grilled Lamb Chops",
    description:
      "Succulent lamb chops marinated in aromatic spices, served with saffron rice.",
  },
  {
    image: eight,
    title: "Kabuli Pulao",
    description:
      "Traditional Afghan rice dish with tender lamb, raisins, and carrots.",
  },
  {
    image: seven,
    title: "Spiced Chicken Kebab",
    description:
      "Juicy skewered chicken infused with a blend of exotic spices.",
  },
];

export default function ChefSpecial() {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className={styles.swiperContainer}
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className={styles.descriptionBox}>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.text}>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
