import IconArrow from "@/components/shared/IconArrow";
import React from "react";
interface Props {
  generatePassword: () => void;
}

const GenerateButton = ({ generatePassword }: Props) => {
  return (
    <button
      className="uppercase text-[20px] bg-neon-green flex items-center justify-center py-5 mt-8 gap-5 font-semibold hover:bg-transparent border-2 hover:border-neon-green border-transparent hover:text-neon-green group"
      onClick={generatePassword}
    >
      GENERATE
      <IconArrow className=" group-hover:fill-neon-green" />
    </button>
  );
};

export default GenerateButton;
