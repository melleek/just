export function BgPurple({ title, desc, img, children }) {
  return (
    <div className="flex bg-custom px-[161px] items-center">
      <div className="flex flex-col gap-[60px]">
        <h1 className="text-[48px] font-[900] leading-[1.2] tracking-[0.04px] flex flex-col gap-[20px] uppercase">
          {title}
          <p className="font-[400] text-[18px] leading-[1.5] tracking-[1px]">
            {desc}
          </p>
        </h1>
        {children}
      </div>
      <img src={img} alt="Photo" />
    </div>
  );
}
