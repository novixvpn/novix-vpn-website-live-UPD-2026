"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 2,
    minutes: 13,
    seconds: 29,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                // Reset timer when it reaches zero
                days = 0;
                hours = 2;
                minutes = 13;
                seconds = 29;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 text-center">
      <div className="flex flex-col">
        <span className="text-4xl font-bold">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <span className="text-sm">Days</span>
      </div>
      <span className="text-4xl font-bold">:</span>
      <div className="flex flex-col">
        <span className="text-4xl font-bold">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-sm">Hours</span>
      </div>
      <span className="text-4xl font-bold">:</span>
      <div className="flex flex-col">
        <span className="text-4xl font-bold">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-sm">Minutes</span>
      </div>
      <span className="text-4xl font-bold">:</span>
      <div className="flex flex-col">
        <span className="text-4xl font-bold">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-sm">Seconds</span>
      </div>
    </div>
  );
}
