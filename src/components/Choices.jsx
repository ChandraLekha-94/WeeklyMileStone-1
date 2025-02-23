import React, { useRef } from "react";
import "../styles/Choices.css";

const choicesData = [
  { img: "dosa.jpeg", label: "Breakfast" },
  { img: "icecream.jpeg", label: "Cravings" },
  { img: "cake.jpeg", label: "Bakery" },
  { img: "juices.jpeg", label: "Beverages" },
  { img: "salads.jpeg", label: "Starters" },
  { img: "meals.jpeg", label: "Meals" },
  { img: "mandi.jpeg", label: "Mandi" },
  { img: "pureveg.jpeg", label: "Vegetarian" },
  { img: "kebab.jpeg", label: "Non-Vegetarian" },
  { img: "chineese.jpeg", label: "Chinese" },
];

const Choices = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 200; // Move left
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 200; // Move right
    }
  };

  return (
    <div className="choices-container">
    <div className="carousel-container">
      <button className="prev-btn" onClick={scrollLeft}>&#8592;</button>
      <div className="carousel" ref={carouselRef}>
        {choicesData.map((choice, index) => (
          <div className="item" key={index}>
            <img src={choice.img} alt={choice.label} />
            {choice.label}
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={scrollRight}>&#8594;</button>
    </div>
    </div>
  );
};

export default Choices;
