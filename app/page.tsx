"use client";
import { CheckboxList } from "@/components/shared/CheckboxList";
import Strength from "@/components/shared/Strength";
import { Slider } from "@/components/ui/slider";
import iconCopy from "@/public/assets/images/icon-copy.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export type OptionKeys = "uppercase" | "lowercase" | "numbers" | "symbols";

export type OptionsType = {
  [K in OptionKeys]: boolean;
};

export default function Home() {
  const [strength, setStrength] = useState(0);
  const [length, setLength] = useState(3);
  const [options, setOptions] = useState<OptionsType>({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const handleCheckboxChange = (id: string) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [id]: !prevOptions[id as OptionKeys],
    }));
  };

  const handleValueChange = (value: number[]) => {
    setLength(value[0]);
  };

  const calculateStrength = () => {
    const { uppercase, lowercase, numbers, symbols } = options;
    let strength = 0;
    if (uppercase) strength++;
    if (lowercase) strength++;
    if (numbers) strength++;
    if (symbols) strength++;
    return strength;
  };

  useEffect(() => {
    const strengthVal = calculateStrength();
    setStrength(strengthVal);
  }, [options]);

  return (
    <main className="w-full  border border-red-500 md:pt-36 pt-16 pb-16">
      {/* Password Generator */}
      <div className=" max-w-[540px]   mx-auto text-center">
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

        <div className=" bg-dark-grey flex flex-col w-full mt-6 p-8 max-md:p-3.5 ">
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
          {/* Checkboxes */}
          <CheckboxList
            options={options}
            handleCheckboxChange={handleCheckboxChange}
          />

          {/* Strength */}
          <Strength strength={strength} />
        </div>
      </div>
    </main>
  );
}
