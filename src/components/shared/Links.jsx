import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { id: 1, linkName: "Главная", to: "/" },
  { id: 2, linkName: "Категории", to: "/category" },
  { id: 3, linkName: "Все товары", to: "/allProducts" },
  { id: 4, linkName: "Производство", to: "*" },
  { id: 5, linkName: "Информация", to: "*" }
];

export function Links() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="bg-[#79797922] px-[161px] flex item-center justify-between">
      <div className="flex gap-[36px] items-center">
        {links.map((link) => (
          <div key={link.id} className="flex flex-col gap-[10px] items-center">
            <Link
              to={link.to}
              className={`rounded-lg
                ${
                  activeId === link.id
                    ? "bg-black text-white py-[29px] px-[44px]"
                    : "bg-transparent text-black"
                }`}
              onClick={() => {
                setActiveId(link.id);
              }}
            >
              {link.linkName}
            </Link>
            {activeId === link.id && (
              <hr className="w-full rounded-[8px] h-[8px] bg-black" />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-[36px]">
        <h1 className="text-[#3C336C] font-[900] text-[40px]">
          Шопперы со скидкой - 25%
        </h1>
        <img src="src/assets/img/banner.png" alt="" />
      </div>
    </section>
  );
}
