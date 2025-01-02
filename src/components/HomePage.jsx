import FighterForm from "./FighterForm";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the MMA Fighters Database</h1>
      <section className="mma-info">
        <h2>About MMA</h2>
        <p>
          Mixed Martial Arts (MMA) is a full-contact combat sport that allows a wide variety of fighting techniques and skills
          from a mixture of martial arts traditions and non-traditions. The rules allow the use of striking and grappling
          techniques, both while standing and on the ground. MMA is one of the fastest-growing sports in the world, celebrated
          for its athleticism, discipline, and diversity of fighting styles.
        </p>
      </section>
      <section className="fighter-form-container">
        <h2>Add a New Fighter</h2>
        <FighterForm />
      </section>
    </div>
  );
};

export default HomePage;
