import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { Button } from "./ui/Button";

export function Navbar() {
  return (
    <nav className="bg-custom-gradient px-[161px] py-[41px] flex items-center justify-between">
      <img src="src/assets/icons/logo (15).png" alt="Logo" />
      <div className="border-[4px] border-[black] rounded-[90px] py-[10px] px-[28px] flex items-center gap-[10px]">
        <BiSearch color="#605e5e" size={24} />
        <input
          type="text"
          className="placeholder:text-[#605e5e] w-[400px] h-[40px] px-[7px] text-[#605e5e] bg-[transparent] text-[20px]"
          placeholder="Поиск"
        />
      </div>
      <Button title="+380 630 130 103" className="bg-[#1FAB8A]" />
      <div className="flex items-center gap-[40px] text-[18px]">
        <AiOutlineUser size={40} />
        <div className="bg-[#1FAB8A5C] p-[15px] rounded-[90px]">
          <div className="bg-[#1FAB8A] p-[10px] rounded-[90px]">
            <img src="src/assets/icons/shopping-basket.png" alt="" />
            <span className="bg-[#fff] absolute mt-[-42px] ml-[25px] rounded-[90px] text-[12px] px-[5px] ">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
