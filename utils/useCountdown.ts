import { useEffect, useState } from "react";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(): Countdown {
  const OFFER_DURATION = 4 * 60 * 60 + 44 * 60 + 24; // 4h 44m 24s
  const STORAGE_KEY = "offer_target_date";

  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedDate = localStorage.getItem(STORAGE_KEY);
    let finalDate: Date;

    if (storedDate) {
      finalDate = new Date(storedDate);
    } else {
      finalDate = new Date(Date.now() + OFFER_DURATION * 1000);
      localStorage.setItem(STORAGE_KEY, finalDate.toISOString());
    }

    setTargetDate(finalDate);
  }, []);

  useEffect(() => {
    if (!targetDate) return;

    const calculateTimeLeft = () => {
      const now = new Date();
      let difference = +targetDate - +now;

      // Restart the countdown if time is up
      if (difference <= 0) {
        const newTarget = new Date(now.getTime() + OFFER_DURATION * 1000);
        localStorage.setItem(STORAGE_KEY, newTarget.toISOString());
        setTargetDate(newTarget);
        difference = +newTarget - +now;
      }

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { days: 0, hours, minutes, seconds };
    };

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
