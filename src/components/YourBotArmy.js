import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function YourBotArmy({ bots, deleteBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <h2>Dee's Bot Army</h2>
      <div className="ui tiny cards">
        {bots.map((bot, index) => (
          <div className="card" key={index} onClick={() => deleteBot(bot.id)}>
            <div className="image">
              <img alt="army bot" src={bot.avatar_url} />
            </div>
            <div className="content">
              <div className="header">
                {bot.name}
                <br></br>
                {bot.bot_class}
                <i className={botTypeClasses[bot.bot_class]} />
                </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;