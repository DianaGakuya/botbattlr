import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  const [data, setData] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((resp) => resp.json())
      .then((bots) => {
        setData(bots);
      });
  }, []);

  function viewBotDetails(bot) {
    setSelectedBot(bot);
  }

  function goBackToList() {
    setSelectedBot(null);
  }

  function addBotToArmy(bot) {
    if (!selectedBots.some(b => b.id === bot.id)) {
      setSelectedBots(prevBots => [...prevBots, bot]);
    }
    setSelectedBot(null); // This line will switch the view back to main page
  }
  

  function deleteBot(botId) {
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        const botsArray = selectedBots.filter((bot) => bot.id !== botId);
        setSelectedBots(botsArray);
      });
  }

  return (
    <div>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} goBack={goBackToList} enlistBot={addBotToArmy} />
      ) : (
        <>
          <YourBotArmy bots={selectedBots} deleteBot={deleteBot} />
          <BotCollection botData={data} viewBotDetails={viewBotDetails} />
        </>
      )}
    </div>
  );
}

export default BotsPage;
