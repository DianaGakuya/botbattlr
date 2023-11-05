import React from "react";
import BotCard from "./BotCard";

function BotCollection({ botData, viewBotDetails }) {
  return (
    
    <div className="ui four column grid">
      <br></br>
      <br></br>
         <h1>  &nbsp; &nbsp;  Collection of all bots</h1>
         
      <div className="row">
      
        {botData.map((bot) => (
          <BotCard key={bot.id} bot={bot} addBotToArmy={viewBotDetails} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;