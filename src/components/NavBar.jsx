import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
    <div className="Mainbar">
      <div className="subMainBar">
        <header className="hero-section">
          <nav className="navbar">
            <div className="logo">
              <h1>Cravy</h1>
            </div>
            <div className="nav-links">
              <a href="#"><b>Add restaurant</b></a>
              <a href="#"><b>Log in</b></a>
              <a href="#"><b>Sign up</b></a>
              <a href="#"><b>About Us</b></a>
            </div>
          </nav>

          <div className="search-box">
            <span className="location"> 
              <select className="inputSelection">
                <option className="locationPlaces">Hyderabad</option>
                <option className="locationPlaces">Delhi</option>
                <option className="locationPlaces">Kolkata</option>
                <option className="locationPlaces">Chennai</option>
                <option className="locationPlaces">Kerala</option>
              </select>
            </span>
            <input 
              type="text" 
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </header>
      </div>
    </div>
    </div>
  );
};

export default NavBar;
