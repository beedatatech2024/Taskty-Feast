import React, { useState } from "react";
import SearchButton from "./SearchButton";
const Search = () => {
  const [searchItem,setSearchItem]=useState("")
  const handleInputChange=(event)=>{
    setSearchItem(event.target.value);
  }
  const handleSearch=()=>{
    console.log(searchItem);
  }
  return (
    <div className="flex justify-center items-center">
      <div className="p-2 flex">
        <input
          className="border p-2 rounded-l-full w-64 border-black"
          value={searchItem}
          onChange={handleInputChange}
        />
        <SearchButton onClick={handleSearch}/>
      </div>
    </div>
  );
};

export default Search;
