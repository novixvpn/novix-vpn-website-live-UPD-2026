"use client";

import { useCountdown } from "@/utils/useCountdown";
import { CircleCheck, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdown();
  const format = (n: number) => n.toString().padStart(2, "0");

  const [isVisible, setIsVisible] = useState(true);
  const [onHoverVisible, setOnHoverVisible] = useState<boolean>(false);

  // Show the half component after 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setOnHoverVisible(true);
      clearInterval(timer);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      onMouseEnter={() => setOnHoverVisible(false)}
      onMouseLeave={() => setOnHoverVisible(true)}
      className={`relative mx-auto max-w-md rounded-tr-lg bg-[#0052cc] p-4 text-center shadow-lg transition-all duration-500 ease-in-out  ${
        onHoverVisible ? "-mb-24" : ""
      }`}
    >
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-2 text-white/70 hover:text-white"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <h2 className="mb-2 text-2xl font-bold text-white">Time to go!</h2>

      <div className="mb-4 flex justify-center space-x-2 text-center">
        <div className="flex flex-col items-center">
          <span className="text-xl  font-bold text-[#f39e2e]">
            {format(days)}
          </span>
          <span className="mt-2 text-white text-xs">Days</span>
        </div>

        <span className="text-xl font-bold text-white">:</span>

        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-[#f39e2e]">
            {format(hours)}
          </span>
          <span className="mt-2 text-white text-xs">Hours</span>
        </div>

        <span className="text-xl font-bold text-white">:</span>

        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-[#f39e2e]">
            {format(minutes)}
          </span>
          <span className="mt-2 text-white text-xs">Minutes</span>
        </div>

        <span className="text-xl font-bold text-white">:</span>

        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-[#f39e2e]">
            {format(seconds)}
          </span>
          <span className="mt-2 text-white text-xs">Seconds</span>
        </div>
      </div>

      <div className="relative mb-2">
        <button className="w-fit rounded-full bg-[#FF7A45] px-6 py-2 text-md font-bold text-white transition-transform hover:scale-105">
          Save 70% Now!
        </button>
      </div>
      <div className="flex text-[10px] items-center justify-center gap-2 text-white">
        <CircleCheck />
        <span>48-hours Money-Back Guarantee</span>
      </div>
    </div>
  );
}
