"use client";

import { useState } from "react";
import { navbarItems } from "../constants/data";
import { Logo } from "./ui/icons";
import { ArrowRightSm } from "react-coolicons";

const NavBar = () => {
  const [activeId, setActiveId] = useState<number | null>(1);
  return (
    <nav className="flex items-center justify-between w-full">
      <div className="cursor-pointer">
        <Logo />
      </div>
      <ul className="flex items-center bg-[#F7F7F7] p-1 rounded-[50px] border border-[#EEEEEE]">
        {navbarItems?.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`text-sm leading-5 py-3 px-5 cursor-pointer font-satoshi-medium
                  ${
                    activeId === item.id
                      ? "bg-white rounded-[50px] text-[#0D0D0D]"
                      : "text-[#525252]"
                  }`}
          >
            {item?.title}
          </li>
        ))}
      </ul>
      <ul className="flex gap-2 items-center">
        <li className="text-sm leading-5 text-[#525252] font-satoshi-medium px-8 py-4 bg-[#F7F7F7] rounded-[50px] cursor-pointer">
          Log in
        </li>
        <li className="flex items-center gap-1 px-8 py-4 bg-linear-to-r from-[#FFD339] to-[#FFB839] rounded-[50px] cursor-pointer">
          <span className="text-sm leading-5 font-satoshi-bold text-[#0D0D0D]">
            Sign in
          </span>
          <ArrowRightSm width={20} height={20} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
