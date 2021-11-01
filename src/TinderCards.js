import { useState } from "react";
import "./tinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Bill Gates",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FWxzSOOmpU9edoL8TGZlaQHaE8%26pid%3DApi&f=1",
    },
    {
      name: "Piggy",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslFwIPlWbOysoNQTUDqj-L_3fgPDOJ037vQ&usqp=CAU",
    },
    {
      name: "Popat",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.07mCyjiVluatLw4xyPHKgwHaFS%26pid%3DApi&f=1",
    },
    {
      name: "Jethalal",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GRlA2E-xlyrEECv4vJQcygHaE4%26pid%3DApi&f=1",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={people.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, people.name)}
            onCardLeftScreen={() => outOfFrame(people.name)}
          >
            <div
              style={{ backgroundImage: "url(" + person.url + ")" }}
              className="card"
            >
                <h3>{person.name}</h3>
            </div>

          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
