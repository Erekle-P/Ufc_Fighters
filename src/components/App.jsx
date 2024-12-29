import { useState, useEffect } from "react"; // Import hooks for state and effects
import { Outlet } from "react-router-dom"; // Import Outlet to render child routes
import NavBar from "./NavBar"; // Import the NavBar component

function App() {
  // State for storing fighter data (you can adjust this depending on your actual needs)
  const [fighters, setFighters] = useState([]);

  // Fetch fighters data (or any other required data)
  useEffect(() => {
    fetch("http://localhost:4000/Men") // Adjust the URL based on your actual endpoint
      .then((response) => response.json())
      .then((data) => setFighters(data.Men)) // Assuming you're fetching "Men" fighters
      .catch((error) => console.error("Error fetching fighters:", error));
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <>
      <NavBar /> {/* Render the NavBar */}
      <div className="content">
        {/* Render any common page content like headers, or use the Outlet to render child routes */}
        <h1>Fighters List</h1>
        <Outlet /> {/* This will render the current child route (Men's or Women's Division, etc.) */}
      </div>
    </>
  );
}

export default App;
