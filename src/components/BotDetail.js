import React from "react";

function BotDetail({ bot, enlistBot }) {
  return (
    <div className="bot-detail">
      <h2>{bot.name}</h2>
      <p>{bot.description}</p>
      {/* You can add more details here... */}
      
      <button onClick={() => enlistBot(bot)}>Enlist Bot</button>
    </div>
  );
}

export default BotDetail;
