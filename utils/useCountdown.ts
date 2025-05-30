import { useEffect, useState } from "react";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(): Countdown {
  // Convert 5h 33m 47s to total seconds
  const OFFER_DURATION = 5 * 60 * 60 + 33 * 60 + 47;


  const [targetDate] = useState(() => new Date(Date.now() + OFFER_DURATION * 1000));

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days: 0, hours, minutes, seconds,OFFER_DURATION };
  };

  const [timeLeft, setTimeLeft] = useState<Countdown>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
