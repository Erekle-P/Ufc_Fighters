import React, { useState } from "react";

const FighterForm = () => {
  const [name, setName] = useState("");
  const [weightClass, setWeightClass] = useState("Choose");
  const [image, setImage] = useState("");
  const [country, setCountry] = useState("");
  const [sex, setSex] = useState("Choose");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the required fields are filled
    if (name === "" || weightClass === "Choose" || image === "" || country === "" || sex === "Choose") {
      alert("Please fill all fields");
      return;
    }

    // Determine the correct division (Men or Women)
    const division = sex === "Male" ? "Men" : "Women";

    // Fetch the existing fighters from the selected division
    fetch(`http://localhost:4000/${division}`)
      .then((response) => response.json())
      .then((fighters) => {
        // Find the highest ID in the current list and increment it for the new fighter
        const maxId = fighters.length > 0 ? Math.max(...fighters.map((fighter) => fighter.id)) : 0;
        const newFighterId = maxId + 1;

        // Create a new fighter object with the form values and new ID
        const newFighter = {
          id: newFighterId,
          name,
          weightClass,
          image,
          country,
          sex,
        };

        // Send POST request to add the new fighter to the correct division in db.json
        fetch(`http://localhost:4000/${division}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newFighter),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to add fighter");
            }
            return response.json();
          })
          .then((addedFighter) => {
            // Reset the form fields
            setName("");
            setWeightClass("Choose");
            setImage("");
            setCountry("");
            setSex("Choose");

            // Optionally, log the added fighter or show a success message
            console.log("Fighter added:", addedFighter);
            alert("Fighter added successfully!");
          })
          .catch((error) => {
            console.error("Error adding fighter:", error);
            alert("Error adding fighter. Please try again.");
          });
      })
      .catch((error) => {
        console.error("Error fetching fighters:", error);
        alert("Error fetching fighters. Please try again.");
      });
  };

  return (
    <div className="fighter-form">
      <h2>Add New Fighter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Fighter Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="weightClass">Weight Class:</label>
          <select
            id="weightClass"
            name="weightClass"
            value={weightClass}
            onChange={(e) => setWeightClass(e.target.value)}
            required
          >
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
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="sex">Sex:</label>
          <select
            id="sex"
            name="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            required
          >
            <option value="Choose">Choose</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button type="submit">Add Fighter</button>
      </form>
    </div>
  );
};

export default FighterForm;
