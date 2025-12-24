import React, { useState } from "react";

export default function TextArea({
  placeholder = "",
  value: propValue,
  onChange,
}) {
  const [value, setValue] = useState(propValue || "");

  function handleChange(e) {
    setValue(e.target.value);
    onChange?.(e.target.value);
  }

  return (
    <textarea
      className="w-full p-2 border rounded"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}
