import { useState } from "react";
import { Container, Button } from "react-bootstrap";

function SearchBar({ initialValue, onSearch }) {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <>
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control mb-2"
          id="searchField"
          placeholder={`Search`}
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={searchValue}
          onChange={handleInputChange}
        />
        <div className="input-group-append" style={{ marginBottom: "4%" }}>
          <button className="btn btn-outline-secondary btn-sm" type="button" id="button-addon1" onClick={handleSearch}>
            GO
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;