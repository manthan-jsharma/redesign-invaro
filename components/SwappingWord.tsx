"use client";

import { useEffect, useState } from "react";

const words = ["Agencies", "Entrepreneurs", "Startups"];

export function SwappingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000); // change word every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-primary transition-opacity duration-300 ease-in-out">
      {words[index]}
    </span>
  );
}
