import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const photo = [
  { id: 1, img: "url-to-image-1", title: "Slide 1" },
  { id: 2, img: "url-to-image-2", title: "Slide 2" },
  { id: 3, img: "url-to-image-3", title: "Slide 3" },
  { id: 4, img: "url-to-image-4", title: "Slide 4" }
];

export const SwiperCircle = () => {
  return (
    <Swiper
      pagination={{
        type: "fraction"
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      // slidesPerView={4} 
      // centeredSlides={false}
      spaceBetween={20}
    >
      {photo.map((item) => (
        <SwiperSlide
          key={item.id}
          className="flex items-center justify-center rounded-full w-[150px] h-[150px] mx-auto"
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "#e0d4f7", 
          }}
        >
          {/* Optional title overlay */}
          <h2 className="text-white text-center bg-black bg-opacity-50 px-2 py-1 rounded-full">
            {item.title}
          </h2>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
