"use client";
import { useState } from "react";

const RadioButton = () => {
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log("Selected value:", e.target.value);
  };

  return (
    <div className="flex items-center gap-4">
      <label className="font-bold pe-10">Integrasi Data Dari CBS:</label>
      <div className="flex items-center gap-2">
        <input type="radio" id="yes" name="integration" value="yes" checked={value === "yes"} onChange={handleChange} />
        <label htmlFor="yes">
          Ya
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" id="no" name="integration" value="no" checked={value === "no"} onChange={handleChange} />
        <label htmlFor="no">
          No
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
