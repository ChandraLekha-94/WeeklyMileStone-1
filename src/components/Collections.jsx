import React from "react";
import "../styles/Collections.css";

const collectionsData = [
  {
    link: "#",
    imgSrc: "resorts.jpeg",
    altText: "Top Trending Spots",
    title: "Hotels & Resorts",
    places: "27 Places ▶",
  },
  {
    link: "#",
    imgSrc: "rental.jpg",
    altText: "Best Rooftop Places",
    title: "Party Spaces for private celebrations",
    places: "21 Places ▶",
  },
  {
    link: "#",
    imgSrc: "trending2.jpeg",
    altText: "Newly Opened Places",
    title: "Trending Places",
    places: "39 Places ▶",
  },
  {
    link: "#",
    imgSrc: "snapw.jpeg",
    altText: "Best Insta-worthy Places",
    title: "Best Snap Worthy Places",
    places: "31 Places ▶",
  },
];

const Collections = () => {
  return (
    <div className="collections-container">
    <div className="container">
      <h2><i>Collections</i></h2>
      <p>Explore Top Restaurants, Pubs, Hotels and Many More...</p>

      <div className="collections">
        {collectionsData.map((item, index) => (
          <div className="collection-card" key={index}>
            <a href={item.link}>
              <img src={item.imgSrc} alt={item.altText} />
              <div className="collection-text">
                {item.title} <br />
                <small>{item.places}</small>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Collections;
