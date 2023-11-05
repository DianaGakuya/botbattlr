import React from "react";

function YourBotArmy({ bots, deleteBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <h2>Your Bot Army</h2>
      <div className="ui tiny cards">
        {bots.map((bot, index) => (
          <div className="card" key={index} onClick={() => deleteBot(bot.id)}>
            <div className="image">
              <img alt="army bot" src={bot.avatar_url} />
            </div>
            <div className="content">
              <div className="header">{bot.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;