import React from "react";
import { BgPurple } from "../shared/ui/BgPurple";
import { Button } from "../shared/ui/Button";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../api/api";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Category() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.todos.todos);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log("=================DATA================");
  console.log(data.subCategories);
  console.log("====================================");

  return (
    <>
      <BgPurple
        children={
          <div className="flex items-center gap-[40px]">
            <Button title="Оставить заявку" className="bg-[#3C336C]" />
            <p className="tracking-[1.5px] text-[#3C336C]">
              Минимальное кол-во: 25
            </p>
          </div>
        }
        title="Современный мерч создает современные бренды"
        desc="Почему? Потому что это ощутимо и это волнует. Это вовлекает, повышает осведомленность и вызывает эмоции. Наша команда всегда погружается в концепт заказа для того, чтобы предложить вам лучшее решение, при этом оптимизировать затраты.  У нас широкий ассортимент  готовых моделей, так же изготовим любую продукцию по Вашему дизайну."
        img="src/assets/img/klipartz 1.png"
      />

      <div className="px-[161px] py-[160px]">
        <header className="flex flex-col gap-[10px]">
          <h1 className="text-[48px] font-[700]">Мы можем пошить</h1>
          <p className="text-[18px] tracking-[1.8px] text-[#454747]">
            Товары, которые наиболее часто заказывают наши клиенты
          </p>
        </header>

        <div className="flex flex-wrap justify-between gap-[80px] rounded-[15px] pt-[60px]">
          {data.map((item) => (
            <Link
              to={item.to}
              key={item.id}
              className="rounded-[20px] gap-[20px] w-[377px] h-[300px] border-1px"
            >
              <img
                className="w-[377px] h-[300px] rounded-[20px]"
                src={item.img}
                alt={item.categoryTitle}
              />
              <p className="text-center pt-[20px] text-[24px]">
                {item.categoryTitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
