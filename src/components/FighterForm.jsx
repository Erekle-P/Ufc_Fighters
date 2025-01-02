import { useState } from "react";

const FighterForm = () => {
  const [name, setName] = useState("");
  const [weightClass, setWeightClass] = useState("Choose");
  const [image, setImage] = useState("");
  const [country, setCountry] = useState("");
  const [sex, setSex] = useState("Choose");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || weightClass === "Choose" || image === "" || country === "" || sex === "Choose") {
      alert("Please fill all fields");
      return;
    }

    const division = sex === "Male" ? "Men" : "Women";

    fetch(`http://localhost:4000/${division}`)
      .then((response) => response.json())
      .then((fighters) => {
        const maxId = fighters.length > 0 ? Math.max(...fighters.map((fighter) => fighter.id)) : 0;
        const newFighter = { id: maxId + 1, name, weightClass, image, country, sex };

        fetch(`http://localhost:4000/${division}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newFighter),
        })
          .then((response) => response.json())
          .then(() => {
            setName("");
            setWeightClass("Choose");
            setImage("");
            setCountry("");
            setSex("Choose");
            alert("Fighter added successfully!");
          })
          .catch(() => alert("Error adding fighter."));
      })
      .catch(() => alert("Error fetching fighters."));
  };

  return (
    <form className="fighter-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Fighter Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="weightClass">Weight Class:</label>
        <select id="weightClass" value={weightClass} onChange={(e) => setWeightClass(e.target.value)}>
          <option value="Choose">Choose</option>
          <option value="Strawweight">Strawweight</option>
          <option value="Flyweight">Flyweight</option>
          <option value="Bantamweight">Bantamweight</option>
          <option value="Featherweight">Featherweight</option>
          <option value="Lightweight">Lightweight</option>
          <option value="Welterweight">Welterweight</option>
          <option value="Middleweight">Middleweight</option>
          <option value="Heavyweight">Heavyweight</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input type="url" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="sex">Gender:</label>
        <select id="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="Choose">Choose</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button type="submit">Add Fighter</button>
    </form>
  );
};

export default FighterForm;
