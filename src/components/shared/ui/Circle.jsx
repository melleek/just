const circle = [
  {
    id: 1,
    img: "src/assets/img/circle.png",
    title: "Высокое качество",
    desc: "ONLY"
  },
  {
    id: 2,
    img: "src/assets/img/circle.png",
    title: "Поддержка менеджера",
    desc: "24/7"
  },
  {
    id: 3,
    img: "src/assets/img/circle.png",
    title: "Выполнение заказа в",
    desc: "TURBO-режиме"
  }
];
export function Circle() {
  return (
    <div className="flex gap-[12px]">
      {circle.map((item) => (
        <div key={item.id} className="w-[215px] flex flex-col items-center gap-[9px]">
          <img src={item.img} alt="" />
          <h1 className="text-center text-[22px]">
            {item.title} <span className="font-[700]">{item.desc}</span>
          </h1>
        </div>
      ))}
    </div>
  );
}
