"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, CirclePlus } from "lucide-react";
import { Button } from "../ui/button";
import EnterIcon from "../Icons/enter-icon";
import { TextLoop } from "../ui/text-loop";
import { useIsMobile } from "@/hooks/use-mobile";

const AnimatedInputUI = () => {
  const [inputValue, setInputValue] = useState("");
  const isMobile = useIsMobile();
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  const placeholders = [
    "Explain the probability of rolling two dice and getting 7",
    "How do I calculate compound interest?",
    "What's the derivative of x² + 3x?",
    "Solve for x: 2x + 5 = 13",
    "Explain machine learning in simple terms",
    "What are the steps to solve a quadratic equation?",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [placeholders.length]);

  return (
    <div className="w-full max-w-3xl order-3 md:order-0 sticky bottom-0">
      <div className="relative">
        <div className="flex items-center bg-background rounded-full shadow-lg border border-gray-200 px-6 py-4 transition-all duration-200 hover:shadow-xl focus-within:shadow-xl focus-within:border-gray-300">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 text-primary text-lg outline-none bg-transparent placeholder-transparent"
            placeholder={placeholders[currentPlaceholder]}
          />

          {/* Animated placeholder */}
          {!inputValue && (
            <TextLoop className="absolute z-0 left-6 hidden md:block pointer-events-none">
              {placeholders.map((placeholder, index) => (
                <span key={index} className="text-gray-400">
                  {placeholder}
                </span>
              ))}
            </TextLoop>
          )}

          <div className="flex items-center  gap-1 md:gap-3 md:ml-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <CirclePlus className="size-6 text-gray-600" />
            </Button>

            <Button variant="secondary" size={isMobile ? "icon" : undefined} className="rounded-full text-gray-500">
              <span className="font-medium hidden md:block">Run</span>
              <div className="items-center gap-1 hidden md:flex">
                <span>Ctrl</span>
                <EnterIcon className="size-4 mt-1" />
              </div>
              <ArrowUp className="size-4 md:hidden" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedInputUI;
