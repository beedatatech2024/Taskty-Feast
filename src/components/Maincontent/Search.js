import React, { useState } from "react";
import SearchButton from "./SearchButton";
const Search = ({onSearch}) => {
  const [searchItem,setSearchItem]=useState("")
  const handleInputChange=(event)=>{
    setSearchItem(event.target.value);
  }
  const handleSearch=()=>{
    onSearch(searchItem);
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission
      handleSearch();
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="p-2 flex">
        <input
          className="border p-2 rounded-l-full w-64 border-black"
          value={searchItem}
          placeholder="Search for Food"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <SearchButton onClick={handleSearch}/>
      </div>
    </div>
  );
};

export default Search;
