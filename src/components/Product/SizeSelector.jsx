import React from 'react';

const SizeSelector = ({ sizes }) => {
  return (
    <div className="flex items-center gap-2">
      {sizes.map((size, index) => (
        <div className="size-selector" key={index}>
          <input type="radio" name="size" id={`size-${size}`} className="hidden" />
          <label
            htmlFor={`size-${size}`}
            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
          >
            {size}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SizeSelector;
