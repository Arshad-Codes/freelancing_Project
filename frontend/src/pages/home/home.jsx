import React from "react";
import "./home.scss";
import Slide from "../../components/slide/Slide";
import { cards, profiles } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import ProfileCard from "../../components/profileCard/ProfileCard";

function Home() {
  return (
    <div className="home">
      <h1>Recent Gigs</h1>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <button>Show All Gigs</button>
      <h1> Recent Freelancers</h1>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {profiles.map((card) => (
          <ProfileCard key={card.id} card={card} />
        ))}
      </Slide>
      <button>Show All Freelances</button>
    </div>
  );
}

export default Home;
