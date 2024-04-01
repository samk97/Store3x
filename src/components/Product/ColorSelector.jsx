import React from 'react';

const ColorSelector = ({ colors }) => {
  return (
    <div className="flex items-center gap-2">
      {colors.map((color, index) => (
        <div className="color-selector" key={index}>
          <input type="radio" name="color" id={color} className="hidden" />
          <label
            htmlFor={color}
            className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
            style={{ backgroundColor: color }}
          />
        </div>
      ))}
    </div>
  );
};

export default ColorSelector;
