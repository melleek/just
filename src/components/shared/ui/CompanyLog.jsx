import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const photo = [
  {
    id: 1,
    img: "src/assets/icons/log/Logo_NIKE 1.png"
  },
  { id: 2, img: "src/assets/icons/log/Coca-Cola_logo 1.png" },
  { id: 3, img: "src/assets/icons/log/Group 6.png" },
  { id: 4, img: "src/assets/icons/log/logo-full-01-1 1.png" },
  {
    id: 5,
    img: "src/assets/icons/log/logo-white 1.png"
  },
  {
    id: 6,
    img: "src/assets/icons/log/Logo_NIKE 1.png"
  },
  { id: 7, img: "src/assets/icons/log/Coca-Cola_logo 1.png" }
];

export const CompanyLog = () => {
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
    <div className="flex items-center justify-between">
      <button className="p-[15px] bg-[#ECE7F0] rounded-[90px] flex items-center">
        <MdArrowBackIos
          onClick={prev}
          disabled={currentIndex === 0}
          className="cursor-pointer"
          size={30}
          color="#7981AD"
        />
      </button>

      {photo.slice(currentIndex, currentIndex + 5).map((item) => (
        <img src={item.img} alt="img" />
      ))}

      <button className="p-[15px] bg-[#ECE7F0] rounded-[90px]">
        <MdArrowForwardIos
          className="cursor-pointer"
          size={30}
          color="#7981AD"
          onClick={next}
          disabled={currentIndex >= photo.length - 1}
        />
      </button>
    </div>
  );
};
