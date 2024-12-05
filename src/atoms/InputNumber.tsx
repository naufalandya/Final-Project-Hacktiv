import React from "react";

type InputNumberProps = {
  value: number;
  onChange: (value: number) => void;
};

const InputNumber: React.FC<InputNumberProps> = ({ value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(1, parseInt(e.target.value) || 1);
    onChange(newValue);
  };

  return (
    <input
      type="number"
      min="0"
      value={value}
      onChange={handleInputChange}
      className="w-16 border rounded-md text-center"
    />
  );
};

export default InputNumber;
