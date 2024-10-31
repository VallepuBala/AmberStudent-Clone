import React from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-container">
        <div className="search-input">
          <MapPin className="input-icon" />
          <input
            type="text"
            placeholder="Enter city or university"
          />
        </div>
        
        <div className="search-input">
          <Calendar className="input-icon" />
          <input
            type="text"
            placeholder="Move-in date"
          />
        </div>

        <button className="search-button">
          <Search className="search-icon" />
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;