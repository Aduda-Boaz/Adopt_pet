import React, { useState } from "react";

const SearchParams = () => {
  const [location, updateLocation] = useState("Seattle, WA");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="Location">
          Location{" "}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => updateLocation(e.target.value)}
          />{" "}
        </label>{" "}
        <button> Submit </button>{" "}
      </form>{" "}
    </div>
  );
};
export default SearchParams;
