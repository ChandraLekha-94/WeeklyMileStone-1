import React from "react";
import "../styles/Cards.css";

const Cards = () => {
  const cardData = [
    {
      img: "foodDining.jpeg",
      title: "🍽 Food & Dining",
      text: "🥗 View the city’s favourite dining venues",
    },
    {
      img: "orderOnline.jpeg",
      title: "Ordering & 🛵 Delivery",
      text: "🏠 Get chef-made gourmet dishes delivered home.",
    },
    {
      img: "events.jpeg",
      title: "🎭 Entertainment & Events",
      text: "Watch live plays and stage performances.",
    },
    {
      img: "Brands.jpeg",
      title: "🍕 Brands",
      text: "🍟 Order from your favourite Brands",
    },
  ];

  return (
    <div className="cards-container">
    <div className="card-container1">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.img} alt={card.title} />
          <div className="card-content">
            <p className="card-title">{card.title}</p>
            <p className="card-text">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Cards;
