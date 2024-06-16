import React, { useState } from "react";
import DisplayProduct from "./DisplayProduct";
import { useDispatch } from "react-redux";
import { searchItem } from "../redux/SearchBar/actions";

const SearchBar = () => {
  const [searchData, setSerachData] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setSerachData(value);

    // if (value === "") {
    // }
  };

  const handleSearch = () => {
    dispatch({ type: searchItem(), payload: searchData });
  };

  return (
    <div>
      <div className="searchBar">
        <input
          type="search"
          placeholder="search here ..."
          onChange={handleChange}
          value={searchData}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="products">
        <DisplayProduct />
      </div>
    </div>
  );
};

export default SearchBar;
