import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-[var(--neutral-06)] flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <div>
          <Image src={"/icons/logo-white.svg"} alt={"logo"} width={105} height={24} />
          <div className="w-[24px] h-[1px] md:w-[1px] md:h-[24px] bg-[var(--neutral-04)]"></div>
          Gift & Decoration Store
        </div>
        <nav className="">
          <ul className="flex jucstify-center items-center gap-[40px] w-0 h-0 text-[16px] text-[var(--neutral-01)] font-medium">
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
      </div>
      <div>
        <ul className="icons">
          <li className="w-[24px] h-[24px]">
            <Image
              src={"/icons/instagram.svg"}
              alt={"instagram"}
              width={20}
              height={20}
            />
          </li>
          <li className="w-[24px] h-[24px]">
            <Image
              src={"/icons/instagram.svg"}
              alt={"instagram"}
              width={20}
              height={20}
            />
          </li>
          <li className="w-[24px] h-[24px]">
            <Image
              src={"/icons/instagram.svg"}
              alt={"instagram"}
              width={20}
              height={20}
            />
          </li>
        </ul>
        <ul className="flex jucstify-center items-center gap-[40px] w-0 h-0 text-[0px] md:text-[16px] md:w-fit md:h-fit font-medium">
          <li>
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={"/terms-of-use"}>Terms of Use</Link>
          </li>
        </ul>
        <p className="text-[var(--neutral-03)]">
          Copyright © 2023 3legant. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
