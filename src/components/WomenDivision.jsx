import { useState, useEffect } from "react";

const WomenDivision = () => {
  const [fighters, setFighters] = useState([]);
  const [filteredFighters, setFilteredFighters] = useState([]);
  const [category, setCategory] = useState("All"); // For filtering by weight class

  // Fetch fighters from the Women endpoint
  useEffect(() => {
    fetch("http://localhost:4000/Women")
      .then((response) => response.json())
      .then((data) => {
        setFighters(data); // Assuming the response directly contains the fighters array
        setFilteredFighters(data); // Initially, show all fighters
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

  return (
    <div>
      <h1>Women's Division</h1>

      {/* Filter buttons for each weight class */}
      <div className="filter">
        <button onClick={() => onCategoryChange("All")}>All</button>
        <button onClick={() => onCategoryChange("Strawweight")}>Strawweight</button>
        <button onClick={() => onCategoryChange("Flyweight")}>Flyweight</button>
        <button onClick={() => onCategoryChange("Bantamweight")}>Bantamweight</button>
        <button onClick={() => onCategoryChange("Featherweight")}>Featherweight</button>
      </div>

      {/* Display filtered fighters */}
      <div className="fighters-list">
        {filteredFighters.length > 0 ? (
          filteredFighters.map((fighter) => (
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

export default WomenDivision;