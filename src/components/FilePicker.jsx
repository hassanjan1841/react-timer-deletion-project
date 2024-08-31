import React, { useRef, useState } from "react";

function ColorPickerForm({ handleAddClick }) {
  const [inputText, setInputText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [textColor, setTextColor] = useState("#ffffff");

  //   const handleAddClick = () => {
  //     // Handle add button click
  //     console.log(`Text: ${inputText}, Background Color: ${backgroundColor}, Text Color: ${textColor}`);
  //   };

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto mt-10">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text"
        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="color"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
        className="w-10 h-10 border-none"
        title="Background Color"
      />
      <input
        type="color"
        value={textColor}
        onChange={(e) => setTextColor(e.target.value)}
        className="w-10 h-10 border-none"
        title="Text Color"
      />
      <button
        onClick={() =>
          handleAddClick({ inputText, backgroundColor, textColor })
        }
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </div>
  );
}

export default ColorPickerForm;
