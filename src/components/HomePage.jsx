import React, { useState, useEffect } from "react";
import FighterForm from "./FighterForm";
import Styles from './style.css';


const HomePage = () => {
  const [info, setInfo] = useState(""); // State to store MMA info

  useEffect(() => {
    // Fetching basic MMA info from an API or static content
    setInfo(
      "Step into the world of MMA 🥊 – where strength, skill, and strategy collide! 💥 Meet the fighters who redefine limits 💪, showcasing raw power and unbreakable will. From its roots in ancient combat sports 🏛️ to the global phenomenon it is today 🌍, MMA has evolved into the ultimate test of human endurance and technique. Get to know the champions 🏆, explore the divisions 🔥, and witness the fierce competition that fuels the fight for glory! ⚔️"
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
