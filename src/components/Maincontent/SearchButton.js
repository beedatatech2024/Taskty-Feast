import React from "react";

const SearchButton = ({onClick}) => {
  return (
    <div>
      <button
        className="p-2 rounded-r-full border w-14 border-black"
        onClick={onClick}
      >
        🔍
      </button>
    </div>
  );
};

export default SearchButton;
