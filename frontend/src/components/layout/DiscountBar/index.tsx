import Link from "next/link";
import React from "react";

const DiscountBar = () => {
  return (
    <div className="container flex justify-center items-center gap-[12px] text-[12px] md:text-[14px] h-[36px] md:h-[40px] relative before:content-[''] before:bg-[url(/icons/discount.svg)] before:w-[16px] before:h-[16px] md:before:w-[24px] md:before:h-[24px] before:inline-block before:bg-no-repeat before:bg-cover">
      <p className="font-semibold">30% off storewide — Limited time!</p>
      <Link
        className="text-[0px] text-[var(--secondary-blue)] flex md:text-[14px] decoration-[var(--secondary-blue)] underline underline-offset-2 relative after:content-[''] after:bg-[url(/icons/arrow-right.svg)] after:w-[0px] after:h-[0px] md:after:w-[18px] md:after:h-[18px] after:inline-block after:bg-no-repeat after:bg-cover after:ml-[4px] "
        href="/shop"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default DiscountBar;
