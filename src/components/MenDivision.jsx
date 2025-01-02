import { useState, useEffect } from "react";
import Search from "./Search";

const MenDivision = () => {
  const [fighters, setFighters] = useState([]);
  const [filteredFighters, setFilteredFighters] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/Men")
      .then((response) => response.json())
      .then((data) => {
        setFighters(data);
        setFilteredFighters(data);
        const uniqueCategories = ["All", ...new Set(data.map((fighter) => fighter.weightClass))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching fighters:", error));
  }, []);

  const filterFighters = (category) => {
    if (category === "All") {
      setFilteredFighters(fighters);
    } else {
      setFilteredFighters(fighters.filter((fighter) => fighter.weightClass === category));
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredByName = filteredFighters.filter((fighter) =>
    fighter.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="men-page">
      <h1>Men&apos;s Division</h1>
      <Search onSearch={handleSearch} />
      <div className="filter">
        {categories.map((cat) => (
          <button className="category-button" key={cat} onClick={() => filterFighters(cat)}>
            {cat}
          </button>
        ))}
      </div>
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
