import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../api/api";
import { useEffect } from "react";
import { Circle } from "../shared/ui/Circle";
import { TiStarFullOutline } from "react-icons/ti";
import { HiArrowLongRight } from "react-icons/hi2";
import { Button } from "../shared/ui/Button";

import { SwiperCircle } from "../shared/ui/Swiper";

export function Home() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.todos.todos);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log("=================DATA================");
  console.log(data);
  console.log("====================================");

  return (
    <main className="">
      <section className="flex bg-custom px-[161px] items-center">
        <div className="flex flex-col gap-[60px]">
          <h1 className="text-[48px] font-[900] leading-[1.2] tracking-[0.04px] flex flex-col gap-[20px]">
            СВЕЖЕЕ ДЫХАНИЕ В КОРПОРАТИВНОЙ ЖИЗНИ
            <p className="font-[400] text-[18px] leading-[1.5] tracking-[1px]">
              Ми вдосконалили процес замовлення продукції для того, щоб Ви Ваша
              компанія сконцентрувались на основних задачах досягали поставлених
              цілей.
            </p>
          </h1>

          <Circle />
        </div>
        <svg
          className="absolute bottom-6 left-0 w-full bg-transparent"
          viewBox="0 0 1000 50"
          preserveAspectRatio="none"
        >
          <path d="M0,30 C250,0 750,50 1000,30 L1000,50 L0,50 Z" fill="#fff" />
        </svg>

        <img src="src/assets/img/preview 1.png" alt="Photo" />
      </section>

      <section className=" px-[161px] py-[60px] bg-img flex flex-col gap-[30px]">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-[48px] font-[700] flex items-start gap-[28px]">
              Самое популярное
              <TiStarFullOutline color="#1FAB8A" size={32} />
            </h1>
            <p className="text-[18px] tracking-[1.8px] text-[#454747]">
              товары, которые наиболее часто заказывают наши клиенты
            </p>
          </div>
          <button className="flex items-center gap-[20px] tracking-[1.8px]">
            Все товары
            <HiArrowLongRight size={31} color="#272525" />
          </button>
        </header>

        <div className="flex gap-[17px] items-start">
          <p className="flex flex-col items-center gap-[22px]">
            <img src="src/assets/img/card 1 (1).png" alt="" />
            Шоперы
          </p>
          <div className="flex flex-col items-start gap-[15px]">
            <img src="src/assets/img/card 2.png" alt="" />
            <div className="flex items-center gap-[8px]">
              <img src="src/assets/img/card 3.png" alt="" />
              <img src="src/assets/img/card 4.png" alt="" />
            </div>
          </div>
        </div>

        <svg
          className="absolute bottom-6 left-0 w-full bg-transparent"
          viewBox="0 0 1000 50"
          preserveAspectRatio="none"
        >
          <path d="M0,30 C250,0 750,50 1000,30 L1000,50 L0,50 Z" fill="#fff" />
        </svg>
      </section>

      <section className="bg-img2 flex items-center px-[161px] py-[80px] my-[120px]">
        <div className="flex flex-col items-center gap-[23px]">
          <img src="src/assets/img/Pangolin.png" alt="Pangolin" />
          <div className="flex flex-col gap-[40px] items-start">
            <h1 className="text-[48px] font-[700] w-[1000px] flex flex-col gap-[23px] leading-[1.2]">
              Хотите удивить ваших коллег/партнеров необычными подарками?
              <span className="font-[400] text-[18px] w-[592px] tracking-[1.5px] leading-[1.8]">
                Выбирайте готовые подарочные наборы или укажите критерии по
                которым мы соберем для Вас уникальный бокс.
              </span>
            </h1>
            <div>
              <Button title="Перейти к наборам" className="bg-black" />
              <Button
                title="Создать свой"
                className="bg-[#EEF1F6] text-black"
              />
            </div>
          </div>
        </div>
        <img
          src="src/assets/img/Photo (12).png"
          alt="Photo"
          className="absolute right-0"
        />
      </section>

      <section className="px-[161px] py-[80px] flex items-center gap-[39px]">
        <div className="flex flex-col items-start">
          <img
            className="absolute mt-[-100px] ml-[-90px] z-[-1]"
            src="src/assets/img/Ellipse 26 (1).png"
            alt="Ellipse_Top"
          />
          <img
            src="src/assets/img/Sweater_Mockup_Front_and_Back 1.png"
            alt="Sweater_Mockup_Front_and_Back"
          />
          <img
            className="absolute mt-[390px] z-[-1] ml-[590px]"
            src="src/assets/img/Ellipse 27.png"
            alt="Ellipse_Bottom"
          />
        </div>
        <div className="flex flex-col gap-[40px] items-start">
          <h1 className="w-[850px] font-[700] text-[36px]">
            Помимо готовой продукции высокого качества, мы можем для Вас
            произвести одежду, аксессуры, вкусности и другое под заказ.
          </h1>
          <p className="font-[400] text-[18px] tracking-[1.5px w-[500px]">
            Благодаря личному производству мы изготавливаем большие партии в
            короткие сроки, а так же у Вас всегда есть возможность
            кастомизировать изделия.
          </p>
          <SwiperCircle />
        </div>
      </section>
    </main>
  );
}
