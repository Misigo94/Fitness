import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchBar = ({ placeholder, data }) => {
  const [filter, setFilter] = useState([]);
  const [wordEntered, setWordEntered] = useState(" ");

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilter([]);
    } else {
      setFilter(newFilter);
    }
  };
  const clearInput = () => {
    setFilter([]);
    setWordEntered("");
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
          value={wordEntered}
        />
        <div className="searchIcon">
          {filter.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filter.length != 0 && (
        <div className="dataResults">
          {filter.slice(0, 5).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
