import { useState, useEffect } from "react";
import Search from "./Search";

const MenDivision = () => {
  const [fighters, setFighters] = useState([]);
  const [filteredFighters, setFilteredFighters] = useState([]);
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch fighters from the Men endpoint
  useEffect(() => {
    fetch("http://localhost:4000/Men")
      .then((response) => response.json())
      .then((data) => {
        setFighters(data);
        setFilteredFighters(data); // Initially show all fighters
      })
      .catch((error) => console.error("Error fetching fighters", error));
  }, []);

  // Filter fighters by selected category
  const filterFighters = (category) => {
    if (category === "All") {
      setFilteredFighters(fighters); // Show all fighters if "All" is selected
    } else {
      const filtered = fighters.filter((fighter) => fighter.weightClass === category);
      setFilteredFighters(filtered);
    }
  };

  // Handle category change
  const onCategoryChange = (newCategory) => {
    setCategory(newCategory);
    filterFighters(newCategory);
  };

  // Handle search query change
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter fighters by name based on search query
  const filteredByName = filteredFighters.filter((fighter) =>
    fighter.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Men&apos;s Division</h1>

      {/* Search Component */}
      <Search onSearch={handleSearch} />

      {/* Filter buttons for each weight class */}
      <div className="filter">
        <button onClick={() => onCategoryChange("All")}>All</button>
        <button onClick={() => onCategoryChange("Flyweight")}>Flyweight</button>
        <button onClick={() => onCategoryChange("Bantamweight")}>Bantamweight</button>
        <button onClick={() => onCategoryChange("Featherweight")}>Featherweight</button>
        <button onClick={() => onCategoryChange("Lightweight")}>Lightweight</button>
        <button onClick={() => onCategoryChange("Welterweight")}>Welterweight</button>
        <button onClick={() => onCategoryChange("Middleweight")}>Middleweight</button>
        <button onClick={() => onCategoryChange("Light Heavyweight")}>Light Heavyweight</button>
        <button onClick={() => onCategoryChange("Heavyweight")}>Heavyweight</button>
      </div>

      {/* Display filtered fighters */}
      <div className="fighters-list">
        {filteredByName.length > 0 ? (
          filteredByName.map((fighter) => (
            <div key={fighter.id} className="fighter">
              <img src={fighter.image} alt={fighter.name} />
              <h2>{fighter.name}</h2>
              <p>Weight Class: {fighter.weightClass}</p>
              <p>Country: {fighter.Country}</p>
              {fighter.Champion && <p>Champion</p>}
            </div>
          ))
        ) : (
          <p>No fighters found in this category</p>
        )}
      </div>
    </div>
  );
};

export default MenDivision;
