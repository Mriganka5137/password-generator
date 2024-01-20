"use client";
import Image from "next/image";
import iconCopy from "@/public/assets/images/icon-copy.svg";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  const [length, setLength] = useState(3);

  const handleValueChange = (value: number[]) => {
    setLength(value[0]);
  };

  return (
    <main className="w-full h-screen border border-red-500 p-4 md:pt-36 pt-16">
      {/* Password Generator */}
      <div className=" max-w-[540px]  border border-yellow-800 mx-auto text-center">
        <h3 className="text-brand-grey">Password Generator</h3>

        {/* Copy Password */}
        <div className=" flex justify-between px-8 py-5 items-center bg-dark-grey mt-8 max-md:mt-4 max-md:px-4 max-md:py-4 ">
          <h2>PTx1f5DaFX</h2>
          <Image
            alt="copy"
            src={iconCopy}
            width={21}
            height={24}
            className=" w-5 h-6 max-md:w-4 max-md:h-5"
          />
        </div>

        {/* Password Settings */}

        <div className=" bg-dark-grey flex flex-col w-full mt-6 p-8 ">
          {/* Label and length */}
          <div className="flex justify-between items-center ">
            <p className="text-almost-white">Character Length</p>
            <h2 className="text-neon-green">{length}</h2>
          </div>
          {/* Range */}
          <Slider
            min={3}
            max={20}
            step={1}
            onValueChange={handleValueChange}
            className="mt-6"
          />
        </div>
      </div>
    </main>
  );
}
