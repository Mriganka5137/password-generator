import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { OptionKeys } from "@/app/page";

interface CheckboxListProps {
  options: {
    [key in OptionKeys]: boolean;
  };
  handleCheckboxChange: (id: string) => void;
}

export const CheckboxList = ({
  options,
  handleCheckboxChange,
}: CheckboxListProps) => {
  const checkboxData = [
    { id: "uppercase", label: "Include Uppercase letters" },
    { id: "lowercase", label: "Include Lowercase letters" },
    { id: "numbers", label: "Include Numbers" },
    { id: "symbols", label: "Include Symbols" },
  ];

  return (
    <div className="mt-10 space-y-5">
      {checkboxData.map(({ id, label }) => (
        <div key={id} className="flex gap-5 items-center">
          <Checkbox
            id={id}
            checked={options[id as OptionKeys]}
            onCheckedChange={() => handleCheckboxChange(id)}
          />
          <label htmlFor={id}>
            <p>{label}</p>
          </label>
        </div>
      ))}
    </div>
  );
};
