"use client";
import { CheckboxList } from "@/components/shared/CheckboxList";
import CopyIcon from "@/components/shared/CopyIcon";
import GenerateButton from "@/components/shared/GenerateButton";
import Strength from "@/components/shared/Strength";
import { Slider } from "@/components/ui/slider";
import { useEffect, useRef, useState } from "react";

export type OptionKeys = "uppercase" | "lowercase" | "numbers" | "symbols";

export type OptionsType = {
  [K in OptionKeys]: boolean;
};

export default function Home() {
  const passwordRef = useRef(null);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [copied, setCopied] = useState(false);
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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
    } catch (error) {
      console.log(error);
    }
  };

  const generatePassword = () => {
    setCopied(false);
    const { uppercase, lowercase, numbers, symbols } = options;
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbersList = "0123456789";
    const symbolsList = "!@#$%^&*()_+=";
    let password = "";
    let characters = "";
    if (uppercase) characters += uppercaseLetters;
    if (lowercase) characters += lowercaseLetters;
    if (numbers) characters += numbersList;
    if (symbols) characters += symbolsList;
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(password);
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
          {password ? (
            <h2 ref={passwordRef}>{password}</h2>
          ) : (
            <span className="text-brand-grey opacity-50 text-lg">
              Your password
            </span>
          )}

          {copied && <span className="text-neon-green text-lg">Copied!</span>}

          <CopyIcon
            onClick={handleCopy}
            className="w-5 h-6 max-md:w-4 max-md:h-5 "
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
          <GenerateButton generatePassword={generatePassword} />
        </div>
      </div>
    </main>
  );
}
