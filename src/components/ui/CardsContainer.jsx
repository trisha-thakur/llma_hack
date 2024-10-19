import React, { useState } from "react";
import { Card } from "./Card";
import Popup from "./Popup"; 

const CardsContainer = () => {
  const cardsData = [
    {
      title: "/picture-note",
      description: " extract key content from images.",
      popupDescription: "capture images and convert them into notes."
    },
    {
      title: "/task",
      description: "creates task lists.",
      popupDescription: "Task management helps you organize and prioritize your daily tasks."
    },
    {
      title: "/summarise-ppt",
      description: "condenses presentations,.",
      popupDescription: "automatically summarize presentations."
    },
    {
      title: "/generate-imp-questions",
      description: "creates critical questions.",
      popupDescription: "Generate important questions based on your content."
    },
//     {
//       title: "/time-table",
//       description: "retrieve the most relevant questions from stored content.",
//       popupDescription: "Create and manage timetables for your classes or personal tasks."
//     },
    {
      title: "/voice-notes",
      description: " to convert memos into text,",
      popupDescription: "Record and store voice notes for easy recall of important information."
    }
  ];

  const [selectedCard, setSelectedCard] = useState(null); 
  const handleCardClick = (card) => {
    setSelectedCard(card); 
  };

  const handleClosePopup = () => {
    setSelectedCard(null); 
  };

  return (
    <div className="bg-black min-h-screen p-8">
      <h1 className="text-white text-5xl font-bold mb-12 text-center">Endpoints</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className="h-60 w-full bg-gray-950 rounded-lg shadow-lg cursor-pointer" 
            onClick={() => handleCardClick(card)}
          >
            <div className="text-white text-center">
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="mt-2">{card.description}</p>
            </div>
          </Card>
        ))}
      </div>

      {selectedCard && ( 
        <Popup
          title={selectedCard.title}
          description={selectedCard.popupDescription}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default CardsContainer;
