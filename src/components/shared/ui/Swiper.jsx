import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const photo = [
  {
    id: 1,
    img: "src/assets/img/photo_2021-09-29_17-07-49-removebg-preview 1.png"
  },
  { id: 2, img: "src/assets/img/2020-11-24_22.50 1.png" },
  { id: 3, img: "src/assets/img/IMG_FAF3FFEF2E07-10-removebg-preview 1.png" },
  { id: 4, img: "src/assets/img/klj 1.png" },
  {
    id: 5,
    img: "src/assets/img/photo_2021-09-29_17-07-49-removebg-preview 1.png"
  },
  { id: 6, img: "src/assets/img/2020-11-24_22.50 1.png" },
  { id: 7, img: "src/assets/img/IMG_FAF3FFEF2E07-10-removebg-preview 1.png" }
];

export const SwiperCircle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < photo.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="flex gap-[50px]">
      {photo.slice(currentIndex, currentIndex + 4).map((item) => (
        <div
          key={item.id}
          className="p-[10px] py-[5px] bg-custom rounded-[50%] flex items-center"
        >
          <img src={item.img} alt="img" />
        </div>
      ))}

      <div className="flex items-center">
        <MdArrowBackIos
          onClick={prev}
          disabled={currentIndex === 0}
          className="cursor-pointer"
          size={30}
          color="#7981AD"
        />

        <span className="text-[20px]">
          {currentIndex + 4}/{photo.length}
        </span>
        <MdArrowForwardIos
          className="cursor-pointer"
          size={30}
          color="#7981AD"
          onClick={next}
          disabled={currentIndex >= photo.length - 4}
        />
      </div>
    </div>
  );
};
