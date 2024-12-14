import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-bottom px-[161px] pt-[120px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[40px] items-start">
          <div className="flex flex-col items-start gap-[30px]">
            <img src="src/assets/icons/logo (15).png" alt="" />
            <span className="w-[446px] text-[20px] tracking-[1.5px]">
              Свежее дыхание в корпоративной жизни и жизни корпоративной дыхание
              свежее
            </span>
          </div>
          <p className="flex flex-col font-[600]">
            +380 630 130 103
            <span className="font-[400] tracking-[1.5px]">
              example@gmail.com
            </span>
          </p>

          <div className="flex item-center gap-[22px]">
            <FaFacebook color="#1877F2" size={25} />
            <FaInstagram color="#EC3397" size={25} />
            <FaLinkedin color="#0A66C2" size={25} />
          </div>
        </div>
        <ul className="flex flex-col gap-[30px]">
          <li className="font-[700]">Категории</li>
          <Link>Пошив</Link>
          <Link>Все товары</Link>
          <Link>Наборы</Link>
          <Link>Производство</Link>
        </ul>
        <ul className="flex flex-col gap-[30px]">
          <li className="font-[700]">Информация</li>
          <Link>О нас</Link>
          <Link>ЧаВо</Link>
          <Link>Контакты</Link>
        </ul>
        <div className="flex flex-col items-start gap-[30px]">
          <p className="font-[600] flex flex-col w-[250px] gap-[10px] text-[20px]">
            Связаться с менеджером
            <span className="font-[400] text-[#8F90A6] text-[14px] w-[300px]">
              Есть вопрос на который не нашли ответ? Оставьте контакт и наш
              менеджер свяжеться с вами
            </span>
          </p>
          <div className="border-[2px] border-black rounded-[15px] flex gap-[104px] items-center px-[15px] py-[10px]">
            <p>Номер телефона</p>
            <button className="p-[15px] bg-[#524983] rounded-[90px]">
              <FaArrowRight className="cursor-pointer" size={20} color="#fff" />
            </button>
          </div>
        </div>
      </div>

      <Link className="py-[60px] flex justify-center text-[#9FA3B2] text-[13px] tracking-[1.5]">
        © 2022 . All rights reserved. Политика конфиденциальности
      </Link>
    </footer>
  );
}
