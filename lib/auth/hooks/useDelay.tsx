"use client";
import { useState, useEffect } from "react";

const useDelay = (delay: number) => {
  const [time, setTime] = useState(delay / 1000); // convert to seconds
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (time <= 0) {
      setIsLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000); // 1 second

    return () => clearInterval(interval);
  }, [time]);

  return {
    time,
    setTime,
    isLoading,
    setIsLoading,
  };
};

export default useDelay;