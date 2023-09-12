import React from "react";
interface SearchProps {
  setFilter: (country: string) => void;
}
const Search: React.FC<SearchProps> = ({ setFilter }) => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};
export default Search;