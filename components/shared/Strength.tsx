import React from "react";

interface Props {
  strength: number;
}

const strengthMap: { [key: number]: string } = {
  1: "Too weak!",
  2: "Weak",
  3: "Medium",
  4: "Strong",
};

const Strength = ({ strength }: Props) => {
  return (
    <div className="w-full bg-very-dark-grey px-8 py-6 flex justify-between mt-8 items-center max-md:py-3 max-md:px-4">
      <p className=" text-brand-grey max-md:text-[15px]">STRENGTH</p>
      <div className=" flex justify-between gap-3 items-center">
        <h3 className=" uppercase">{strengthMap[strength]}</h3>
        <div className=" flex justify-between gap-2 items-center">
          <div
            className={`w-3 h-8 border-2 border-white ${
              strength === 1
                ? "bg-brand-red border-none"
                : strength === 2
                ? "bg-brand-orange border-none"
                : strength === 3
                ? "bg-brand-yellow border-none"
                : strength === 4
                ? "bg-neon-green border-none"
                : ""
            } `}
          ></div>
          <div
            className={`w-3 h-8 border-2 border-white 
                ${
                  strength === 1
                    ? ""
                    : strength === 2
                    ? "bg-brand-orange border-none"
                    : strength === 3
                    ? "bg-brand-yellow border-none"
                    : strength === 4
                    ? "bg-neon-green border-none"
                    : ""
                }
            `}
          ></div>
          <div
            className={`w-3 h-8 border-2 border-white 
                 ${
                   strength === 1
                     ? ""
                     : strength === 2
                     ? ""
                     : strength === 3
                     ? "bg-brand-yellow border-none"
                     : strength === 4
                     ? "bg-neon-green border-none"
                     : ""
                 }
            `}
          ></div>
          <div
            className={`w-3 h-8 border-2 border-white 
                                 ${
                                   strength === 1
                                     ? ""
                                     : strength === 2
                                     ? ""
                                     : strength === 3
                                     ? ""
                                     : strength === 4
                                     ? "bg-neon-green border-none"
                                     : ""
                                 }
            `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Strength;
