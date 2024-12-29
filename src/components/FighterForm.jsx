import React, { useState } from "react";

const FighterForm = () => {
  const [fighter, setFighter] = useState({
    name: "",
    weightClass: "Featherweight", // Default value
    image: "",
    country: "",
    sex: "Male", // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFighter((prevFighter) => ({
      ...prevFighter,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new fighter object to send to db.json
    const newFighter = { ...fighter, id: Date.now() };

    // Determine the correct division based on sex
    const division = fighter.sex === "Male" ? "Men" : "Women";

    // POST request to add new fighter to the appropriate division in db.json
    fetch(`http://localhost:3000/fighters?division=${division}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFighter),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Fighter added:", data);
        // Clear the form after submission
        setFighter({
          name: "",
          weightClass: "Featherweight",
          image: "",
          country: "",
          sex: "Male",
        });
      })
      .catch((error) => console.error("Error adding fighter:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Fighter Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={fighter.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="weightClass">Weight Class:</label>
        <select
          id="weightClass"
          name="weightClass"
          value={fighter.weightClass}
          onChange={handleChange}
        >
          <option value="Featherweight">Featherweight</option>
          <option value="Lightweight">Lightweight</option>
          <option value="Welterweight">Welterweight</option>
          <option value="Middleweight">Middleweight</option>
          <option value="Heavyweight">Heavyweight</option>
        </select>
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="url"
          id="image"
          name="image"
          value={fighter.image}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={fighter.country}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="sex">Sex:</label>
        <select
          id="sex"
          name="sex"
          value={fighter.sex}
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button type="submit">Add Fighter</button>
    </form>
  );
};

export default FighterForm;
