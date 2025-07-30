"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="container flex justify-between items-center h-[60px]">
      <div className="md:w-0 md:h-0 flex justify-center items-center md:hidden">
        <button className="w-[24px] h-[24px] md:w-0 md:h-0">
          <Image
            src={"/icons/burger-menu.svg"}
            alt="logo"
            width={14}
            height={10}
          />
        </button>
        <Image src={"/icons/logo.svg"} alt="logo" width={70} height={24} />
      </div>
      <Image
        src={"/icons/logo.svg"}
        alt="logo"
        width={105}
        height={24}
        className="w-0 h-0 md:w-fit md:h-fit"
      />
      <nav className="w-0 h-0 md:w-fit md:h-fit text-[0px]">
        <ul className="flex jucstify-center items-center gap-[40px] w-0 h-0 text-[0px] md:text-[16px] md:w-fit md:h-fit font-medium">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li>
            <Link href={"contact-us"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-[18px]">
        <button onClick={() => {console.log("Searching...")}} className="hidden md:block cursor-pointer">
          <Image
            src={"/icons/search.svg"}
            alt={"search"}
            width={24}
            height={24}
          />
        </button>
        <Link href={"/profile"}>
          <Image src={"/icons/user.svg"} alt={"user"} width={24} height={24} />
        </Link>
        <Link href={"/cart"}>
          <Image src={"/icons/cart.svg"} alt={"cart"} width={24} height={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
