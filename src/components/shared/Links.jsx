import React, { useState } from "react";

const links = [
  { id: 1, linkName: "Наборы" },
  { id: 2, linkName: "Все товары" },
  { id: 3, linkName: "Пошив" },
  { id: 4, linkName: "Производство" },
  { id: 5, linkName: "Информация" }
];

export function Links() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="bg-[#79797922] px-[161px] flex item-center justify-between">
      <div className="flex gap-[36px] items-center">
        {links.map((link) => (
          <div key={link.id} className="flex flex-col gap-[10px] items-center">
            <button
              className={`rounded-lg
                ${
                  activeId === link.id
                    ? "bg-black text-white py-[29px] px-[44px]"
                    : "bg-transparent text-black"
                }`}
              onClick={() => setActiveId(link.id)}
            >
              {link.linkName}
            </button>
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
