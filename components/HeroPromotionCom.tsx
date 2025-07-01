"use client";

import { Tag } from "lucide-react";

// Add custom animation
const animationStyle = `
  @keyframes jingle {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(8deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(-8deg); }
    100% { transform: rotate(0deg); }
  }
  .animate-jingle {
    animation: jingle 1.5s ease-in-out infinite;
  }
`;

export default function HeroPromotionCom() {
  return (
    <>
      <style jsx global>
        {animationStyle}
      </style>
      <div className="flex items-center gap-4 py-2">
        <div className="relative flex-shrink-0">
          <div className="w-[70px] h-[70px] rounded-full border-2 border-blue-100 flex items-center justify-center relative">
            <div className="absolute w-[55px] h-[55px] rounded-full border-2 border-blue-200 flex items-center justify-center">
              <div
                className="relative animate-jingle"
                style={{ transformOrigin: "top left" }}
              >
                <Tag className="w-5 h-5 text-blue-500 -rotate-25" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg ">
            <strong>Limited-Time Offer:</strong> Save <strong>70% off</strong>
          </h2>
          <h3 className="font-bold"> + Includes 3-Day Claim Extra</h3>
        </div>
      </div>
    </>
  );
}
