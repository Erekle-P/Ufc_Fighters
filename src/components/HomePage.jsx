import React, { useState, useEffect } from "react";
import FighterForm from "./FighterForm";


const HomePage = () => {
  const [info, setInfo] = useState(""); // State to store MMA info

  useEffect(() => {
    // Fetching basic MMA info from an API or static content
    setInfo(
      "Mixed Martial Arts (MMA) is a full-contact combat sport that allows a wide variety of fighting techniques. It has grown significantly in popularity worldwide, especially through promotions like UFC, making it one of the fastest-growing sports globally."
    );
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to the MMA Fighters Database</h1>
      <section className="mma-info">
        <h2>About MMA</h2>
        <p>{info}</p>
      </section>
      <section className="fighter-form">
        <h2>Add a New Fighter</h2>
        <FighterForm />
      </section>
    </div>
  );
};

export default HomePage;
