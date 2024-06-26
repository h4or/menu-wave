"use client";
import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function ScrollUpButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <Button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 p-4 bg-blue-500 text-white rounded-full shadow-lg"
      >
        ↑
      </Button>
    )
  );
}
