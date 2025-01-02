import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import './App.css'; // Import global styles

function App() {
  useEffect(() => {
    fetch("http://localhost:4000/Men")
      .then((response) => response.json())
      .then((data) => console.log("Fetched fighters:", data))
      .catch((error) => console.error("Error fetching fighters:", error));
  }, []);

  return (
    <>
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default App;
