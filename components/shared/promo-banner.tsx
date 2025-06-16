"use client";
import Image from "next/image";
import { useCountdown } from "@/utils/useCountdown";

export default function PromoBanner() {
  const { days, hours, minutes, seconds } = useCountdown();
  const format = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="w-full relative">
      <Image
        src="/image/Pricing-banner.png"
        alt="Promo Banner"
        layout="responsive"
        width={1200}
        height={400}
        className="object-cover hidden sm:block"
      />
      <Image
        src="/image/mobile.png"
        alt="Promo Banner Small"
        layout="responsive"
        width={600}
        height={200}
        className="object-cover block sm:hidden"
      />
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0  mt-20 md:mt-0 md:px-12 flex flex-row justify-start items-center">
        <div className="text-left  p-4 rounded-lg w-full ">
          <h2 className="text-sm md:text-2xl font-bold text-white [text-shadow:_1px_1px_1px_rgba(0,0,0,0.3)] md:[text-shadow:_2px_2px_1px_rgba(0,0,0,0.2)]">
            Time to Go Novix — Get 70% Off Today!
          </h2>
          <p className="md:text-xs text-[9px] text-white mt-2 [text-shadow:_1px_1px_1px_rgba(0,0,0,0.3)] md:[text-shadow:_2px_2px_1px_rgba(0,0,0,0.3)]">
            Offer Ends In{" "}
            <span className="text-[#f39e2e] font-bold md:text-2xl px-1">
              {format(days)}
            </span>{" "}
            Days
            <span className="text-[#f39e2e] font-bold md:text-2xl px-1">
              {format(hours)}
            </span>{" "}
            Hours
            <span className="text-[#f39e2e] font-bold md:text-2xl px-1">
              {format(minutes)}
            </span>{" "}
            Minutes
            <span className="text-[#f39e2e] font-bold md:text-2xl px-1">
              {format(seconds)}
            </span>{" "}
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
}
